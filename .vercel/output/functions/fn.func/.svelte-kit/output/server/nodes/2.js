import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.455c7b6d.js","_app/immutable/chunks/scheduler.89b69e6b.js","_app/immutable/chunks/index.4aa275d4.js"];
export const stylesheets = ["_app/immutable/assets/2.719794d1.css"];
export const fonts = [];
