<script>
    export let data

    const image6 = data.assets[4].url;
</script>

<section>
{#each data.voorOpdrachtgeversPages as opdrachtgevers }
    <article>

        <div class="flex-text-container-1">
            <img src={image6} alt="Description of the image"/>
            <h2 id="discover">ONTDEK <span>Lux-Eventos</span></h2>
        </div>


        <div class="flex-text-container-2">
            <div class="test">
        <p>{opdrachtgevers.intro}</p>
            </div>
        <p>{opdrachtgevers.beschrijving}</p>
        </div>

    </article>

{/each}
</section>

<style>
    section {
        background-color: var(--background-color-medium);
        padding-top: 10rem;
    }

    h2 {
        font-family: "cormorant-garamond", serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--header-one);
        margin-left: 2rem;
        margin-bottom: 8rem;
    }

    span {
        font-family: "amaranth", serif;
        font-weight: 100;
        font-style: italic;
        font-size: var(--header-one);
        display: block;
    }

    .flex-text-container-1, .flex-text-container-2 {
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .flex-text-container-1 img {
        width: 25%;
    }

    .flex-text-container-2 p{
        font-family: "fira-sans", serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--paragraph);
        line-height: 2.2rem;
        margin-bottom: 8rem;
    }
    
    .test {
        position: absolute;
        background-color: white;
        width: 25%;
        top: 180%;
        left: 46%;
    }
    .test p{
        width: 78%;
        margin-top: 1.7rem;
        margin-left: 3.1rem;
        margin-bottom: 2rem;
    }

    p {
        width: 19%;
        margin-top: 2rem;
        margin-right: 32%;
    }

</style>