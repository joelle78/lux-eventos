<script>

    import NavBar from "$lib/reusable-components/NavBar.svelte";
    import HeaderContact from "$lib/reusable-components/headers/HeaderContact.svelte";
    import SectionOne from "$lib/contact-page/SectionOne.svelte";


    export let data;
</script>

<NavBar/>
<HeaderContact/>
<SectionOne data={data} />
