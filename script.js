console.log('script connected');

const btn=  document.getElementById("login-btn");

console.log(btn.innerText);


btn.addEventListener("click",function(event){
  event.preventDefault();
  // console.log('login button clicked');
  const mobileNumber= 12345678910;
  const pinNumber=1234;
  const inputNumber = document.getElementById('input-number').value;
  const finputNumber = parseInt(inputNumber);
  const inputPin= document.getElementById('input-pin').value;
  const finputPin=parseInt(inputPin);

  // console.log(finputNumber + "   " + typeof finputNumber);

  if(mobileNumber===finputNumber && pinNumber===finputPin){
    // console.log('login successfull');
    window.location.href="./home.html";
    
  }
  else{
    alert("invalid credentials");
  }


})

