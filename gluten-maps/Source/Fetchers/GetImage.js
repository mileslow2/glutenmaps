export default function GetImage(photo_reference) {
  return (
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photoreference=" +
    photo_reference +
    "&key=AIzaSyCaUWYt5ncgdYaU_zE10HsPxXN1BnSySRQ"
  );
}
