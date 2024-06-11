const title = document.querySelector('.title')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    //console.log('value')
    title.style.marginTop = value  + 'px'
})