import { SecureStore } from "expo";
var verified = false;
var email, password, body;
const url = "http://Miless-MacBook-Pro.local:8081/login";
export default async function VerifyUser() {
  email = await SecureStore.getItemAsync("email");
  password = await SecureStore.getItemAsync("password");
  hasCredentials = email != null && password != null;
  if (hasCredentials) {
    body = {
      email,
      password
    };
    body = JSON.stringify(body);
    await fetch(url, {
      method: "post",
      body,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(async response => {
        verified = response.verified;
        if (response.verified)
          await SecureStore.setItemAsync("id", response.id.toString());
      });
  }
  return verified;
}
