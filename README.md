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

CODEGEN save credentials

```
npx playwright codegen localhost:3000 --save-storage=auth.json
```

CODEGEN load credentials

```
npx playwright codegen localhost:3000 --load-storage=auth.json
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


# AWS S3

## List s3 buckets
```bash
aws s3 ls
```

## List files in bucket
```bash
aws s3 ls s3://doomo-e2e-files/
```

## Upload folder to bucket
```bash
aws s3 cp e2e s3://doomo-e2e-files/ --recursive
```

## Get git branch into variable
```bash
export BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
echo $BRANCH
```
## Upload tests (pipeline)

```bash
aws s3 cp e2e s3://doomo-e2e-files/$BRANCH --recursive
```

## Download from s3

```bash

```


## Run in Docker 

```bash
docker run -it -v $(pwd):/tests --rm --ipc=host mcr.microsoft.com/playwright:v1.25.0-focal /bin/bash
cd tests
npx playwright test
```

### Copy report from container to folder

```bash
docker cp 8fbe664eba65:/tests/playwright-report/ `pwd`/playwright-report/.
```