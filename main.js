const fruitlist=['apple','banana','grapefruit','orange'];

const ulElement=document.querySelector('ul');
fruitlist.forEach((fruit) =>{
    const itemElement =document.createElement('li');
    itemElement.textContent=fruit;
    ulElement.appendChild(itemElement);
});