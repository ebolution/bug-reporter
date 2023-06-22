import Form from '../../src/components/Form/Form.js';
import Popup from '../../src/components/Popup/Popup.js';

test('Form gathers data and dispatches event on submit', () => {
    const popup = new Popup();
    const form = new Form(popup);

    // Simulate form data
    document.getElementById('description').value = 'Test bug report';
    document.getElementById('screenshot').files = [new File([], 'screenshot.png')];
    document.getElementById('attachments').files = [new File([], 'attachment.png')];

    const eventHandler = jest.fn();
    document.addEventListener('bugReportSubmitted', eventHandler);

    // Simulate form submission
    const submitEvent = new Event('submit');
    form.formEl.dispatchEvent(submitEvent);

    expect(eventHandler).toBeCalled();
    expect(popup.popupEl.style.display).toBe('none');
});
