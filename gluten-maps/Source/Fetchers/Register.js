import cloneDeep from "clone-deep";
const url = "http://Miless-MacBook-Pro.local:8081/register";
let body;
export default async function Register(credentials)
{
    body = cloneDeep(credentials);
    delete body.confirmedPassword;
    body = JSON.stringify(body);
    return await fetch(url,
        {
            method: "POST",
            body,
            headers:
            {
                "Content-Type": "application/json"
            }
        })
        .then(response =>
        {
            return response.json();
        });
}