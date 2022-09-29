import { subscribeToHellFireClub } from './firebase/hellfire-club.js'

window.addEventListener('click', function() {
    const audio = document.getElementById('music')
    audio.play()
    audio.volume = 0.2
})

const buttonTheme = document.querySelector('#switch-theme-button')
buttonTheme.addEventListener('click', switchTheme)

function switchTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    const theme = document.body.classList[0];
    const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

    const audio = document.getElementById('music');
    audio.src = `assets/musics/${music}`;
    audio.play();
    audio.volume = 0.2;
}

const iname = document.querySelector('#iname')
const email = document.querySelector('#iemail')
const level = document.querySelector('#ilevel')
const character = document.querySelector('#icharacter')

const buttonSubscribe = document.querySelector('#btnSubscribe')

buttonSubscribe.addEventListener('click', async (e) => {

    e.preventDefault()
    const subscription = {
        name: iname.value,
        email: email.value,
        level: level.value,
        character: character.value
    }

    const subscriptionId = await subscribeToHellFireClub(subscription)
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    iname.value = ''
    email.value = ''
    level.value = ''
    character.value = ''

})


