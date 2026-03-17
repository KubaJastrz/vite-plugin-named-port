# vite-plugin-named-port

<a href="https://www.npmjs.com/package/vite-plugin-named-port"><img src="https://img.shields.io/npm/v/vite-plugin-named-port.svg?style=flat" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/vite-plugin-named-port"><img src="https://img.shields.io/npm/dm/vite-plugin-named-port.svg?style=flat" alt="NPM Downloads" /></a>
<a href="https://github.com/KubaJastrz/vite-plugin-named-port/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-success?style=flat" alt="License MIT" /></a>

Use a deterministic port for your Vite dev server.

Based on [`named-port`](https://www.npmjs.com/package/named-port) package.

## Usage

```js
// vite.config.js
import namedPort from 'vite-plugin-named-port';

export default {
	// default: uses package.json name or current directory, with port range 1024-65535
	plugins: [namedPort()],
	// with custom string input
	plugins: [namedPort({ input: 'custom-text' })],
	// with custom port range
	plugins: [namedPort({ min: 3000, max: 4000 })],
};
```

If you don't provide a custom input, the plugin will try to read the `name` field from your `package.json` file. If it's not present, it will use the current working directory name instead.

By default, if min and max are not specified, the port will be chosen in the range 1024–65535.

## License

MIT
