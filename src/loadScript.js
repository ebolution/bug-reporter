function loadScript() {
    const script = document.createElement('script');
    script.src = 'dist/main.bundle.js'; // The path to the bundled JavaScript file
    script.async = true;
    document.body.appendChild(script);
}

export default loadScript;
