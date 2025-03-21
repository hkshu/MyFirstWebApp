function addNumbers() {
  // console.log(
  //   parseInt(document.getElementById("num1").value) +
  //     parseInt(document.getElementById("num2").value)
  // );

  //alert(parseInt(document.getElementById('num1').value) + parseInt(document.getElementById('num2').value));

  document.getElementById("result").innerHTML =
    "Result :: " +
    (parseInt(document.getElementById("num1").value) +
      parseInt(document.getElementById("num2").value));
}
