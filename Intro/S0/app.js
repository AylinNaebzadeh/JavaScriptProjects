const btn = document.querySelector('button')
btn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
    // a browser code, not JS code, it is shown inspect -> console tab
    console.log('Hello world')
})