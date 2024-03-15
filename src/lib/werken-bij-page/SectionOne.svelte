<script>
    import ButtonSignUp from "$lib/reusable-components/buttons/ButtonSignUp.svelte";

    export let data

    const image4 = data.assets[2].url;

</script>

<section class="section-one-work-at">
    {#each data.werkenBijPages as werkenBijPage }

        <!--        <article>-->
        <!--            <h2 id="your-trip">Jouw <span>event</span> reis <span class="span-next-line">begint hier</span></h2>-->
        <!--            <img src={image4} alt="Description of the image"/>-->

        <!--            <div class="text-container">-->
        <!--            <p>{werkenBijPage.beschrijving}</p>-->
        <!--            </div>-->
        <!--        </article>-->

        <article>
            <div class="svg-container">
                <svg width="37" height="25" viewBox="0 0 97 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 85V3H97" stroke="#B8A096" stroke-width="3"/>
                </svg>

            </div>


            <h2 id="your-trip">Jouw <span>event</span> reis <span class="span-next-line">begint hier</span></h2>
            <div data-aos="zoom-in-left"
                 data-aos-duration="1500"
            >
                <p>{werkenBijPage.beschrijving}</p>
                <div class="button">
                    <ButtonSignUp/>
                </div>
            </div>

        </article>

    {/each}
</section>


<style>
    .section-one-work-at {
        background-color: var(--background-color-medium);
        position: relative;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    article {
        position: relative;
        display: flex;
        justify-content: start;
        align-items: start;
        flex-direction: column;
    }

    .svg-container {
        position: absolute;
        width: 8%; /* Adjust this value as needed */
        margin-left: 5%; /* Adjust this value as needed */
        top: -10vh;

    }

    svg {
        width: 100%; /* Make the SVG fill its container */
        height: auto; /* Maintain aspect ratio */
    }


    h2 {
        font-size: var(--header-one);
        font-family: "fira-sans", sans-serif;
        font-weight: 100;
        font-style: normal;
        margin: 0 0 0 9rem;
        line-height: 4rem;
    }

    span {
        font-size: var(--header-one);
        font-family: "fira-sans", serif;
        font-weight: 100;
    }

    .span-next-line {
        display: block;
        font-family: "amaranth", serif;
        font-weight: 400;
        font-style: italic;
        font-size: var(--header-one);
        margin: 2rem 0 0 13rem;
    }

    .text-container {
        position: relative;
        z-index: 1;
        top: 20vh;
        left: 43%;
        background-color: white;
        width: 35%;
        height: 65vh;
    }

    p {
        font-size: var(--paragraph);
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        text-align: left;
        line-height: 2.5rem;
        width: 65%;
        padding-top: 2rem;
        margin: 2rem 0 0 22.5rem;
    }

    /*img {*/
    /*    position: absolute;*/
    /*    z-index: 2;*/
    /*    width: 40%;*/
    /*    margin-left: 8rem;*/
    /*}*/

    .button {
        margin-top: 2rem;
        margin-left: 22.5rem;
    }

    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        .section-one-work-at {
            width: 130vw;
            height: 130vh;
        }

        h2 {
            margin-left: 7rem;
        }

        .span-next-line {
            margin-left: 6rem;
        }

        p {
            font-size: var(--par-tablet);
            margin: 3rem 0 0 13rem;
        }

        .button {
            margin-left: 13rem;
        }


        /*img {*/
        /*    position: absolute;*/
        /*    z-index: 2;*/
        /*    width: 50%;*/
        /*    margin-left: 8rem;*/
        /*}*/
        /*.text-container {*/
        /*    position: relative;*/
        /*    z-index: 1;*/
        /*    top:20vh;*/
        /*    left: 43%;*/
        /*    background-color: white;*/
        /*    width: 40%;*/
        /*    height: auto;*/
        /*}*/
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        .section-one-work-at {
            width: 200vw;
            height: 200vh;
        }

        svg {
            width: 7rem;
        }

        h2 {
            margin-left: 7rem;
        }

        .span-next-line {
            margin-left: 0;
        }

        p {
            font-size: 1.8rem;
            width: 80%;
            margin-left: 7rem;
        }

        .button {
            margin-top: 5rem;
            margin-left: 7rem;
        }


        /*img {*/
        /*    display: none;*/
        /*}*/
        /*.text-container {*/
        /*   left: -2%;*/
        /*    top: 5vh;*/
        /*    width: 85%;*/
        /*}*/
    }

    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        .section-one-work-at {
            width: 220vw;
            height: 150vh;
        }

        /*.text-container {*/
        /*    left: -2%;*/
        /*    top: 5vh;*/
        /*    width: 90%;*/
        /*}*/
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 320px) {

        .section-one-work-at {
            width: 260vw;
            height: 140vh;
        }
    }


</style>