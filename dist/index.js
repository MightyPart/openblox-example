"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const classic_1 = require("openblox/classic");
const cloud_1 = require("openblox/cloud");
(async () => {
    try {
        const { data: enqueuedItem, response } = await cloud_1.MemoryStoresApi.enqueueItem({
            universeId: 5243626809, queue: "MyQueue",
            item: { name: "MyItem", value: "fooBar", ttl: "300s" }
        });
        console.log(enqueuedItem);
        const userInfo = classic_1.ClassicUsersApi.userInfo.bind({ cookie: "cookieHere" });
        const { data: userInfoClassic } = await userInfo({ userId: 45348281 });
    }
    catch (e) {
        console.log(e.errorResponse.body.errors);
    }
})();
