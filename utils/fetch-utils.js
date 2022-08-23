export async function signUpUser(userInfo) {
    const resp = await fetch(`https://localhost:7890/api/v1/users`, {
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
