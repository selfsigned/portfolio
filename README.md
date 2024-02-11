# selfsigned.github.io

My portfolio/resume website

## Infrastructre

### AWS Deployment

The API is deployed to the `eu-north-1` region by `tofu`. More specifically the github action runner gets an aws role via the the github iDP and uses it to deploy infrastructure changes.
The `SITE_API_ENDPOINT` variable is then exported and used when building the app to query the api gateway.
