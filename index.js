import namedPort from 'named-port';
import path from 'node:path';

/**
 * @param {string} [input]
 * @returns {import('vite').Plugin}
 */
export default function namedPortPlugin(input) {
	return {
		name: 'named-port',
		config(userConfig) {
			userConfig.server = userConfig.server ?? {};

			// Don't override user specified port
			if (userConfig.server.port) {
				return;
			}

			if (input) {
				userConfig.server.port = namedPort(input);
			} else if (process.env.npm_package_name) {
				userConfig.server.port = namedPort(process.env.npm_package_name);
			} else {
				userConfig.server.port = namedPort(path.dirname(process.cwd()));
			}

			return userConfig;
		},
	};
}
