// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(
      // {
      //   default options are shown
      //   pages: 'build',
      //   assets: 'build',
      //   fallback: null,
      // }
    ),
  },
};

export default config;