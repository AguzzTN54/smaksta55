import { writable } from 'svelte/store';

const screenWidth = writable(0);
const screenHeight = writable(0);
const landscapeMode = writable(false);

export { screenHeight, screenWidth, landscapeMode };
