<script>

    import HeaderVoorOpdrachtgevers from "$lib/reusable-components/headers/HeaderVoorOpdrachtgevers.svelte";
    import NavBar from "$lib/reusable-components/NavBar.svelte";
    import SectionOne from "$lib/voor-opdrachtgevers-page/SectionOne.svelte";
    import SectionTwo from "$lib/voor-opdrachtgevers-page/SectionTwo.svelte";
    import SectionThree from "$lib/voor-opdrachtgevers-page/SectionThree.svelte";
    import SectionFour from "$lib/voor-opdrachtgevers-page/SectionFour.svelte";
    import Footer from "$lib/reusable-components/Footer.svelte";


    export let data;
</script>

<NavBar/>
<HeaderVoorOpdrachtgevers/>

<SectionOne data={data} />
<SectionTwo data={data}/>
<SectionThree data={data}/>
<SectionFour data={data}/>
<Footer/>
