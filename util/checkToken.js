export const checkToken = async () => {
    const res = await fetch('/api/auth/auth')
    if (res.statusText === 'OK') {
        return true;
    }
}

