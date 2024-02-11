<script>
    import NavBar from "$lib/reusable-components/NavBar.svelte";
    import HeaderHome from "$lib/reusable-components/headers/HeaderHome.svelte";
    import SectionOne from "$lib/homepage/SectionOne.svelte";
    import SectionTwo from "$lib/homepage/SectionTwo.svelte";
    import SectionThree from "$lib/homepage/SectionThree.svelte";
    import SectionFour from "$lib/homepage/SectionFour.svelte";
    import SectionFive from "$lib/homepage/SectionFive.svelte";



    export let data
</script>

<NavBar />
<HeaderHome />

<!-- HOMEPAGE -->
<SectionOne data={data} />
<SectionTwo data={data} />
<SectionThree data={data} />
<SectionFour data={data} />
<SectionFive data={data} />



<style>




</style>