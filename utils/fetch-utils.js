export async function signUpUser(userInfo) {
    const resp = await fetch(`${process.env.BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });
    const data = await resp.json();
    if (resp.ok) {
        location.replace('./tasks');
    } else {
        console.error(data.message);
    }
}

export async function signInUser(userInfo) {
    const resp = await fetch(`${process.env.BASE_URL}/api/v1/users/sessions`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo),
        credentials: 'include'
    });

    const data = await resp.json();
    if (resp.ok) {
        location.replace('./tasks');
    } else console.error(data.message);

}
