// Lightweight client-only guarded download page
const PASSWORD = 'ziad';
// --- حط اللينك هنا  ---
//here in the constant MANUAL_DOWNLOAD_LINK, you can set a custom download link for the file. If you leave it as an empty string, it will use the default file specified in DEFAULT_DOWNLOAD_FILE. Make sure to replace the placeholder link with the actual URL of your file if you choose to use a custom link.
// Leave as an empty string to use the default file in `files/`.
const MANUAL_DOWNLOAD_LINK = 'https://drive.google.com/file/d/1JUEhUNycVR3vKp9CRTO24PzJwLbwmX8b/view?usp=drive_link';
const DEFAULT_DOWNLOAD_FILE = 'files/JustB.exe';
const DEFAULT_FILE_INFO = {
    fileName: 'JustB.exe',
    fileSize: '34 MB',
    fileIntegrity: 'VERIFIED',
    fileUrl: DEFAULT_DOWNLOAD_FILE,
    passwordHint: 'Enter the password to unlock the secure download.'
};

let currentDownloadUrl = DEFAULT_DOWNLOAD_FILE;

window.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.disabled = true;
    document.getElementById('statusText').innerText = 'PASSWORD REQUIRED';
    document.getElementById('passwordInput').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });
    downloadBtn.addEventListener('click', startDownload);
    initializePage();
});

function initializePage() {
    applyFileInfo(DEFAULT_FILE_INFO);
    // Always require entering the password; do not auto-unlock via localStorage
    document.getElementById('gateOverlay').style.display = 'flex';
    document.getElementById('statusText').innerText = 'PASSWORD REQUIRED';
}

function applyFileInfo(info) {
    document.getElementById('fileName').textContent = info.fileName;
    document.getElementById('fileSize').textContent = info.fileSize;
    document.getElementById('fileIntegrity').textContent = info.fileIntegrity;
    document.getElementById('statusText').textContent = 'PASSWORD REQUIRED';
    document.getElementById('gateOverlay').style.display = 'flex';
    document.querySelector('.gate-note').textContent = info.passwordHint;
    currentDownloadUrl = info.fileUrl || DEFAULT_DOWNLOAD_FILE;
}

function checkPassword() {
    const input = document.getElementById('passwordInput');
    const error = document.getElementById('gateError');
    const value = input.value.trim();

    if (!value) {
        error.textContent = 'Please enter the password.';
        return;
    }

    if (value === PASSWORD) {
        localStorage.setItem('clientsUpdatesAuthorized', 'true');
        unlockPage();
    } else {
        error.textContent = 'Incorrect password. Please try again.';
        input.value = '';
        input.focus();
    }
}

function unlockPage() {
    document.getElementById('gateOverlay').style.display = 'none';
    const status = document.getElementById('statusText');
    const btn = document.getElementById('downloadBtn');
    btn.disabled = false;
    status.style.color = '#ffcc00';
    status.innerText = 'READY TO DOWNLOAD';
}

function startDownload() {
    const btn = document.getElementById('downloadBtn');
    const status = document.getElementById('statusText');

    if (btn.disabled) {
        status.style.color = '#ff5c5c';
        status.innerText = 'ENTER PASSWORD FIRST';
        return;
    }

    btn.textContent = 'PREPARING...';
    status.textContent = 'PREPARING SECURE DOWNLOAD...';
    const targetUrl = (MANUAL_DOWNLOAD_LINK && MANUAL_DOWNLOAD_LINK.trim() !== '') ? MANUAL_DOWNLOAD_LINK : currentDownloadUrl;
    window.location.href = targetUrl;
}
