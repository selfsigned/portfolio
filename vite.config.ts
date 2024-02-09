import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { execSync } from 'child_process';
import Icons from 'unplugin-icons/vite';

const commitInfo = execSync('git describe --abbrev=4 --dirty --always --tags').toString();

export default defineConfig({
	define: {
		__COMMIT_INFO__: JSON.stringify(commitInfo)
	},
	plugins: [sveltekit(), Icons({ compiler: 'svelte', autoInstall: true })],
	ssr: {
		noExternal: ['three']
	}
});
