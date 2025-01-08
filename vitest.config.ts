import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Enables Vitest's global test utilities
    environment: 'jsdom', // Use jsdom for React component testing
    exclude: ['node_modules', 'dist', 'build'],
  },
});
