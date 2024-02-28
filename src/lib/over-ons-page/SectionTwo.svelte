<script>
    export let data

    const image9 = data.assets[7].url;
    const image10 = data.assets[8].url;
</script>

<section>
    {#each data.overOnsPages as overOns }
        <article>

            <div class="svg-container">
            <svg width="37" height="25" viewBox="0 0 97 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 85V3H97" stroke="white" stroke-width="3"/>
            </svg>
            </div>

            <h3>HET TEAM</h3>

            <div class="flex-container-1">
            <p>{overOns.intro2}</p>
            <img src={image9} alt="Description of the image"/>
            </div>

            <div class="flex-container-2">
            <img src={image10} alt="Description of the image"/>
            <p>{overOns.beschrijving2}</p>
            </div>


        </article>

    {/each}
</section>


<style>

    section {
        padding-top: 10rem;
        background-color: var(--background-color-dark);
    }

    .svg-container {
        width: 7%;
        margin-left: 5%;
    }

    svg {
        width: 100%;
        height: auto;
    }

    h3 {
        font-family: "cormorant-garamond", serif;
        font-weight: 300;
        font-style: normal;
        font-size: var(--header-one);
        margin-left: 10rem;
        margin-bottom: 8rem;
        color: white;
    }

    img {
        width: 25%;
    }

    .flex-container-1 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .flex-container-2 {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        z-index: 2;
        top:-30vh;
        right: 4%;

    }

    p {
        width: 25%;
        color: white;
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--paragraph);
        line-height: 2.2rem;
    }

    .flex-container-1 p {
        position: relative;
        width: 19%;
        right: 2%;
        bottom: 15vh;
    }

    .flex-container-2 p {
        position: relative;
        width: 20%;
        padding-top: 5rem;
        left: 2%;
        top: 18vh;
    }


    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        section {
            width: 130%;
        }

        img {
            width: 30%;
        }

        .flex-container-1 p {
            width: 20%;
            right: 3%;
            bottom: 8vh;
            font-size: var(--par-tablet);
        }

        .flex-container-2 p {
            width: 21%;
            padding-top: 6rem;
            left: 3%;
            top: 20vh;
            font-size: var(--par-tablet);
        }
    }
</style>

<!--<div class="flex-text-container-1">-->
<!--    <img src={image6} alt="Description of the image"/>-->
<!--    <h2>ONTDEK <span>Lux-Eventos</span></h2>-->
<!--</div>-->


<!--<div class="flex-text-container-2">-->
<!--    <div class="test">-->
<!--        <p>{opdrachtgevers.intro}</p>-->
<!--    </div>-->
<!--    <p>{opdrachtgevers.beschrijving}</p>-->
<!--</div>-->