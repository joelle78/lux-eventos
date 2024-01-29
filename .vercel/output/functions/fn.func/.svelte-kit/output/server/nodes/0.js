

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.fd770826.js","_app/immutable/chunks/scheduler.89b69e6b.js","_app/immutable/chunks/index.4aa275d4.js"];
export const stylesheets = [];
export const fonts = [];
