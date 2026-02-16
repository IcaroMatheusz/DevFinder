console.log("JS funcionando")

const nameInput = document.querySelector('#name')
const buttonSubmit = document.querySelector('#btn-finder')
const username = document.querySelector('#username')
const image = document.querySelector('#img-avatar')
const bio = document.querySelector('#bio')

buttonSubmit.addEventListener('click', async function(event) {
    event.preventDefault();

    const nameValue = nameInput.value

    try {
        const resp = await fetch(`https://api.github.com/users/${nameValue}`)
        if (!resp.ok) {
            throw new Error("User not found")
        }
        const user = await resp.json()
        username.textContent = `User found: \n${user.login}`
        image.src = user.avatar_url
        bio.textContent = user.bio

    } catch (error) {
        username.textContent = error.message
    }
})