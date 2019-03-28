export default function GetDescriptions(rests) {
  //   for (var i = 0; i < rests.length; i++) {
  //     getDescription(rests[i].place_id);
  //   }
  console.log(rests[0])
  // console.log(rests[0.])
  // getDescription(rests[0].place_id);
  return rests;
}

async function getDescription(placeid) {
  const googleMapRequest =
    "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +
    placeid +
    "&fields=address_component&key=" +
    "AIzaSyCaUWYt5ncgdYaU_zE10HsPxXN1BnSySRQ";
  try {
    await fetch(googleMapRequest)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  } catch (error) {
    console.error(error);
  }
}
