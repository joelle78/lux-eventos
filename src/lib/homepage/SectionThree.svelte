<script>
    export let data

    const image3 = data.assets[1].url;
</script>

{#each data.homepages as homepage }

    <img src={image3} alt="Description of the image" />
    <article>
        <h4>{homepage.titel3}</h4>
        <p>{homepage.beschrijving3}</p>

    </article>
{/each}