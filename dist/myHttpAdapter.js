"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyHttpAdapter = void 0;
// [ Modules ] ///////////////////////////////////////////////////////////////////
const adapters_1 = require("openblox/http/adapters");
//////////////////////////////////////////////////////////////////////////////////
// [ Private Functions ] /////////////////////////////////////////////////////////
const getBody = async (response, contentType) => {
    return contentType?.startsWith("application/json") ? await response.json() : await response.text();
};
//////////////////////////////////////////////////////////////////////////////////
const MyHttpAdapter = async ({ url, method, headers, body, formData }) => {
    console.log("my custom http adapter!");
    const response = await fetch(url, { method, headers: headers, body: formData || body, cache: "no-store" });
    /* Different libraries return HTTP responses in slightly different ways, so returning
       this class ensures every HTTP adapter returns their responses in the same way. */
    return new adapters_1.HttpResponse({
        url, method,
        success: response.ok,
        statusCode: response.status,
        headers: response.headers,
        body: await getBody(response, response.headers.get("content-type")),
        fullResponse: response
    });
};
exports.MyHttpAdapter = MyHttpAdapter;
