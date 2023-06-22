# Integrator Documentation

## Integrating the Bug Reporter JavaScript Library into Your Website

The Bug Reporter is a JavaScript library that enables your users to report bugs directly from your website. This document explains how to integrate this library into your website.

### Requirements

Before integrating the Bug Reporter library into your website, please ensure that you have:

- The bundled JavaScript file for the Bug Reporter library (`main.bundle.js`). 
- An active Jira instance with a project for collecting bug reports. 
- An API token for your Jira instance.

### Integrating the Bug Reporter Library

To integrate the Bug Reporter library into your website, follow these steps:

1. **Upload the `main.bundle.js` file to your website's server:** 

   This JavaScript file contains the bundled code for the Bug Reporter library. You can place it in any directory that is accessible to your website's frontend code. For example, you might put it in a `scripts/` directory.

2. **Add the `main.bundle.js` file to your website:**

   You need to include the `main.bundle.js` file in your website's HTML. You can add it with a `<script>` tag in your HTML files, like so:

   ```html
   <script src="scripts/main.bundle.js" async></script>
   ```

   Alternatively, you can use the `loadScript` function provided by the library to dynamically add the `main.bundle.js` file to your website. The `loadScript` function should be called when the page loads or when a specific user interaction happens, depending on your requirements.

   Please replace `"scripts/main.bundle.js"` with the actual path to the `main.bundle.js` file on your server.

3. **Configure the JiraService:**

   The Bug Reporter library uses a service named JiraService to send bug reports to your Jira instance. You need to provide the URL of your Jira instance, the key of the project where bug reports should be created, and your API token. 

   You can do this by modifying the JiraService initialization in the `main.js` file:

   ```javascript
   const jiraService = new JiraService('https://your-jira-instance.atlassian.net', 'PROJECT_KEY', 'API_TOKEN');
   ```

   Please replace `'https://your-jira-instance.atlassian.net'`, `'PROJECT_KEY'`, and `'API_TOKEN'` with the URL of your Jira instance, your project key, and your API token, respectively.

Once you've followed these steps, the Bug Reporter library should be successfully integrated into your website. Your users can now report bugs directly from your website, and these bug reports will be sent to your Jira project.
