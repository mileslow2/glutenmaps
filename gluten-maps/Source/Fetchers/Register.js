import cloneDeep from "clone-deep";
const url = "http://Miless-MacBook-Pro.local:2999/register";
var registered;
var body;
export default async function Register(credentials) {
  body = cloneDeep(credentials);
  delete body.confirmedPassword;
  body = JSON.stringify(body);
  console.log(body);
  await fetch(url, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(response => (registered = response));
  return registered;
}
