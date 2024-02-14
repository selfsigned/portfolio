# selfsigned.github.io

My portfolio/resume website

## Stack

- [SvelteKit](https://kit.svelte.dev/) (The best) Web Framework
- [Threlte](https://threlte.xyz/) Awesome Svelte bindings around three.js
- [Tailwind](https://tailwindcss.com/) Makes writing CSS fun and fast
- [DaisyUI](https://daisyui.com/) Great components and theming for tailwind, why reinvent the wheel?
- [Github Pages](https://pages.github.com/) Hosting for cheapskates
- [AWS](https://aws.amazon.com/) Minimal 'backend' via API Gateway and Lambda, much needed vendor lock-in

### Misc Libraries

- [Unplugins-icons](https://github.com/unplugin/unplugin-icons) Vite icon extension that works with SSR!
- [V86](https://github.com/copy/v86) The future of the web, X86 emulation
- [svelte-scroller](https://github.com/sveltejs/svelte-scroller) Beats calculating element sections positions by hand
- [Three-inspect](https://github.com/threlte/three-inspect) Cool scene inspector for Three.js/Threlte, bloats the package size though

## Infrastructre

The portfolio is deployed directly on github pages via a github action.
SvelteKit is set to use the `adapter-static`

### Schema

TODO

### AWS Deployment

The API is deployed to the `eu-north-1` region by `tofu`. More specifically the github action runner gets an aws role via the the github iDP and uses it to deploy infrastructure changes.
The `SITE_API_ENDPOINT` variable is then exported and used when building the app to query the api gateway.
