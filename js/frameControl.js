// Load a file or URL into the iframe
function myFrame(file) {
    document.getElementById('myFrame').src = file;
}

// Download CV
function downloadCV() {
    const filename = 'Atlehang Semela cv2.pdf';
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Dark mode toggle
function toggleDarkMode() {
    const toggle = document.getElementById('mode-toggle');
    document.body.classList.toggle('dark-mode', toggle.checked);
}

// Listen for login success message from login.html inside the iframe
// window.addEventListener('message', (event) => {
//     if (event.data && event.data.action === 'loginSuccess') {
//         // After login, load your default landing page inside the frame
//         // Change 'desktop.html' to whatever page you want shown first
//         myFrame('desktop.html');
//     }
// });