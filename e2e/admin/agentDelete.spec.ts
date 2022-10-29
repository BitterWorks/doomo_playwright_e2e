import { test } from '@playwright/test';
import login from './auth/login';
import { editedClientExample } from '../config/agentConsts';
import removeClient from './clientes/removeClient';
import logout from './auth/logout';


export default function createTests() {
    const BASE_URL = process.env.BASE_URL || "https://staging.doomobr.com"
    test.beforeEach(async ({ page }) => {
      const userEmail = process.env.EMAIL_AGENT
      const userPassword = process.env.PASSWORD_AGENT
      if (userEmail && userPassword)
        await login(page, BASE_URL, userEmail, userPassword)
      else { console.log('Invalid User Email'); return }

      // test.use({
      //   storageState: 'auth.json'
      // });
    })

    test('agent delete',async ({ page }) => {
      await removeClient(page, BASE_URL, editedClientExample)
      await logout(page, BASE_URL)
    })
}