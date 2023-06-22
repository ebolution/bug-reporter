class Form {
    constructor(popup) {
        this.formEl = document.getElementById('bug-report-form');
        this.popup = popup;

        // Event listener to handle form submission
        this.formEl.onsubmit = (event) => {
            event.preventDefault();

            // Gather form data
            const description = document.getElementById('description').value;
            const screenshot = document.getElementById('screenshot').files[0];
            const attachments = document.getElementById('attachments').files;

            // Construct bug report object
            const bugReport = {
                description,
                screenshot,
                attachments,
                url: window.location.href,
                timestamp: new Date().toISOString(),
                browserInfo: navigator.userAgent,
                screenResolution: `${window.screen.width}x${window.screen.height}`,
            };

            // Dispatch event with bug report data
            document.dispatchEvent(new CustomEvent('bugReportSubmitted', { detail: bugReport }));

            // Close the form
            this.popup.close();
        }
    }
}

export default Form;
