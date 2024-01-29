<script>
    export let data

    // Assuming there is only one image in the assets array, you might need to adjust this based on your API response structure
    const image2 = data.assets[0].url;
</script>

{#each data.homepages as homepage }
    <article>
        <h2>{homepage.titel2}</h2>
        <p>{homepage.beschrijving2}</p>
    </article>

    <img src={image2} alt="Description of the image" />

{/each}