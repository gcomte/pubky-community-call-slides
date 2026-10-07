import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const projectPath = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  root: projectPath('./web/'),
  base: './',
  publicDir: false,
  plugins: [
    {
      name: 'distribution-notices',
      apply: 'build',
      async generateBundle() {
        // Explicit source paths keep private references out of distributed assets.
        const notices = [
          ['./LICENSE', 'LICENSE'],
          ['./BRANDING.md', 'BRANDING.md'],
          ['./THIRD_PARTY_NOTICES.md', 'THIRD_PARTY_NOTICES.md'],
          ['./web/assets/fonts/OFL.txt', 'FONT-LICENSE.txt'],
        ];

        for (const [sourcePath, fileName] of notices) {
          const path = projectPath(sourcePath);
          this.addWatchFile(path);
          this.emitFile({ type: 'asset', fileName, source: await readFile(path) });
        }
      },
    },
  ],
  build: {
    outDir: projectPath('./dist/'),
    emptyOutDir: true,
  },
  server: {
    host: '127.0.0.1',
    port: 4322,
    strictPort: true,
    fs: {
      strict: true,
      // Keep incoming references outside the web root and outside the allowlist.
      allow: [projectPath('./web/'), projectPath('./node_modules/')],
      deny: [
        '.env',
        '.env.*',
        '*.{crt,pem,key,p12,pfx,cer,der}',
        '.npmrc',
        '.yarnrc.yml',
        '**/.git/**',
        '**/references/**',
        '**/.artifacts/**',
      ],
    },
  },
  preview: {
    host: '127.0.0.1',
    port: 4322,
    strictPort: true,
  },
});
