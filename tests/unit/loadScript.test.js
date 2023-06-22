import loadScript from '../../src/loadScript.js';

test('loadScript adds script to body', () => {
    document.body.innerHTML = '';
    loadScript();
    expect(document.body.innerHTML).toContain('script');
    expect(document.body.innerHTML).toContain('dist/main.bundle.js');
});
