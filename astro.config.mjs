// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// ============================================================
// TEMPLATE BLOG MONÉTISÉ — remplace site par ton domaine réel
// ============================================================
export default defineConfig({
  // ⚠️ À MODIFIER à chaque clonage : https://TON_USER.github.io/TON-REPO
  site: 'https://gary-deshayes.github.io/jardin-potager',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
