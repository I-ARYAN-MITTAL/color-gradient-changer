let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let copy = document.querySelector(".copyCode"); 
// const hashKey = "#"; 
let rgb1 = "#c4a6a6";
let rgb2 = "#6a6aca";

const hexValue =() =>{
    let str = "0123456789abcdefg";
    var num = "";
    for(let i=0 ; i<6;i++){
         num = num + str[Math.floor(Math.random()*16)];
    }
    return "#"+num;
}

const handleButton1 = () =>{
    rgb1 = hexValue();
    btn1.innerText=rgb1;
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    copy.innerHTML=`background-image: linear-gradients(to right, ${rgb1} , ${rgb2})`;
}
const handleButton2 = () =>{
    rgb2 = hexValue();
    btn2.innerText=rgb2;
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1}, ${rgb2})`;
    copy.innerHTML=`background-image: linear-gradients(to right,${rgb1}, ${rgb2})`;
}

btn1.addEventListener("click",handleButton1);
btn2.addEventListener("click",handleButton2);

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(copy.innerText);
    alert("copied to clipboard");
})
