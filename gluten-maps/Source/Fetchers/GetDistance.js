export default async function GetDistance(loc, dest) {
  var returnVal;
  var googleMapRequest =
    "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" +
    loc.lat +
    "," +
    loc.lon +
    "&destinations=" +
    dest.lat +
    "%2C" +
    dest.lng +
    "+&key=AIzaSyCaUWYt5ncgdYaU_zE10HsPxXN1BnSySRQ";
  try {
    await fetch(googleMapRequest)
      .then(res => res.json())
      .then(res => {
        returnValue = res;
      });
  } catch (error) {
    console.error(error);
  }
  return returnValue;
}
