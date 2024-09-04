/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "PortfolioApp": {
      "type": "sst.aws.SvelteKit"
      "url": string
    }
    "PortfolioEmail": {
      "sender": string
      "type": "sst.aws.Email"
    }
    "selfsigned.dev": {
      "sender": string
      "type": "sst.aws.Email"
    }
  }
}
export {}
