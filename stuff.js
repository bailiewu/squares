console.clear()
const colors = ['yellow', 'orange', 'purple', 'teal'];
generateDom(colors);//should generate squares, buttons and event handlers

const showButton = document.getElementById('show-btn')
showButton.addEventListener('click', function(){
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.style.display = ''
    });
})

const hideButton = document.getElementById('hide-btn')
hideButton.addEventListener('click', function(){
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.style.display = 'none'
    });
})

const ul = document.querySelector('ul')
const squares = document.querySelectorAll('.square')
squares.forEach( square => {
  square.addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerHTML = `you clicked on ${ this.id}`;
    if (this.id.length < 1){
        li.innerHTML = `you clicked on ${square.style.backgroundColor}`
    }
    ul.appendChild(li);
    // console.log(square.style.backgroundColor)
    // console.log(getComputedStyle(square).backgroundColor) returns rgb color

  })
});

function generateDom(colorArr) {
    // add a class of square in squarecontainer class
    const squareContainer = document.querySelector('.squareContainer')
    // console.log(squareContainer.children)
    // let square = document.createElement('div')
    // square.className = 'square'
    // square.style.backgroundColor = 'red'
    // squareContainer.appendChild(square)
    colorArr.forEach(color => {
    let square = document.createElement('div')
    square.className = 'square'
    square.style.backgroundColor = color
    squareContainer.appendChild(square)
    });

}
