

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f5ea802f.js","_app/immutable/chunks/scheduler.89b69e6b.js","_app/immutable/chunks/index.4aa275d4.js","_app/immutable/chunks/singletons.b584869c.js"];
export const stylesheets = [];
export const fonts = [];
