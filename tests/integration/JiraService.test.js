import JiraService from '../../src/services/JiraService/JiraService.js';

test('JiraService sends data to Jira API and receives response', async () => {
    const jiraService = new JiraService('https://your-jira-instance.atlassian.net', 'PROJECT_KEY', 'API_TOKEN');

    // Mock bug report data
    const bugReport = {
        description: 'Test bug report',
        screenshot: 'screenshot.png',
        attachments: ['attachment.png'],
        url: 'http://localhost',
        timestamp: '2023-06-22T10:20:30Z',
        browserInfo: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        screenResolution: '1920x1080',
    };

    // Mock fetch API
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ id: '12345', key: 'PROJECT_KEY-1', self: 'https://your-jira-instance.atlassian.net/rest/api/2/issue/12345' }),
        })
    );

    const response = await jiraService.createIssue(bugReport);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('key');
    expect(response).toHaveProperty('self');
});
