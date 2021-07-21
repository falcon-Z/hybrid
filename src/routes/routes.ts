import { ServerRoute } from "@hapi/hapi";
import { index } from "./index.route";

export const routes:ServerRoute[] = [
    {
        method: 'GET',
        path: '/',
        handler: index
    }
]