import { test } from '@playwright/test';
import login from './auth/login';
import removeClient from './clientes/removeClient';
import logout from './auth/logout';
import { editedClientExample } from '../config/franchiseeConsts';
import { BASE_URL } from '../config/config';


export default function createTests() {
  test.beforeEach(async ({ page }) => {
    const userEmail = process.env.EMAIL_FRANCHISEE
    const userPassword = process.env.PASSWORD_FRANCHISEE
    if (userEmail && userPassword)
      await login(page, BASE_URL, userEmail, userPassword)
    else { console.log('Invalid User Email'); return }

    // test.use({
    //   storageState: 'auth.json'
    // });
  })

  test('franchisee delete', async ({ page }) => {
    await removeClient(page, BASE_URL, editedClientExample)
    await logout(page, BASE_URL)
  })
}