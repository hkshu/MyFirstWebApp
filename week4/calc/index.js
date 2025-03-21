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
  subscriberName = document.getElementById("name");
  subscriberEmail = document.getElementById("email");
  subscriberbDate = document.getElementById("bDate");

  alert('Thank you ' + subscriberName.value + ' for subscribing to our newsletter!');
}