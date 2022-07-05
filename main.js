// color array
let colors = ['yellow', 'red', 'green', 'orange', 'purple', 'blue', 'black', 'aqua' ]

// get button
let button = document.getElementById('button');

// add event listener
button.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random()*colors.length)]

    let container = document.getElementById('container');

    container.style.background = randomColor;
})