import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: ['**/*.test.tsx'],
    setupFiles: "./src/__tests__/setup.ts",
    coverage: {
      include: [
        "src/redux/**/*.ts", 
        "src/services/**/*.ts",
        "src/pages/**/*.ts", 
        "src/pages/**/*.tsx"
      ]
    }
  },
}))