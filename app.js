const buttons=document.querySelectorAll('button');
const screen=document.getElementById('screen');
for(let btn of buttons){
    btn.addEventListener('click',(e)=>{
        let buttonText = e.target.innerText;
        if(buttonText=='x'){
            screen.value += '*';
        }
        else if(buttonText == 'c'){
            screen.value = " ";
        }
        else if(buttonText == '='){
            try{
                screen.value=eval(screen.value);
            }
            catch(e){
                screen.value="invalied opretion";
                console.log(e.massage);
            }
        }
        else{
            screen.value +=buttonText;
        }
    })
}