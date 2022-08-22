Run all tests

```bash
npx playwright test
```

Run test headed mode

```bash
npx playwright test --headed
```

Run specific test

```bash
npx playwright test login.spec.ts --headed
```



Reports

```bash
npx playwright show-report
```


Run CODEGEN

```bash
npx playwright codegen staging.doomobr.com
```


Add screenshots 

```bash
await page.screenshot({ path: 'beforeDelete.png', fullPage: true });
```