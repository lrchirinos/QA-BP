-----------------------------------------------------
E2E AND API AUTOMATION PROJECT - DEVSU TECHNICAL TEST
Role: Data QA Automation Engineer
Candidate: Luis Rolando Chirinos Hualcas
-----------------------------------------------------

1. PROJECT DESCRIPTION
This repository contains the resolution of the technical test for the Data QA Automation Engineer role. 
Cypress (Nodejs) has been used as a unified framework to solve both the 
E2E exercise (Option 2: Saucedemo) and the API exercise (Option 3: Petstore).

2. ARCHITECTURE AND DESIGN PATTERNS
The Page Object Model (POM) pattern has been implemented for the UI automation. 
The project structure is as follows:
  - /cypress/e2e/ui: Contains the E2E test cases for Saucedemo.
  - /cypress/e2e/api: Contains the REST services (CRUD) tests for Petstore.
  - /cypress/support/pages: Contains the POM classes, separating selectors from logic.

3. PREREQUISITES
- Nodejs (Tested on v26.3.0 or higher)
- npm (Tested on v11.16.0 or higher)
- Git (optional, to clone the repository)

4. INSTALLATION INSTRUCTIONS
Step 1: Unzip the file or clone the repository.
Step 2: Open a terminal in the root path of the project.
Step 3: Run the following command to install all dependencies (including Cypress):
        > npm install

5. EXECUTION INSTRUCTIONS
To open the Cypress graphical interface and watch the step-by-step execution:
  - Run: npx cypress open
  - Select "E2E Testing"
  - Select a browser and click on the desired scripts.

To run the tests in console mode (Headless) automatically:
  - Run: npx cypress run