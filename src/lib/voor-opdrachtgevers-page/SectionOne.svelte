<script>
    export let data

    const image6 = data.assets[4].url;
</script>

{#each data.voorOpdrachtgeversPages as opdrachtgevers }
    <article>
        <img src={image6} alt="Description of the image" />
        <h2>{opdrachtgevers.titel}</h2>
        <p>{opdrachtgevers.intro}</p>
        <p>{opdrachtgevers.beschrijving}</p>
    </article>

{/each}