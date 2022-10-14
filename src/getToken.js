import { useState, useEffect } from "react";
import * as spauth from "node-sp-auth";

function GetToken() {
  const url = "https://modularathis.sharepoint.com";
  const clientId = "44bdf034-6028-4e81-b862-a66b7ce48c05";
  const clientSecret = "idg8Q~pNIS4fgS41G9aG~BdPWeQrEUVkT9OYhbz6";
  spauth
    .getAuth(url, {
      clientId: clientId,
      clientSecret: clientSecret
    })
    .then((options) => {
      //perform request with any http-enabled library (request-promise in a sample below):
      let headers = options.headers;
      headers["Accept"] = "application/json;odata=verbose";

      request
        .get({
          url: "https://modularathis.sharepoint.com/sites/Website/_api/web",
          headers: headers
        })
        .then((response) => {
          console.log(response);
        });
    });
  return headers;
}

export default GetToken;
