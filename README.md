# toolShopUIAutomation

**Install Playwright**

**Run the following command to initialize Playwright:**

```npm init playwright@latest```

**Run this command to update playwright/test version**

```npm i @playwright/test@latest --save-dev```

**Run this command to download New Browsers if playwright version is updated**

```npx playwright install```

**Q/A before initializing the Project:** 

*Do you want to use TypeScript or JavaScript?* Choose: ```Javascript```

*Where to put your end-to-end tests?* Choose: ```tests```

*Add a GitHub Actions workflow?* (y/N) Choose: ```N```

*Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n)* Choose: ``Y``

*Do you want to Override the current playwright.config.js? (Y/n)* Choose: `n`

---------------------------------------------------------------------------


**Command to Install Additional Packages**

*Install Monocart-Reporter:* ```npm i monocart-reporter```

---------------------------------------------------------------

**Commands to Run the specs:**
1. ```npm run contactFormSubValidation```
2. ```npm run cartUpdateAddition```


**Reasoning**
Went with the POM design pattern
Tried to do Data Driver Testing, for simplicity used json as data input files