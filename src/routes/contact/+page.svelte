<script>

    import NavBar from "$lib/reusable-components/NavBar.svelte";
    import HeaderContact from "$lib/reusable-components/headers/HeaderContact.svelte";
    import SectionOne from "$lib/contact-page/SectionOne.svelte";
    import SectionTwo from "$lib/contact-page/SectionTwo.svelte";
    import SectionThree from "$lib/contact-page/SectionThree.svelte";
    import Footer from "$lib/reusable-components/Footer.svelte";
    import SectionMissie from "$lib/contact-page/SectionMissie.svelte";


    export let data;
</script>

<NavBar/>
<HeaderContact/>
<SectionMissie/>
<SectionOne data={data} />
<SectionTwo data={data} />
<SectionThree data={data} />
<Footer/>