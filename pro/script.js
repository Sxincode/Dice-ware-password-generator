let title=document.querySelector('.main-text');
let text="Dice-Ware password  generator!";
let index=1;
const typeWriter=()=>
{
    let new_title=text.slice(0,index);
    console.log(new_title);
    title.innerText = new_title;
    // if(index>text.length)
    // {
    //     // index=1;
    // } 
    index++;

    setTimeout(handler=>typeWriter(),100)
}
typeWriter();