function fetchData() {

  import { apiKey } from "config.js";
  
  const url = "https://calendarific.com/api/v2/holidays?api_key=" & apiKey & "&country=es-b&year=2025";
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then((data) => {
      console.log(data.response.holidays);
      data.response.holidays.forEach((records => {

        const type = records.type;

        if (type == "National holiday") {
          markup = `<li> <strong> ${records.date.iso} </strong> :: ${records.name} </li>`;
        
          document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
        }

      }));
    })
    .catch((error) => console.error("Error fetching data:", error));
  }



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

  if (document.getElementById("newsletter").checked) {
    subscriberName = document.getElementById("name");
    subscriberEmail = document.getElementById("email");
    subscriberBirthDate = document.getElementById("bDate");

    //alert('Thank you ' + subscriberName.value + ' for subscribing to our newsletter!');

    //alert(document.getElementById("displayData").innerHTML);
    if (
      (subscriberBirthDate.value != "") &
      (subscriberEmail.value != "") &
      (subscriberName.value != "") &
      validateEmail(subscriberEmail.value)
    ) {
      document.getElementById("thankYou").innerHTML =
        "Thank you " +
        subscriberName.value +
        " for subscribing to our newsletter!. We will send you an email to " +
        subscriberEmail.value +
        " on your birthday " +
        subscriberBirthDate.value +
        " with a special gift!";
      event.preventDefault();
    } else {
      document.getElementById("thankYou").innerHTML =
        "Please provide all information below";
    }
  } else {
    document.getElementById("thankYou").innerHTML =
      "Please check the newsletter checkbox";
  }


}

function upperCase(id) {
  const x = document.getElementById(id);
  x.value = x.value.toUpperCase();
}


function lowerCase(id) {
  const x = document.getElementById(id);
  x.value = x.value.toLowerCase();
}

fetch('week5/script/config.json').then(function (config) {
  console.log('API key:', config.apiKey);
  const api_key = config.apiKey;
});

