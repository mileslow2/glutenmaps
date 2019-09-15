import { SecureStore } from "expo";
const url = "http://Miless-MacBook-Pro.local:8081/getUserInfo";
var body;
var id;
var user;
export default async function GetUserData() {
  id = await SecureStore.getItemAsync("id");
  body = { id };
  body = JSON.stringify(body);
  await fetch(url, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(response => (user = response));
  return user;
}
