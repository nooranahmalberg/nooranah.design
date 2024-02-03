const tokenEndpoint = "https://accounts.spotify.com/api/token";
const clientID = "YOUR_CLIENT_ID";
const authorizationCode = "AUTHORIZATION_CODE_RECEIVED_FROM_SPOTIFY";
const redirectURI = "YOUR_REDIRECT_URI";

const requestBody = new URLSearchParams();
requestBody.append("grant_type", "authorization_code");
requestBody.append("code", authorizationCode);
requestBody.append("redirect_uri", redirectURI);
requestBody.append("client_id", clientID);

fetch(tokenEndpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: requestBody,
})
  .then((response) => response.json())
  .then((data) => {
    const accessToken = data.access_token;
    console.log("Access Token:", accessToken);

    // Now you can use the access token to make authenticated requests to the Spotify API directly from the client
  })
  .catch((error) => {
    console.error(
      "Error exchanging authorization code for access token:",
      error
    );
  });
