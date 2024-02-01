const fetch = require("node-fetch");
const querystring = require("querystring");

const tokenEndpoint = "https://accounts.spotify.com/api/token";
const clientID = "22e4a1cea4434e3b93f70827eab49ae9";
const clientSecret = "8f8ace50ae9c47af9773b2762c5c33e8";
const authorizationCode =
  "AQCCAU3gEfAAF_O7iDTH13JjbINw-_AtaAOZ_Kh6XFTvWbRzRspQbXoCJMSKiUICRvaqltBeJV1mZmYKnwK_-lLfKFBxp4iz0_uaY6Fu1XNWJT59XNxcn3bejaP_Leu1ruxr3vHWfPJGs1GFZkZVroYE-AnHade-WaxA1HvlCoaMG0CHAN9D";
const redirectURI = "https://nooranah-design.vercel.app";

// Construct the request body
const requestBody = querystring.stringify({
  grant_type: "authorization_code",
  code: authorizationCode,
  redirect_uri: redirectURI,
});

// Set up the Authorization header
const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
  Authorization:
    "Basic " + Buffer.from(clientID + ":" + clientSecret).toString("base64"),
};

// Send the POST request to exchange authorization code for access token
fetch(tokenEndpoint, {
  method: "POST",
  headers: headers,
  body: requestBody,
})
  .then((response) => response.json())
  .then((data) => {
    // Extract the access token from the response
    const accessToken = data.access_token;
    console.log("Access Token:", accessToken);

    // Now you can use the access token to make authenticated requests to the Spotify API
  })
  .catch((error) => {
    console.error(
      "Error exchanging authorization code for access token:",
      error
    );
  });
