variable "region" {
  type        = string
  description = "region to deploy resources at (not used for tfstate)"
}

variable "domain" {
  type        = string
  description = "domain the site will be deployed at, used in resource naming"
}