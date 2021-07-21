'use strict';

import Hapi from '@hapi/hapi';
import { Server } from "@hapi/hapi";
import { routes } from '../routes/routes';

export let server: Server;

/**
 * Initializes server with port and host configuration
 * @returns Server configuration
 */
export const init = async function (): Promise<Server> {
    server = Hapi.server({
        debug: {
            log: [
                'error'
            ],
            request: [
                'error'
            ]
        },
        port: process.env.PORT || 3000,
        host: '0.0.0.0'
    });

    /**
     * Registering routes
     */
    server.route(routes);

    return server;
};

/**
 * Starts the Hapi Server
 * @returns Starts server
 */
export const start = async function (): Promise<void> {
    console.log('Server running on %s', server.info.uri);
    return server.start();
};

/**
 * On error logs error and exits server
 */
process.on('unhandledRejection', (err) => {
    console.error("unhandledRejection");
    console.error(err);
    process.exit(1);
});
