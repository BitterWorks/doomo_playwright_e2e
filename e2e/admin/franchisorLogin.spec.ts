import { test } from '@playwright/test';
import { BASE_URL } from '../config/config';
import login from './auth/login';

export default function createTests() {
  test.setTimeout(800000)
  test('franchisor login', async ({ page }) => {
    const userEmail = process.env.EMAIL_FRANCHISOR
    const userPassword = process.env.PASSWORD_FRANCHISOR
    if (userEmail && userPassword) {
      await login(page, BASE_URL, userEmail, userPassword)
      await page.context().storageState({ path: 'authFranchisor.json' });
    }
    else { console.log('Invalid User Email'); return }
  })
}