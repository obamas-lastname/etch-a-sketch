const container = document.querySelector('.container');

function createGrid(x){
        for(let i=1; i<=x; i++)
    {
        const column = document.createElement('div');
        column.setAttribute('class', 'column');

        for(let j=1;j<=x;j++)
        {
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            let measure = 960/x;
            box.style.width = measure + "px"; 
            box.style.height = measure + "px";
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = 'black';
            });
            column.appendChild(box);
        }
        container.appendChild(column);
}
}

createGrid(16);

const button = document.querySelector('button');
let input = document.createElement('div');
button.addEventListener('click', () => {
    document.querySelectorAll(".box")
    .forEach((e) => e.parentNode.removeChild(e));
    input = prompt("Enter grid size:");
    if(input<=100)
        createGrid(input);
    else
        alert("Grid size has to be smaller than 100!");
})