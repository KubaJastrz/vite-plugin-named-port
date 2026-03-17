import type { Plugin } from 'vite';

export default function namedPortPlugin(options?: {
	input?: string;
	min?: number;
	max?: number;
}): Plugin;
