<script>
    import NavBar from "$lib/reusable-components/NavBar.svelte";
    import HeaderHome from "$lib/reusable-components/HeaderHome.svelte";
    import SectionOne from "$lib/homepage/SectionOne.svelte";
    import SectionTwo from "$lib/homepage/SectionTwo.svelte";

    export let data
</script>

<NavBar />
<HeaderHome />
<SectionOne data={data} />
<SectionTwo data={data} />

<style>




</style>