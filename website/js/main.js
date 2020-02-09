// get nav button
const hamburger = document.querySelector('.hamburger')
// get hiddenNav 
const hiddenNav = document.querySelector('.hiddenNav')

hamburger.addEventListener('click', function () {
    console.log('hi')
    console.log(hiddenNav.style.display)
    if(hiddenNav.style.display == 'none') {
        hiddenNav.style.display = 'block'
        console.log('HIHIHI')
    }
})