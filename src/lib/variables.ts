export const variables = {
	commitInfo: typeof __COMMIT_INFO__ !== 'undefined' ? __COMMIT_INFO__ : 'unknown commit',
	siteApiEndpoint: typeof __SITE_API_ENDPOINT__ !== 'undefined' ? __SITE_API_ENDPOINT__ : null
};
