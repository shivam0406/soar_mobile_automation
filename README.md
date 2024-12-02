
# **Mobile Automation with WebdriverIO**

This project demonstrates mobile automation testing using **WebdriverIO** with a focus on the Wikipedia sample app. The automation framework is built following the **Page Object Model (POM)** for modular and reusable test scripts, with added support for **Allure Reporting** for detailed test results.

---

## **Project Structure**

```
├── node_modules/               # Installed Node.js modules
├── test/                       # Main test folder
│   ├── pages/                  # Page Object classes
│   │   ├── HomePage.js         # Page Object for Home Page
│   │   ├── SearchPage.js       # Page Object for Search functionality
│   │   ├── SettingsPage.js     # Page Object for Settings Page
│   ├── specs/                  # Test specification files
│   │   ├── home.spec.js        # Home Page tests
│   │   ├── search_bar.spec.js  # Search Bar tests
│   │   ├── settings.spec.js    # Settings Page tests
│   ├── utils/                  # Utilities
│       ├── CommonActions.js    # Reusable functions for common actions
├── allure-results/             # Allure report results (generated after tests)
├── wdio.conf.js                # WebdriverIO configuration file
├── package.json                # NPM dependencies and scripts
├── package-lock.json           # NPM lockfile
└── README.md                   # Documentation for the project
```

---

## **Setup**

### **Prerequisites**
1. **Node.js**: Ensure you have Node.js installed (v14 or later).
2. **Java**: Required for running Appium.
3. **Appium**: Install Appium globally using:
   ```bash
   npm install -g appium
   ```
4. **Android Emulator/Real Device**: Set up an emulator or connect a real device with USB debugging enabled.

---

### **Installation**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Ensure Appium is running:
   ```bash
   appium
   ```

---

## **Running Tests**

### **Run All Tests**
```bash
npx wdio
```

### **Run Specific Test Files**
To run specific test files, update the `specs` key in `wdio.conf.js`, or use the CLI:
```bash
npx wdio --spec ./test/specs/home.spec.js
```

---

## **Test Scenarios**

### **1. Home Page Tests**
- **Features**:
  - Click on `History`, `My Lists`, `Nearby`, and `Explore` icons.
  - Validate navigations and ensure the correct page loads for each icon.
  - Scroll down to find "Picture of the Day" (scrolling implementation pending).
- **File**: `test/specs/home.spec.js`

### **2. Search Page Tests**
- **Features**:
  - Click on the search bar and enter "New York."
  - Validate that search results are displayed.
  - Clear the search and navigate back to the home page.
- **File**: `test/specs/search_bar.spec.js`

### **3. Settings Page Tests**
- **Features**:
  - Navigate to "Settings" via the "More Options" menu.
  - Disable switches for:
    - `Show Images`
    - `Show Link Previews`
    - `Send Usage Reports`
    - `Send Crash Reports`
  - Validate that each switch turns off successfully.
- **File**: `test/specs/settings.spec.js`

---

## **Key Features**

### **1. Page Object Model (POM)**
Encapsulates locators and actions for each page, ensuring:
- Modular, reusable, and maintainable code.
- Centralized management of locators.

### **2. Utilities**
- `CommonActions`: Reusable methods for common actions, such as:
  - `clickIfVisible`: Ensures elements are visible before interaction.
  - `waitForElement`: Dynamic waits for elements to avoid flaky tests.

### **3. Assertions**
- Added assertions to validate the outcomes of actions (e.g., page navigation, search results).

### **4. Reporting**
- Integrated **Allure Reporting** for detailed, visual test reports.
- Generate and view reports using:
  ```bash
  allure generate --clean allure-results && allure open
  ```

---

## **Future Enhancements**
1. **Screenshots**: Add screenshot capturing for failures and validations.
2. **Retry Logic**: Integrate retry strategies for unstable tests.
3. **CI/CD Integration**: Automate test runs using Jenkins, GitHub Actions, or other CI/CD tools.
4. **Scrolling Fix**: Improve the scrolling mechanism for dynamic content.

---

## **Troubleshooting**

### **Common Issues**
- **Appium not running**: Ensure Appium is started before running the tests.
- **Element not found**: Check if the emulator/device screen matches the expected layout.
- **Allure Report error**: If Allure fails, ensure it's installed properly using:
  ```bash
  npm install --save-dev @wdio/allure-reporter
  ```

---

