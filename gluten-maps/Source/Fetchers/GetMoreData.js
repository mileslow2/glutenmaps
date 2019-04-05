export default async function GetMoreData(data) {
  var returnValue;
  const googleMapRequest =
    "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +
    data.reference +
    "&fields=opening_hours,website,formatted_phone_number&key=AIzaSyCaUWYt5ncgdYaU_zE10HsPxXN1BnSySRQ";
  try {
    await fetch(googleMapRequest)
      .then(res => res.json())
      .then(res => {
        delete res.result.opening_hours.periods;
        returnValue = Object.assign(data, res.result);
      });
  } catch (error) {
    console.error(error);
  }
  return returnValue;
}
