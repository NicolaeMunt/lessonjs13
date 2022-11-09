function changeColor(newColor) {
    const elem=document.getElementById("example");
    elem.style.color=newColor;
}


function reverse_a_number(n) {
    n=n+"";
    return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(562894)));