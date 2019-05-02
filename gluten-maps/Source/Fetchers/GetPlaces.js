function makeParam(param, value) {
  return param + "=" + value + "&";
}

function removeunnecessary(data) {
  for (var i = 0; i < data.length; i++) {
    delete data[i].plus_code;
    delete data[i].price_level;
    delete data[i].types;
    delete data[i].icon;
    delete data[i].user_ratings_total;
    delete data[i].photos[0].html_attributions;
    delete data[i].photos[0].height;
    delete data[i].photos[0].width;
    delete data[i].geometry.viewport;
    delete data[i].geometry.southwest;
  }
  return data;
}
export default async function GetPlaces(loc) {
  var returnValue;
  var googleMapRequest =
    "https://maps.googleapis.com/maps/api/place/textsearch/json?";
  googleMapRequest += makeParam("input", "gluten-free");
  googleMapRequest += makeParam("inputtype", "textquery");
  googleMapRequest += makeParam("location", loc.latitude + "," + loc.longitude);
  googleMapRequest += makeParam("radius", "100");
  googleMapRequest += makeParam(
    "key",
    "AIzaSyBugHx4mjVMJEzGkpeEc5RNdOYfCBADaGY"
  );
  googleMapRequest = googleMapRequest.substr(0, googleMapRequest.length - 1); //removes the & from the end
  try {
    await fetch(googleMapRequest)
      .then(res => res.json())
      .then(res => {
        returnValue = res.results;
      });
  } catch (error) {
    console.error(error);
  }
  return removeunnecessary(returnValue);
}
