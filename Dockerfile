FROM mcr.microsoft.com/playwright:v1.25.0-focal

COPY . .

RUN npm i

CMD npx playwright test