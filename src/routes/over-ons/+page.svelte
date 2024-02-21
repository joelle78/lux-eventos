<script>


    import NavBar from "$lib/reusable-components/NavBar.svelte";
    import HeaderOverOns from "$lib/reusable-components/headers/HeaderOverOns.svelte";
    import SectionOne from "$lib/over-ons-page/SectionOne.svelte";
    import SectionTwo from "$lib/over-ons-page/SectionTwo.svelte";
    import Footer from "$lib/reusable-components/Footer.svelte";

    export let data;
</script>

<NavBar/>
<HeaderOverOns/>

<SectionOne data={data}/>
<SectionTwo data={data}/>
<Footer/>
