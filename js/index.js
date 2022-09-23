import app from './firebase/app.js'
import { subscribeToHellfireClub } from './firebase/hellfire-club.js'

console.log(app)

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

const name = document.querySelector('#iname').value
const email = document.querySelector('#iemail').value
const level = document.querySelector('#ilevel').value
const character = document.querySelector('#icharacter').value

const buttonSubscribe = document.querySelector('#btnSubscribe')

buttonSubscribe.addEventListener('click', function() {

    const subscription = {
        name: name,
        email: email,
        level: level,
        character: character
    }

    console.log(subscription)

})


