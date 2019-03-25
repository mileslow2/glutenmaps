function makeParam(param, value) {
  return param + "=" + value + "&";
}

export default async function GetPlaces(loc) {
  var returnValue;
  var googleMapRequest =
    "https://maps.googleapis.com/maps/api/place/textsearch/json?";
  googleMapRequest += makeParam(
    "key",
    "AIzaSyCaUWYt5ncgdYaU_zE10HsPxXN1BnSySRQ"
  );
  googleMapRequest += makeParam("input", "gluten-free");
  googleMapRequest += makeParam("location", loc.latitude + "," + loc.longitude);
  googleMapRequest += makeParam("radius", "100");
  googleMapRequest = googleMapRequest.substr(0, googleMapRequest.length - 1); //removes the & from the end
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
