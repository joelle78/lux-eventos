<script>
    import ButtonSignUp from "$lib/reusable-components/buttons/ButtonSignUp.svelte";

    export let data

    const image6 = data.assets[4].url;
</script>

<!--<section>-->
<!--    {#each data.voorOpdrachtgeversPages as opdrachtgevers }-->
<!--        <article>-->

<!--            <div class="flex-text-container-1">-->
<!--                <img src={image6} alt="Description of the image"/>-->
<!--                <h2 id="discover">ONTDEK <span>Lux-Eventos</span></h2>-->
<!--            </div>-->


<!--            <div class="flex-text-container-2">-->
<!--                <div class="test">-->
<!--                    <p>{opdrachtgevers.intro}</p>-->
<!--                </div>-->
<!--                <p class="p-2">{opdrachtgevers.beschrijving}</p>-->
<!--            </div>-->

<!--        </article>-->
<!--    {/each}-->
<!--</section>-->

<section>
    {#each data.voorOpdrachtgeversPages as opdrachtgevers }
        <article>
            <div class="svg-container">
                <svg width="37" height="25" viewBox="0 0 97 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 85V3H97" stroke="#B8A096" stroke-width="3"/>
                </svg>

            </div>


            <h2 id="discover">Ontdek <span>Lux-Eventos</span></h2>
            <p data-aos="zoom-in-left"
               data-aos-duration="1500"
              >{opdrachtgevers.intro}</p>
<!--            <p>{opdrachtgevers.beschrijving}</p>-->
        </article>

    {/each}
</section>

<style>
    section {
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

    h2 {
        font-size: var(--header-one);
        font-family: "fira-sans", sans-serif;
        font-weight: 100;
        font-style: normal;
        margin: 0 0 0 9rem;
        line-height: 4rem;
    }



    span {
        font-family: "amaranth", serif;
        font-weight: 100;
        font-style: italic;
        font-size: var(--header-one);
        display: block;
        margin-left: 8rem;

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


    /*.flex-text-container-1, .flex-text-container-2 {*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*}*/

    /*.flex-text-container-1 img {*/
    /*    width: 25%;*/
    /*}*/

    /*.flex-text-container-2 p {*/
    /*    font-family: "fira-sans", serif;*/
    /*    font-weight: 200;*/
    /*    font-style: normal;*/
    /*    font-size: var(--paragraph);*/
    /*    line-height: 2.2rem;*/
    /*    margin-bottom: 8rem;*/
    /*}*/

    /*.test {*/
    /*    position: absolute;*/
    /*    background-color: white;*/
    /*    width: 25%;*/
    /*    top: 180%;*/
    /*    left: 46%;*/
    /*}*/

    /*.test p {*/
    /*    width: 78%;*/
    /*    margin: 1.7rem 0 2rem 3.1rem;*/
    /*}*/

    /*p {*/
    /*    width: 19%;*/
    /*    margin-top: 2rem;*/
    /*    margin-right: 32%;*/
    /*}*/

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        section {
            width: 200vw;
            height: 200vh;
        }

        svg {
            width: 7rem;
        }

        h2 {
            margin-left: 7rem;

        }

        span {
            margin-left: 1rem;
        }

        p {
            margin-left: 8rem;
            font-size: 1.8rem;
            width: 80%;
        }
    }


        /*.flex-text-container-1 img {*/
        /*    width: 35%;*/
        /*}*/

        /*.test {*/
        /*    width: 45%;*/
        /*    top: 170%;*/
        /*    left: 60%;*/
        /*}*/


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
        section {
            width: 220vw;
            height: 135vh;
        }
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 321px) {
        section {
            width: 260vw;
            height: 130vh;
        }
    }


</style>