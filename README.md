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


# Deploy

```
export AWS_ACCESS_KEY_ID=AKIARHY3MOFOQBRZQC7L
export AWS_SECRET_ACCESS_KEY=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
export AWS_DEFAULT_REGION=us-east-1
export AWS_REGISTRY_TEST_E2E=085419913565.dkr.ecr.us-east-1.amazonaws.com/doomo_e2e
docker login -u AWS -p $(aws ecr get-login-password --region $AWS_DEFAULT_REGION) $AWS_REGISTRY_TEST_E2E        
docker build -t $AWS_REGISTRY_TEST_E2E   .
docker push $AWS_REGISTRY_TEST_E2E
```