let dice =document.getElementsByClassName('dice');
console.log(dice);
// const rollBtn=document.querySelector('.roll');
const rollBtnd = document.getElementById('rollbutton');
// const rollBtn= document.getElementsByClassName("roll");

const randomDice=() =>
{
    const random=Math.floor(Math.random() *10);
    if(random>=1 && random<=6)
    {
        rollDice(random);
    }
    else
    {
        randomDice();
    }
}
const rollDice =random=>
{
    dice[0].style.animation='rolling 4s';
    dice[1].style.animation='rolling 4s';
    dice[2].style.animation='rolling 4s';
    dice[3].style.animation='rolling 4s';
    dice[4].style.animation='rolling 4s';
    setTimeout(()=>
    {
        switch (random) {
            case 1:
                dice[0].style.transform = 'rotateX(0deg) rotateY(0deg)';
                dice[1].style.transform = 'rotateX(0deg) rotateY(0deg)';
                dice[2].style.transform = 'rotateX(0deg) rotateY(0deg)';
                dice[3].style.transform = 'rotateX(0deg) rotateY(0deg)';
                dice[4].style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
        
            case 2:
                dice[0].style.transform = 'rotateX(-90deg) rotateY(0deg)';
                dice[1].style.transform = 'rotateX(-90deg) rotateY(0deg)';
                dice[2].style.transform = 'rotateX(-90deg) rotateY(0deg)';
                dice[3].style.transform = 'rotateX(-90deg) rotateY(0deg)';
                dice[4].style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
        
            case 3:
                dice[0].style.transform = 'rotateX(0deg) rotateY(90deg)';
                dice[1].style.transform = 'rotateX(0deg) rotateY(90deg)';
                dice[2].style.transform = 'rotateX(0deg) rotateY(90deg)';
                dice[3].style.transform = 'rotateX(0deg) rotateY(90deg)';
                dice[4].style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
        
            case 4:
                dice[0].style.transform = 'rotateX(0deg) rotateY(-90deg)';
                dice[1].style.transform = 'rotateX(0deg) rotateY(-90deg)';
                dice[2].style.transform = 'rotateX(0deg) rotateY(-90deg)';
                dice[3].style.transform = 'rotateX(0deg) rotateY(-90deg)';
                dice[4].style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
        
            case 5:
                dice[0].style.transform = 'rotateX(90deg) rotateY(0deg)';
                dice[1].style.transform = 'rotateX(90deg) rotateY(0deg)';
                dice[2].style.transform = 'rotateX(90deg) rotateY(0deg)';
                dice[3].style.transform = 'rotateX(90deg) rotateY(0deg)';
                dice[4].style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
        
            case 6:
                dice[0].style.transform = 'rotateX(180deg) rotateY(0deg)';
                dice[1].style.transform = 'rotateX(180deg) rotateY(0deg)';
                dice[2].style.transform = 'rotateX(180deg) rotateY(0deg)';
                dice[3].style.transform = 'rotateX(180deg) rotateY(0deg)';
                dice[4].style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
        
            default:
                break;
        }
        dice.style.animation='none';
    },100);

}
rollBtnd.addEventListener('click',randomDice);

