const SECRET_HASH = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'; // SHA-256 of 'password' - replace with your own hash
function checkPassword(input) {
    return async (text) => {
        const msgBuffer = new TextEncoder().encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex === SECRET_HASH;
    };
}

async function validateAccess() {
    const passwordInput = document.getElementById('password-input');
    const enterBtn = document.getElementById('enter-btn');
    const portal = document.getElementById('portal-content');
    const gate = document.getElementById('gate-overlay');

    if (!passwordInput || !enterBtn) return;

    enterBtn.onclick = async () => {
        const isValid = await checkPassword().then(fn => fn(passwordInput.value));
        if (isValid) {
            gate.style.display = 'none';
            portal.style.display = 'block';
        } else {
            alert('Invalid Access Key');
        }
    };
}
