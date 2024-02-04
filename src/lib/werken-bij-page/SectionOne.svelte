<script>
    export let data

    const image4 = data.assets[2].url;
</script>

{#each data.werkenBijPages as werkenBijPage }

    <img src={image4} alt="Description of the image" />
    <article>
        <h2>{werkenBijPage.titel}</h2>
        <p>{werkenBijPage.beschrijving}</p>

    </article>
{/each}