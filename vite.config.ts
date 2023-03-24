/** @type {import('vite').UserConfig} */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import StylelintPlugin from 'vite-plugin-stylelint'
import eslintPlugin from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const envs = loadEnv(mode, process.cwd(), '');
  const appUrl = new URL(envs.VITE_APP_URL);

  return ({
    define: {
      'import.meta.env.APP_PORT': appUrl.port,
    },
    plugins: [
      react(),
      eslintPlugin(),
      StylelintPlugin({ include: ['styled.ts', 'tsx'] }),
      tsconfigPaths(),
    ]
  });
});
