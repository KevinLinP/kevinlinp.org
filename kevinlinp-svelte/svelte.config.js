import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // Use Cloudflare Pages adapter configured for static site generation
    adapter: adapter({
      // Using static mode for Cloudflare Pages
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      }
    }),
    // Paths configuration
    paths: {
      base: '',
      assets: ''
    },
    // Support for prerendering
    prerender: {
      entries: ['*'],
      handleHttpError: 'warn'
    }
  }
};

export default config;