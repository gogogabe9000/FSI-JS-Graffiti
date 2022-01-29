
// Select some elements...
let header = document.querySelector('#page-header') //aligns the header titled "doggos" to the left
header.style.textAlign = 'left'

let dogImages = document.querySelectorAll('.dog-image') //changes the borders of the dog images to be rounded
for(let i=0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

let dogName = document.querySelectorAll('.dog-name') //Aligns the names of all the dogs to the left.
for(let i=0; i < dogName.length; i++){
    dogName[i].style.textAlign = 'left'
}

let footerColor = document.querySelectorAll('.dog-description')
for(let i=0; i < dogName.length; i++){
    footerColor[i].style.color = 'blue'
}