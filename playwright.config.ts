import * as dotenv from 'dotenv';
import { defineConfig, devices } from '@playwright/test';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 10_000
  },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }]
  ],
  use: {
    baseURL: process.env.BASE_URL ?? 'https://example.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    ignoreHTTPSErrors: true
  },
  projects: [
    {
      name: 'edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge'
      }
    }
  ]
});