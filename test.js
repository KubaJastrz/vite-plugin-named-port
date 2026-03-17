import assert from 'node:assert';
import path from 'node:path';
import test from 'node:test';
import namedPort from 'named-port';
import namedPortPlugin from './index.js';

test('sets port from input', () => {
	const plugin = namedPortPlugin({ input: 'custom-string' });
	const result = plugin.config({});
	assert.strictEqual(result.server.port, namedPort('custom-string'));
});

test('sets port from npm_package_name', () => {
	process.env.npm_package_name = 'package-name';
	const plugin = namedPortPlugin();
	const result = plugin.config({});
	assert.strictEqual(result.server.port, namedPort('package-name'));
	delete process.env.npm_package_name;
});

test('sets port from cwd', () => {
	const cwd = path.dirname(process.cwd());
	const plugin = namedPortPlugin();
	const result = plugin.config({});
	assert.strictEqual(result.server.port, namedPort(cwd));
});

test('does not override existing port', () => {
	const plugin = namedPortPlugin();
	const viteConfig = { server: { port: 3000 } };
	const result = plugin.config(viteConfig);
	assert.strictEqual(result, undefined);
	assert.strictEqual(viteConfig.server.port, 3000);
});
