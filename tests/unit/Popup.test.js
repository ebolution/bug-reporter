import Popup from '../../src/components/Popup/Popup.js';

test('Popup opens', () => {
    const popup = new Popup();
    popup.open();
    expect(popup.popupEl.style.display).toBe('block');
});

test('Popup closes', () => {
    const popup = new Popup();
    popup.open();
    popup.close();
    expect(popup.popupEl.style.display).toBe('none');
});

test('Popup sets content', () => {
    const popup = new Popup();
    popup.setContent('<p>Test Content</p>');
    expect(popup.popupEl.querySelector('.popup-content').innerHTML).toContain('Test Content');
});
