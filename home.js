console.log('home js is connected');


const validPin=1234;



// add money handling

document.getElementById('add-money-option').addEventListener("click",function(){


  document.getElementById('add-money-option').style.borderColor='blue';
  document.getElementById('add-money-option').style.backgroundColor='cyan';


  document.getElementById('add-money-section').style.display = "block";
  document.getElementById('cashout-section').style.display = "none";


   
  const addMoneyBtn= document.getElementById('add-money-btn');
  addMoneyBtn.addEventListener("click",function(event){

  event.preventDefault();
  console.log("add money button is clicked");

  const bankName= document.getElementById('bank-acc').value;
  const bankAccountNumber = document.getElementById('account-number').value;
  const amountAdd = parseInt(document.getElementById('add-amount').value);
  const pinNumber = parseInt(document.getElementById('add-pin').value);
  const lastAmount=parseInt(document.getElementById('last-amount').innerText) ;

  if(bankAccountNumber.length <11){
    alert('please provide valid acc no');
    return;
  }

  if(pinNumber!==validPin){
    alert('incorrect pin given');
    return;
  }

  if( bankName=='' || amountAdd<=0 || pinNumber == null ){
    alert('nothing can be empty');

  }
  

  const newBalance = amountAdd + lastAmount;
  document.getElementById('last-amount').innerText=newBalance;

})


})





// cashout handling

document.getElementById('cashout-option').addEventListener("click",function(){

  document.getElementById('cashout-option').style.borderColor='blue';
  document.getElementById('cashout-option').style.backgroundColor='cyan';
  document.getElementById('add-money-section').style.display = "none";
  document.getElementById('cashout-section').style.display = "block";



 const withdrawbtn = document.getElementById('withdraw-money-btn');

  withdrawbtn.addEventListener("click",function(event){
    event.preventDefault();

  const agentNumber = document.getElementById('agent-number').value;
  const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value) ;
  const agentpinNumber = parseInt(document.getElementById('agent-add-pin').value);

  const lastAmount=parseInt(document.getElementById('last-amount').innerText) ;

  if(agentNumber.length <11){
    alert('please provide valid acc no');
    return;
  }

  if( agentpinNumber!==validPin){
    alert('incorrect pin given');
    return;
  }

  if(  withdrawAmount<=0 ||  agentpinNumber == null ){
    alert('nothing can be empty');

  }

  const newBalance = lastAmount-withdrawAmount;
  document.getElementById('last-amount').innerText = newBalance;


  })


  
  


})


