import {
    route,
    shouldRoute
} from "https://esm.run/@petezah-games/scramjet-controller/worker";

self.addEventListener("fetch", event => {
    if (shouldRoute(event)) {
        event.respondWith(route(event));
    }
});
