const logInOut = (element) => {
    if (element.innerText == 'Login') {
        element.innerText = 'Logout';
    } else if (element.innerText == 'Logout') {
        element.innerText = 'Login';
    }
}

const hide = (element) => {
    element.remove();
}
