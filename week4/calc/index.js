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

function addSubscriber() {
  var subscriberName = "";
  var subscriberEmail = "";
  var subscriberbDate = "";

  if (document.getElementById("newsletter").checked)
     {
      subscriberName = document.getElementById("name");
      subscriberEmail = document.getElementById("email");
      subscriberbDate = document.getElementById("bDate");

    //alert('Thank you ' + subscriberName.value + ' for subscribing to our newsletter!');

    //alert(document.getElementById("displayData").innerHTML);
    if (subscriberbDate.value != "" & subscriberEmail.value != "" & subscriberName.value != ""){
          document.getElementById("thankYou").innerHTML = "Thank you " + subscriberName.value + " for subscribing to our newsletter!. We will send you an email to " + subscriberEmail.value + " on your birthday " + subscriberbDate.value + " with a special gift!"; 
          event.preventDefault()
      }
    else{
          document.getElementById("thankYou").innerHTML = "Please enter your d"; 
         }
    }
  else
    {
      document.getElementById("thankYou").innerHTML = 'Please check the newsletter checkbox';
    }  
  //document.getElementById("email").value = subscriberEmail.value;
  //document.getElementById("bDate").value = subscriberbDate.value;

}