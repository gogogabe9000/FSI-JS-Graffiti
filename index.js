
// Select some elements...
let header = document.querySelector('#page-header') //aligns the header titled "doggos" to the left
header.style.textAlign = 'left'

let dogImages = document.querySelectorAll('.dog-image') //changes the borders of the dog images to be rounded
for(let i=0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

let dogName = document.querySelectorAll('.dog-name')
for(let i=0; i < dogName.length; i++){
    dogname[i].style.textAlign = 'left'
}