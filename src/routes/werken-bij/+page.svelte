<script>

    import NavBar from "$lib/reusable-components/NavBar.svelte";
    import HeaderWerkenBij from "$lib/reusable-components/headers/HeaderWerkenBij.svelte";
    import SectionOne from "$lib/werken-bij-page/SectionOne.svelte";
    import SectionTwo from "$lib/werken-bij-page/SectionTwo.svelte";
    import SectionThree from "$lib/werken-bij-page/SectionThree.svelte";
    export let data;

</script>

<NavBar />
<HeaderWerkenBij/>

<SectionOne data={data}/>
<SectionTwo data={data}/>
<SectionThree data={data}/>