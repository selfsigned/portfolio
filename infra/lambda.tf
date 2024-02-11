data "aws_iam_policy_document" "lambda_contact_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "iam_contact_lambda" {
  name               = "${var.domain}-lambda-contact"
  assume_role_policy = data.aws_iam_policy_document.lambda_contact_role.json
}

resource "aws_iam_role_policy_attachment" "lambda_basic" {
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
  role       = aws_iam_role.iam_contact_lambda.name
}


data "archive_file" "lambda_contact" {
  type        = "zip"
  source_file = "contact.py"
  output_path = "contact_function_payload.zip"
}

resource "aws_lambda_function" "contact" {
  function_name = "lambda_contact"
  filename      = "contact_function_payload.zip"
  handler       = "contact.lambda_handler"
  role          = aws_iam_role.iam_contact_lambda.arn

  source_code_hash = data.archive_file.lambda_contact.output_base64sha256

  runtime = "python3.11"
}