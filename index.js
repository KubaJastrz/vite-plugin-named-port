import namedPort from 'named-port';
import path from 'node:path';

/**
 * @param {object} [options]
 * @param {string} [options.input]
 * @param {number} [options.min]
 * @param {number} [options.max]
 * @returns {import('vite').Plugin}
 */
export default function namedPortPlugin(options) {
	const { input, min, max } = options ?? {};
	return {
		name: 'named-port',
		config(userConfig) {
			userConfig.server = userConfig.server ?? {};

			// Don't override user specified port
			if (userConfig.server.port) {
				return;
			}

			if (input) {
				userConfig.server.port = namedPort(input, { min, max });
			} else if (process.env.npm_package_name) {
				userConfig.server.port = namedPort(process.env.npm_package_name, { min, max });
			} else {
				userConfig.server.port = namedPort(path.dirname(process.cwd()), { min, max });
			}

			return userConfig;
		},
	};
}
