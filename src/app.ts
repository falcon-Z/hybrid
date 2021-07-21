import { init, start } from './bin/server.config';

/**
 * Initialize and start the server
 */
init().then(
    () => start()
);