/// <reference path="./.sst/platform/config.d.ts" />
import 'dotenv/config';

const createGithubOIDC = (githubOrganization: string, githubRepo: string) => {
	// Adds the Github OIDC provider
	const OIDP = new aws.iam.OpenIdConnectProvider('GithubOIDC', {
		url: 'https://token.actions.githubusercontent.com',
		clientIdLists: ['sts.amazonaws.com'],
		thumbprintLists: [
			'6938fd4d98bab03faadb97b34396831e3780aea1',
			'1c58a3a8518e8759bf075b76b750d4f2df264fcd'
		]
	});

	// Adds the Github OIDC role
	OIDP.arn.apply((OIDC_arn) => {
		const GithubRole = new aws.iam.Role('GithubActionsRole', {
			name: 'PortfolioGithubRole',
			maxSessionDuration: 3600,
			assumeRolePolicy: JSON.stringify({
				Version: '2012-10-17',
				Statement: [
					{
						Effect: 'Allow',
						Principal: {
							Federated: OIDC_arn
						},
						Action: 'sts:AssumeRoleWithWebIdentity',
						Condition: {
							StringLike: {
								'token.actions.githubusercontent.com:sub': `repo:${githubOrganization}/${githubRepo}:*`
							},
							StringEquals: {
								'token.actions.githubusercontent.com:aud': 'sts.amazonaws.com'
							}
						}
					}
				]
			})
		});

		new aws.iam.RolePolicyAttachment('adminPolicyAttachment', {
			role: GithubRole.name,
			policyArn: 'arn:aws:iam::aws:policy/AdministratorAccess'
		});
	});
};

export default $config({
	app(input) {
		return {
			name: 'selfsigned-portfolio',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			home: 'aws',
			providers: {
				aws: {
					region: 'eu-north-1'
				}
			}
		};
	},
	async run() {
		const domain = 'selfsigned.dev';
		const isProduction = $app.stage === 'production';

		// Github OIDC
		if (isProduction) {
			createGithubOIDC('selfsigned', 'portfolio');
		}

		// Emailing
		const email = isProduction
			? new sst.aws.Email('PortfolioEmail', {
					sender: domain,
					dmarc: 'v=DMARC1; p=quarantine; adkim=s; aspf=s;'
				})
			: sst.aws.Email.get('PortfolioEmail', domain);

		// Tie everything together
		new sst.aws.SvelteKit('PortfolioApp', {
			domain: isProduction ? domain : undefined,
			link: [email]
		});
	}
});
