# Mono Interview Task

## Overview
This repository contains:
- Manual testing results and bug reports
- AI-assisted test planning and analysis
- Automated test suite using Playwright
- Documentation of AI usage during the testing process

## Running Automated Tests (Playwright)

1. Navigate to the automation folder  
```cd automation/playwright```

2. Install dependencies  
```npm install```

3. Install Playwright browsers  
```npx playwright install```

4. Run all tests  
```npx playwright test```

5. Run a specific test  
```npx playwright test test/login.spec.js```

6. View HTML report  
```npx playwright show-report```

## Notes
- Tests cover key user flows such as login, gallery interaction, album creation, and logout
- AI tools were used to assist in test generation and debugging
- All tests were manually reviewed to ensure they reflect real user behavior

This project demonstrates a combination of manual testing, automation, and AI-assisted workflows.