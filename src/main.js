import Popup from './components/Popup/Popup.js';
import Form from './components/Form/Form.js';
import JiraService from './services/JiraService/JiraService.js';

// Initialize components
const popup = new Popup();
const form = new Form(popup);
const jiraService = new JiraService('https://your-jira-instance.atlassian.net', 'PROJECT_KEY', 'API_TOKEN');

// Event listener for 'bugReportSubmitted' events
document.addEventListener('bugReportSubmitted', async (event) => {
    const bugReport = event.detail;

    // Send bug report to Jira
    const response = await jiraService.createIssue(bugReport);
    console.log(`Bug reported to Jira: ${response.key}`);
});
