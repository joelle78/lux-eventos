<script>
    export let data

    const image3 = data.assets[1].url;
</script>
{#each data.homepages as homepage }
<section class="section-three">
    <div class="image-container">
        <img src={image3} alt="Description of the image"/>
    </div>
    <article>

            <div class="flex-container">
            <h4>WERKEN ALS <span>freelancer</span></h4>
            <div class="text-container">
                <p>{homepage.beschrijving3}</p>
            </div>
            </div>


    </article>
</section>
{/each}

<style>


    .image-container {
        position: absolute;
        overflow: clip;
        left: 28.5vw;
    }

    img {
        position: relative;
        opacity: 0.05;
        height: 100vh;
        width: 70vw;
        z-index: 1;
    }

    .section-three {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--background-color-dark);

        height: 100vh;

    }

    article {

        display: flex;
        justify-content: center;
        align-items: center;
    }


    h4 {
        font-family: "cormorant-garamond", serif;
        font-weight: 400;
        font-size: var(--header-one);
        position: relative;
        color: white;
        left: 40vw;
        top: -3rem;
        width: 40%;
    }

    span {
        display: block;
        font-family: "abril-fatface", serif;
        font-weight: 400;
        font-style: italic;
        font-size: var(--header-one);
        letter-spacing: 0.2rem;
        margin: 0.3rem 0 0 12rem;
    }

    .text-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: var(--background-color-light);
        width: 70%;
        height: 30vh;
        z-index: 2;
        border-radius: 0 10px 10px 0;
    }

    p {
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--paragraph);
        line-height: 2.3rem;
        width: 90%;
        margin-left: 1.5rem;
    }


    /* MEDIA QUERY TABLET*/
    @media screen and (max-width: 768px) {
        .section-three {
            width: 130vw;
            height: 130vh;
        }

        img {
            width: 130vw;
            height: 130vh;
        }

        h4 {
            width: 60%;
            margin-bottom: 2rem;
        }

        p {
            font-size: var(--par-tablet);
        }
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        .section-three {
            width: 200vw;
            height: 200vh;
        }

        img {
           display: none;
        }


        h4 {
            padding-top: 2rem;
            width: 60%;
        }

        .text-container {
            width: 85%;
            height: 65vh;
            margin-top: 4rem;
        }

        p {
            font-size: 2rem;
            line-height: 3rem;
            width: 88%;
        }
    }

    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        .section-three {
            width: 220vw;
            height: 180vh;
        }


    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 321px) {
        .section-three {
            width: 260vw;
            height: 180vh;
        }


    }

</style>