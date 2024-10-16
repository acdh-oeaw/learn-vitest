// import tsConfigPaths from "vite-tsconfig-paths";
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  //plugins: [tsConfigPaths()], // Uncomment if a module cant be found,  tells vite to take tsconfig.json paths into account
  test: {
    include: ['./tests/**/*.test.ts'],
    //setupFiles: ['./.vitest.config/setup-vitest.ts'],
    coverage: {
      enabled: true,
      provider: 'v8',
      reportsDirectory: './coverage/raw/default',
      reporter: ['json', 'text', 'html'],
    },
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname, // Dont use relative aliase, use this instead
      './client': resolve('./src/client'),
      '../tests/mock-data': resolve('./tests/mock-data'),
    },
    // Configuiration for browser mode
    // If a framework like vue is used => include it the corresponding vite plugin
    browser: {
      provider: 'playwright',
      enabled: true,
      name: 'chromium',
    },
  },
});
