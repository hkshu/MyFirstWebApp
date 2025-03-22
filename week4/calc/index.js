function clearDisplay() {
  document.getElementById("display").value = "";
}

function appendToDisplay(number) {
  document.getElementById("display").value += number;
}

function calculate() {
    const display = document.getElementById("display").value;   
    const result = eval(display);
    document.getElementById("display").value = result;
}



function validateEmail(email) {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailPattern.test(email);
  
  }
function addSubscriber() {
  var subscriberName = "";
  var subscriberEmail = "";
  var subscriberBirthDate = "";

  if (document.getElementById("newsletter").checked)
     {
      subscriberName = document.getElementById("name");
      subscriberEmail = document.getElementById("email");
      subscriberBirthDate = document.getElementById("bDate");

    //alert('Thank you ' + subscriberName.value + ' for subscribing to our newsletter!');

    //alert(document.getElementById("displayData").innerHTML);
    if (subscriberBirthDate.value != "" & subscriberEmail.value != "" & subscriberName.value != "" & validateEmail(subscriberEmail.value)){
          document.getElementById("thankYou").innerHTML = "Thank you " + subscriberName.value + " for subscribing to our newsletter!. We will send you an email to " + subscriberEmail.value + " on your birthday " + subscriberBirthDate.value + " with a special gift!"; 
          event.preventDefault()
      }
    else{
          document.getElementById("thankYou").innerHTML = "Please provide all information below"; 
         }
    }
  else
    {
      document.getElementById("thankYou").innerHTML = 'Please check the newsletter checkbox';
    }  
  //document.getElementById("email").value = subscriberEmail.value;
  //document.getElementById("bDate").value = subscriberbDate.value;

}