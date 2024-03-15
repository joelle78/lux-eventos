<script>
    export let data


</script>

<section>
    {#each data.voorOpdrachtgeversPages as opdrachtgevers }
        <article>

            <div class="svg-container">
                <svg width="37" height="25" viewBox="0 0 221 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 204V3H221" stroke="white" stroke-width="10"/>
                </svg>
            </div>

            <h4>{opdrachtgevers.titel3}</h4>
            <!--        <p>{opdrachtgevers.nrlist3}</p>-->
            <ol>
                <li>
                    Toegang tot goed opgeleide en gescreende professionals voor hun evenementen en
                    projecten.
                </li>
                <li>
                    Verhoogde efficiëntie en kwaliteit van dienstverlening door gekwalificeerde
                    zzp'ers.

                </li>
                <li>
                    Mogelijkheid om snel en effectief in te spelen op piekmomenten en drukte.
                </li>
                <li>
                    Alle feedback nemen wij uiterst serieus mee. Hierdoor kunnen wij op inspelen en
                    ervoor zorgen dat de kwaliteit gewaarborgd blijft.
                </li>
            </ol>


        </article>
    {/each}
</section>

<style>
    section {
        position: relative;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--background-color-dark);
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
        margin-left: -6%; /* Adjust this value as needed */
        top: 5vh;

    }

    svg {
        width: 100%; /* Make the SVG fill its container */
        height: auto; /* Maintain aspect ratio */
    }

    h4 {
        color: white;
        font-size: var(--header-two);
        font-family: "catamaran", sans-serif;
        font-weight: 400;
        font-style: normal;
        line-height: 4rem;
        width: 80%;
        margin-top: 4rem;

    }

    /*p {*/
    /*    color: white;*/
    /*    font-family: "roboto", serif;*/
    /*    font-weight: 400;*/
    /*    font-size: var(--paragraph);*/
    /*    display: block;*/
    /*}*/


    ol {
        list-style-type: decimal;
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        color: white;
        text-align: left;
        width: 50%;
        margin-top: 2rem;
        margin-left: 9rem;

    }

    li {
        font-size: var(--paragraph);
        line-height: 2.2rem;
        margin-bottom: 2rem;
    }

    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        section {
            width: 130vw;
            height: 140vh;
        }

        .svg-container {
            margin-left: 4rem;
        }


        h4 {
            margin-left: 8rem;
        }

        ol {
            margin-left: 18rem;
        }
    }


    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        section {
            width: 200vw;
            height: 200vh;
        }

        li {
            margin-top: 1rem;
            font-size: 1.8rem;
            line-height: 3rem;
        }
    }

    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        section {
            width: 220vw;
            height: 200vh;
        }
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 321px) {
        section {
            width: 260vw;
            height: 200vh;
        }
    }
</style>