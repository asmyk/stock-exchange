function authenticate(login, pass) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve({ isAuthenticated: true }), 100)
    });

    return promise;
}

export { authenticate };