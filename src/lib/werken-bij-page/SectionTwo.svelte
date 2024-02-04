<script>
    import ButtonSignMeUp from "$lib/reusable-components/buttons/ButtonSignMeUp.svelte";

    export let data

    const image5 = data.assets[3].url;
</script>

{#each data.werkenBijPages as werkenBijPage }

    <img src={image5} alt="Description of the image" />
    <article>
        <h3>{werkenBijPage.titel2}</h3>
        <p>{werkenBijPage.intro2}</p>
        <p>{werkenBijPage.quote2}</p>
        <p>{werkenBijPage.beschrijving2}</p>
    </article>
{/each}

<ButtonSignMeUp/>