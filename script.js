document.getElementById('yes')
const no = document.getElementById('no')
const title = document.getElementById('title')
const buttons = document.getElementById('buttons')
const img2 = document.getElementById('img2')
let img = document.getElementById('img')

no.onclick = function (nope) {
    yes.style.width = '120px'
    yes.style.height = '70px'
    yes.style.fontSize = '30px'
    no.textContent = 'Are u really sure?'
    no.style.width = '70px'
    no.style.width = '160px'
    no.onclick = function () {
        yes.style.width = '160px'
        yes.style.height = '100px'
        yes.style.fontSize = '70px'
        no.textContent = 'Think again...'
        no.style.width = '160px'
        no.onclick = function () {
            yes.style.width = '250px'
            yes.style.height = '140px'
            yes.style.fontSize = '100px'
            no.textContent = 'U dont want to break my heart...'
            no.style.width = '180px'
            no.style.height = '60px'
            no.onclick = function () {
                yes.style.width = '340px'
                yes.style.height = '180px'
                yes.style.fontSize = '120px'
                no.textContent = 'What if I say i have chocolate'
                no.onclick = function () {
                    yes.style.width = '90px'
                    yes.style.height = '40px'
                    yes.textContent = 'YES'
                    yes.style.fontSize = '18px'
                    yes.style.marginLeft = '4.5%'
                    no.style.width = '90px'
                    no.style.height = '40px'
                    no.textContent = 'No'
                    no.style.alignContent = '30px'
                    
                    no.onclick = function playSound() {
                        sound.currentTime = 0;
                        sound.play()
                        const x = Math.random() * (window.innerWidth - no.offsetWidth)
                        const y = Math.random() * (window.innerHeight - no.offsetHeight)
                        no.style.position = 'absolute'; 
                        no.style.left = `${x}px`
                        no.style.top = `${y}px`
                    }
                }
            }
        }
    }
}

yes.onclick = function () {
    img.src = img.src.includes('meow.gif') ? 'meow2.gif' : 'meow.gif'
    title.style.display = 'none'
    yes.style.display = 'none'
    no.style.display = 'none'
    let = document.getElementById('music')
    music.play()
}