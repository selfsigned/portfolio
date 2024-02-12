resource "aws_apigatewayv2_api" "api_gateway" {
  name          = var.domain
  protocol_type = "HTTP"

  cors_configuration {
    allow_credentials = false
    allow_origins     = ["https://${var.domain}"] # hack lol
    allow_methods     = ["GET", "POST"]
  }
}

resource "aws_apigatewayv2_stage" "api_gateway" {
  api_id = aws_apigatewayv2_api.api_gateway.id
  name   = "prod"

  auto_deploy = true

  default_route_settings {
    throttling_rate_limit  = 20
    throttling_burst_limit = 5
  }
}

// link to our lambda
resource "aws_apigatewayv2_integration" "contact" {
  api_id = aws_apigatewayv2_api.api_gateway.id

  integration_uri    = aws_lambda_function.contact.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}
// contact route
resource "aws_apigatewayv2_route" "contact" {
  api_id = aws_apigatewayv2_api.api_gateway.id

  route_key = "POST /contact"
  target    = "integrations/${aws_apigatewayv2_integration.contact.id}"
}
// allow api_gw to call lambda
resource "aws_lambda_permission" "api_gateway_contact" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.contact.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.api_gateway.execution_arn}/*/*"
}