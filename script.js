
const input = document.querySelector('input')
const form = document.querySelector('form')
const timeMinutes = document.getElementById('minutes')
const timeSeconds = document.getElementById('seconds')
const subscribed = document.querySelector('.subscribed')

function newSubscribe() {
    if (input.value !== null || input.value !== '') {
        localStorage.setItem('maratona_dev:new-subscribe',
            JSON.stringify(input.value))
        if (localStorage.getItem('maratona_dev:new-subscribe')) {
            subscribed.innerText = 'Sua inscrição foi realizada com sucesso!'
        }
    }
}

function startTime() {
    let currentSeconds = parseInt(timeSeconds.innerText)
    let currentMinutes = parseInt(timeMinutes.innerText)

    setInterval(() => {
        currentSeconds--
        timeSeconds.innerText = currentSeconds
        console.log(currentSeconds)
        if (currentSeconds < 1) {
            currentSeconds = `0${currentSeconds}`
            timeSeconds.innerText = currentSeconds
            currentSeconds = 60
            
            currentMinutes = currentMinutes - 1
            timeMinutes.innerText = currentMinutes
        }


        if (currentSeconds < 10 ) {
            currentSeconds = `0${currentSeconds}`
            timeSeconds.innerText = currentSeconds
        }


    }, 1000)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    newSubscribe()
})

window.addEventListener('load', startTime)