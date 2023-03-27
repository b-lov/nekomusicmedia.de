import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      edge: false,
      split: false
    }),
    alias: {
      $i18n: 'src/i18n'
    }
  },
  preprocess: vitePreprocess()
};

export default config;
