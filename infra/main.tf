terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.36"
    }
  }
  backend "s3" { // terraform is awful
    bucket         = "github-action-wahgei"
    key            = "selfsigned.dev.tfstate"
    region   = "eu-north-1"
    dynamodb_table = "terraformlock"
  }
}

provider "aws" {
  region = var.region
}