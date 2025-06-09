function alertTZ(event) {
  if (event.target.value.length > 0) {
    let citySelected = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY hh:mm A");

    alert(`It is ${citySelected} in ${event.target.value}.`);
  }
}

let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", alertTZ);

// function alertTimeZone(event) {
// let cityLondon = moment()
//   .tz("Europe/London")
//    .format("dddd, MMMM D, YYYY hh:mm A");
//  let cityBangkok = moment()
//   .tz("Asia/Bangkok")
//   .format("dddd, MMMM D, YYYY hh:mm A");
//  let citySydney = moment()
//   .tz("Australia/Sydney")
//    .format("dddd, MMMM D, YYYY hh:mm A");

//  if (event.target.value === "london") {
//   alert(`It is ${cityLondon} in London, UK.`);
//  }
//  if (event.target.value === "bangkok") {
//  alert(`It is ${cityBangkok} in Bangkok, Thailand.`);
//  }
//  if (event.target.value === "sydney") {
//  alert(`It is ${citySydney} in Sydney, Australia.`);
//  }
// }

//let selectCity = document.querySelector("#city");
//selectCity.addEventListener("change", alertTimeZone);
