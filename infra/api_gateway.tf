resource "aws_apigatewayv2_api" "api_gateway" {
  name          = var.domain
  protocol_type = "HTTP"
}