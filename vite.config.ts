import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
import { execSync } from 'child_process';
import Icons from 'unplugin-icons/vite';

const commitInfo = execSync('git describe --abbrev=4 --always').toString();

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		define: {
			__SITE_API_ENDPOINT__: JSON.stringify(env.SITE_API_ENDPOINT),
			__COMMIT_INFO__: JSON.stringify(commitInfo)
		},
		plugins: [sveltekit(), Icons({ compiler: 'svelte', autoInstall: true })],
		ssr: {
			noExternal: ['three']
		}
	};
});
