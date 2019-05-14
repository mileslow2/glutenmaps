import { SecureStore } from "expo";
const url = "http://Miless-MacBook-Pro.local:2999/editUser";
var modified = false;
export default async function ModifyUser(body) {
  body.id = await SecureStore.getItemAsync("id");
  body = JSON.stringify(body);
  await fetch(url, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(response => (modified = response));
  return modified;
}
