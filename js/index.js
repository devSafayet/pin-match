function getPin(){
    const pin = Math.round(Math.random() *10000);
    const pinString= pin + '';
    if (pinString.length== 4){
        return pin;
    }
    else{
        return getPin();
    }
};
function generatePin(){
    const pin= getPin();
    document.getElementById('display-pin').value= pin;
}

// second part

document.getElementById('key-pad').addEventListener('click', function(even){
    const number= even.target.innerText;
    const calcInput = document.getElementById('typed-numbres');
    if(isNaN(number)) {
        if(number== 'C'){
            calcInput.value= '';
        }
    }
    else{
        const previousNumber= calcInput.value;
        const newNumber= previousNumber + number;
        calcInput.value= newNumber;
    }
   
})
// verify section + button

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers= document.getElementById('typed-numbres').value;
    const success = document.getElementById('notify-success');
    const failError= document.getElementById('notify-fail');
    if(pin == typedNumbers){
        failError.style.display='none';
        success.style.display= 'block';
    }
    else{
        success.style.display= 'none';
        failError.style.display='block';
    }
}