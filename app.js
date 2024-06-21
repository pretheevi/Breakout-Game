const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;

class Block{
    constructor(xAxis, yAxis){
        this.bottomLeft = 
    }
}

//draw my block
function addBlock(){
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.marginLeft = '100px';
    block.style.marginBottom = '50px';
    block.style.marginTop = '250px';
    grid.appendChild(block);
}
addBlock();
