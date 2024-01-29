import { c as create_ssr_component, b as add_attribute, d as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
const NavBar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-1jtos4f{position:absolute;z-index:2;right:5%}ul.svelte-1jtos4f{display:flex;flex-direction:row;gap:3rem;list-style:none}a.svelte-1jtos4f{text-decoration:none;color:white}",
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header data-svelte-h="svelte-imcbdz"><div class="header-wrapper"><nav class="svelte-1jtos4f"> <a href="/" class="svelte-1jtos4f"></a> <ul class="svelte-1jtos4f"><li><a class="menu-item svelte-1jtos4f" href="/">Home</a></li> <li><a class="menu-item svelte-1jtos4f" href="/stekjes_overzicht">Werken bij</a></li> <li><a class="menu-item svelte-1jtos4f" href="/workshops">Voor opdrachtgevers</a></li> <li><a class="menu-item svelte-1jtos4f" href="/maken">Over ons</a></li> <li><a class="menu-item svelte-1jtos4f" href="/contact">Contact</a></li></ul></nav></div> </header>`;
});
const HeaderImgHome = "/_app/immutable/assets/header-home.b3ecdf9a.png";
const HeaderHome_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-j9klx9{text-align:center;position:absolute;font-size:3rem;line-height:4rem;color:white;top:40%;width:80%}article.svelte-j9klx9{display:flex;justify-content:center;align-items:center}header.svelte-j9klx9{position:relative;width:100%;height:100vh;overflow-y:hidden;background-color:black}img.svelte-j9klx9{width:100%;object-fit:cover;filter:grayscale(1)}",
  map: null
};
const HeaderHome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="svelte-j9klx9" data-svelte-h="svelte-1xptphk"><img${add_attribute("src", HeaderImgHome, 0)} alt="" aria-label="" class="svelte-j9klx9"> <article class="svelte-j9klx9"><h1 class="svelte-j9klx9">Het event team op maat gemaakt. Jouw succes begint met
        onze selectie.</h1></article> </header>`;
});
const SectionOne = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${each(data.homepages, (homepage) => {
    return `<blockquote><h2>${escape(homepage.titel)}</h2> <p>${escape(homepage.beschrijving)}</p> </blockquote>`;
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} ${validate_component(HeaderHome, "HeaderHome").$$render($$result, {}, {}, {})} ${validate_component(SectionOne, "SectionOne").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};
