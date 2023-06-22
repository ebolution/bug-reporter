class JiraService {
    constructor(apiUrl, projectKey, apiToken) {
        this.apiUrl = apiUrl;
        this.projectKey = projectKey;
        this.apiToken = apiToken;
    }

    createIssue(bugReport) {
        const issueData = {
            fields: {
                project: {
                    key: this.projectKey,
                },
                summary: bugReport.description.substring(0, 200), // Jira summary has a limit of 255 chars
                description: JSON.stringify(bugReport), // Convert bugReport object to JSON string for Jira description
                issuetype: {
                    name: "Bug",
                },
            },
        };

        return fetch(`${this.apiUrl}/rest/api/2/issue/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${btoa(`apiToken:${this.apiToken}`)}`, // Basic auth requires base64-encoded "username:password"
            },
            body: JSON.stringify(issueData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .catch(e => {
                console.error('There was a problem with the fetch operation: ' + e.message);
            });
    }
}

export default JiraService;
