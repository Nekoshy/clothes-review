export const checkToken = async () => {
    const res = await fetch('/api/auth/auth')
    // const data = res.json();
    console.log(res.statusText);
    if (res.statusText === 'OK') {
        return true;
    }
}

