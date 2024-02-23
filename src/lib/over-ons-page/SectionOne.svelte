<script>
    export let data

    const image8 = data.assets[6].url;
</script>

<section>
{#each data.overOnsPages as overOns }
    <article>
        <h2 id="mission">ONZE MISSIE</h2>
        <div class="flex-container-1">
            <p>{overOns.beschrijving}</p>
            <div class="color-background-1"></div>
            <img src={image8} alt="Description of the image"/>
        </div>
    </article>

{/each}
</section>

<style>
    section {
        background-color: var(--background-color-light);
        padding-top: 8rem;
        padding-bottom: 8rem;
    }

h2 {
    font-family: "cormorant-garamond", serif;
    font-weight: 300;
    font-style: normal;
    font-size: var(--header-one);
    margin-bottom: 5rem;
    text-align: center;
}

.flex-container-1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10rem;
}

.flex-container-1 p {
    position: relative;
    width: 30%;
    font-family: "fira-sans", sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: var(--paragraph);
    right: 9%;
    line-height: 2.2rem;
    margin-top: 2rem;
}

.color-background-1 {
    position: relative;
    background-color: var(--color-beige);
    width: 25%;
    height: 45vh;
}

img {
    position: absolute;
    width: 25%;
    left: 51%;
    top: 143%;
}
</style>