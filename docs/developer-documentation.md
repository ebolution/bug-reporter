# Developer Documentation

## Getting Started with Bug Reporter JavaScript Library

This JavaScript library allows users to report bugs directly from the website they are using. Users can describe the issue, upload screenshots, and attach any additional files. The library then sends this data to Jira and creates a new bug report.

### Requirements
Before you start, make sure you have the following installed:

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)
- Git
- Your favorite text editor or IDE

### Clone the repository

Start by cloning the repository from Github to your local machine. Run the following command:

```sh
git clone https://github.com/username/repository.git
```

Remember to replace 'username' and 'repository' with the username and repository name of the Github repository.

### Install Dependencies

Once you've cloned the repository, navigate into the project folder and install the project's dependencies with npm. Run the following command:

```sh
cd repository
npm install
```

### Development Workflow

This project is organized according to the SOLID principles and takes a modular approach to JavaScript development. The project structure is as follows:

```
src/
  components/
    Popup/
      Popup.js
      popup.html
    Form/
      Form.js
      form.html
  services/
    JiraService.js
  main.js
  loadScript.js
tests/
  unit/
    Popup.test.js
    Form.test.js
    loadScript.test.js
  integration/
    JiraService.test.js
```

For any new features or fixes, start by writing user stories to define the scope of work. Then, create a new branch for the feature or fix:

```sh
git checkout -b feature/your-feature-name
```

Next, implement your feature or fix in the appropriate component or service, following the SOLID principles. Each JavaScript class should have its own file, and any HTML templates associated with a component should be in the same directory as their JavaScript file.

After writing your code, write unit tests to verify its correctness. The unit tests for each component or service should be in a file named `component-name.test.js` or `service-name.test.js`, located in the `tests/unit/` directory.

Once your feature or fix is complete and all tests are passing, commit your changes:

```sh
git add .
git commit -m "Add your feature or fix"
```

Finally, push your changes to Github and open a pull request for your branch:

```sh
git push origin feature/your-feature-name
```

## Build

The project uses Webpack as a module bundler. To build the project, use the following command:

```sh
npm run build
```

This will create a bundled JavaScript file at `dist/main.bundle.js`.

## Testing

The project uses Jest for unit and integration testing. To run the tests, use the following command:

```sh
npm test
```

## Deployment

After building the project, the `dist/main.bundle.js` file can be added to any website to enable the bug reporter functionality. The `loadScript.js` function can be used to dynamically add the script to the page. Remember to replace the Jira API URL, project key, and API token with your own values before deployment.

Happy coding!
