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
                <p class="p-2">{opdrachtgevers.beschrijving}</p>
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
        margin: 0 0 8rem 2rem;
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

    .flex-text-container-2 p {
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

    .test p {
        width: 78%;
        margin: 1.7rem 0 2rem 3.1rem;
    }

    p {
        width: 19%;
        margin-top: 2rem;
        margin-right: 32%;
    }

    /*MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        section {
            width: 130%;
            height: 210vh;
        }


        .p-2 {
            width: 30%;
            margin-left: -7rem;
        }


        .flex-text-container-1 img {
            width: 35%;
        }

        .test {
            width: 45%;
            top: 170%;
            left: 60%;
        }
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        section {
            width: 200%;
            height: 230vh;
        }

        .flex-text-container-2 p {
            font-size: 1.5rem;
        }


        .p-2 {
            width: 30%;
            margin-left: -10rem;
            font-size: 1.8rem;
        }


        .flex-text-container-1 img {
            width: 35%;
        }

        .test {
            width: 90%;
            top: 240%;
            left: 85%;
        }
    }

    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {

    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 320px) {


    }


</style>