import { expect, test } from '@playwright/test';
import { BASE_URL } from '../config/config';



    test('home', async ({ page }) => {
        await page.goto(BASE_URL);
    });
}