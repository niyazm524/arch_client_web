const json = {
    token: ''
}

function setCookie(json) {
    document.cookie = `token=${json.token}`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return value;
}
