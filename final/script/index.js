function clearList() {
  document.querySelector("ul").innerHTML = "";
  document.getElementById("holidayButton").innerHTML = "Show Holidays List";
}

function fetchData() {
  var myKey = secretPhrase();

  // Fetching data from the API
  url =
    "https://calendarific.com/api/v2/holidays?api_key=" +
    myKey +
    "&country=es-b&year=2025";
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //console.log(data.response.holidays);
      data.response.holidays.forEach((records) => {
        const type = records.type;

        if (type == "National holiday") {
          markup = `<li> <strong> ${records.date.iso} </strong> :: ${records.name} </li>`;

          document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
        }
      });
      document.getElementById("holidayButton").innerHTML = "Hide Holidays List";
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Check if the email matches the pattern
  return emailPattern.test(email);
}

function addSubscriber() {
  var subscriberName = "";
  var subscriberEmail = "";
  var subscriberBirthDate = "";

  if (document.getElementById("name") != "") {
    subscriberName = document.getElementById("name");
    subscriberEmail = document.getElementById("email");
    subscriberBirthDate = document.getElementById("bDate");

    //alert('Thank you ' + subscriberName.value + ' for subscribing to our newsletter!');

    //alert(document.getElementById("displayData").innerHTML);
    if (validateEmail(subscriberEmail.value)) {
      document.getElementById("thankYou").innerHTML =
        "Thank you " +
        subscriberName.value +
        " for subscribing to our newsletter!. We will send you an email to " +
        subscriberEmail.value +
        " on your birthday " +
        subscriberBirthDate.value +
        " with a special gift!";
      document.getElementById("thankYou").style.color = "yellow";
      document.getElementById("thankYou").style.fontSize = "20px";
      event.preventDefault();
    } else {
      document.getElementById("thankYou").innerHTML =
        "Please check your email address. It should be in the format: abc@xyz.com";
      document.getElementById("thankYou").style.color = "red";
      event.preventDefault();
    }
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

function getDate18YearsOld() {
  var today = new Date();
  var birthDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  //console.log(birthDate);
  document
    .getElementById("bDate")
    .setAttribute("max", birthDate.toISOString().split("T")[0]);
}
