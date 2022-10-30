import { test } from '@playwright/test';
import { BASE_URL } from '../config/config';
import login from './auth/login';

test.describe('login', async () => {
    test.setTimeout(80000)
    test('agent', async ({ page }) => {
        const userEmail = process.env.EMAIL_AGENT
        const userPassword = process.env.PASSWORD_AGENT
        if (userEmail && userPassword) {
            await login(page, BASE_URL, userEmail, userPassword)
            await page.context().storageState({ path: 'authAgent.json' });
        }
        else { console.log('Invalid User Email'); return }
    })

    test('franchisee', async ({ page }) => {
        const userEmail = process.env.EMAIL_FRANCHISEE
        const userPassword = process.env.PASSWORD_FRANCHISEE
        if (userEmail && userPassword) {
            await login(page, BASE_URL, userEmail, userPassword)
            await page.context().storageState({ path: 'authFranchisee.json' });
        }
        else { console.log('Invalid User Email'); return }
    })
})