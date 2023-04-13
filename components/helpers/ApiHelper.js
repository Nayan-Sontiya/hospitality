const productionApiUrl = "https://hospitalityfinder.in/api/";
// const productionApiUrl = "https://a867-27-58-221-183.in.ngrok.io/api/";

const websiteMainUrl = "";
const awsUrl = "https://hospitality-web.s3.us-east-2.amazonaws.com/";

let accessTokenProvider = () => {
  if (process.browser) {
    const sessionDataObj = localStorage.getItem("hospitalityFinderAccessToken");
    if (sessionDataObj !== null) {
      const sessionData = JSON.parse(sessionDataObj);
      let accessToken = sessionData;
      return accessToken;
    } else {
      return null;
    }
  }
};
let userDataProvider = () => {
  if (process.browser) {
    const hospitalityFinderUserData = localStorage.getItem(
      "hospitalityFinderUserData"
    );
    if (hospitalityFinderUserData !== null) {
      const UserData = JSON.parse(hospitalityFinderUserData);
      const data = UserData;
      return data;
    }
  }
};
let userStatusProvider = () => {
  if (process.browser) {
    const hospitalityFinderStatus = localStorage.getItem(
      "hospitalityFinderStatus"
    );
    if (hospitalityFinderStatus !== null) {
      return hospitalityFinderStatus;
    }
  }
};

let PatchRequest = async (endPoint, requestBody) => {
  let assessToken = accessTokenProvider();
  let result = await fetch(productionApiUrl + endPoint, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "x-access-token": assessToken,
    },
    body: JSON.stringify(requestBody),
  });
  let response = await result.json();
  return response;
};
let PutRequest = async (endPoint, requestBody) => {
  let assessToken = accessTokenProvider();
  let result = await fetch(productionApiUrl + endPoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "x-access-token": assessToken !== null ? assessToken : "",
    },
    body: JSON.stringify(requestBody),
  });
  let response = await result.json();
  return response;
};
let PutRequestFormControl = async (endPoint, requestBody) => {
  let assessToken = accessTokenProvider();
  let result = await fetch(productionApiUrl + endPoint, {
    method: "PUT",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "x-access-token": assessToken,
    },
    body: requestBody,
  });
  let response = await result.json();
  return response;
};

let PostRequestFormControl = async (endPoint, requestBody) => {
  let assessToken = accessTokenProvider();
  let result = await fetch(productionApiUrl + endPoint, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "x-access-token": assessToken,
    },
    processData: false,
    contentType: false,
    body: requestBody,
  });
  let response = await result.json();
  return response;
};

let PostRequest = async (endPoint, requestBody) => {
  let assessToken = accessTokenProvider();
  let result = await fetch(productionApiUrl + endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "x-access-token": assessToken,
    },
    body: JSON.stringify(requestBody),
  });
  let response = await result.json();
  return response;
};
let PostRequestCheckout = async (endPoint, requestBody) => {
  let result = await fetch(productionApiUrl + endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
  let response = await result.json();
  return response;
};
const postRequestWithCustomAccessToken = async (
  endPoint,
  requestBody,
  AuthorizationToken
) => {
  let result = await fetch(productionApiUrl + endPoint, {
    method: "POST",
    headers: {
      Authorization: AuthorizationToken,
      "Content-Type": "application/json",
    },
    body: requestBody,
  });
  let response = await result.json();
  return response;
};
let loginPostRequest = async (endPoint, requestBody) => {
  let result = await fetch(productionApiUrl + endPoint, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
    },
  });
  let response = await result.json();
  return response;
};
let loginPostRequestWithFormControl = async (endPoint, requestBody) => {
  let result = await fetch(productionApiUrl + endPoint, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    processData: false,
    contentType: false,
    body: requestBody,
  });
  let response = await result.json();
  return response;
};

let LoginPutRequest = async (endPoint, requestBody) => {
  let result = await fetch(productionApiUrl + endPoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
    },
    body: JSON.stringify(requestBody),
  });
  let response = await result.json();
  return response;
};
let GetRequest = async (endPoint) => {
  let assessToken = accessTokenProvider();
  let result = await fetch(productionApiUrl + endPoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "x-access-token": assessToken,
    },
  });

  let response = await result.json();
  return response;
};
let GetRequestWithBody = async (endPoint, requestBody) => {
  let assessToken = accessTokenProvider();
  let result = await fetch(productionApiUrl + endPoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "x-access-token": assessToken,
    },
    body: JSON.stringify(requestBody),
  });
  let response = await result.json();
  return response;
};
let GetRequestWithoutToken = async (endPoint) => {
  let result = await fetch(productionApiUrl + endPoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  let response = await result.json();
  return response;
};

let DeleteRequest = async (endPoint) => {
  let assessToken = accessTokenProvider();
  let result = await fetch(productionApiUrl + endPoint, {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "x-access-token": assessToken,
    },
  });
  let response = await result.json();
  return response;
};
let DeleteRequestWithBody = async (endPoint, requestBody) => {
  let assessToken = accessTokenProvider();
  let result = await fetch(productionApiUrl + endPoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "x-access-token": assessToken,
    },
    body: JSON.stringify(requestBody),
  });
  let response = await result.json();
  return response;
};
export {
  GetRequest,
  PatchRequest,
  PutRequest,
  PutRequestFormControl,
  PostRequestFormControl,
  postRequestWithCustomAccessToken,
  PostRequest,
  GetRequestWithoutToken,
  DeleteRequestWithBody,
  LoginPutRequest,
  loginPostRequest,
  awsUrl,
  userStatusProvider,
  userDataProvider,
  DeleteRequest,
  websiteMainUrl,
  productionApiUrl,
  accessTokenProvider,
  GetRequestWithBody,
  loginPostRequestWithFormControl,
};
