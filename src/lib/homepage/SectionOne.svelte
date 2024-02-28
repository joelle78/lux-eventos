<script>
    export let data


</script>

<section class="section-one">
    {#each data.homepages as homepage }
        <article>

            <div class="svg-container">
                <svg width="37" height="25" viewBox="0 0 97 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 85V3H97" stroke="#B8A096" stroke-width="3"/>
                </svg>

            </div>

            <h2>WELKOM BIJ <span>Lux-Eventos</span></h2>
            <p>{homepage.beschrijving}</p>


        </article>
    {/each}
</section>

<style>

    .section-one {
        background-color: var(--background-color-light);
    }

    article {
        padding-top: 11rem;
    }

    .svg-container {
        width: 7%; /* Adjust this value as needed */
        margin-left: 5%; /* Adjust this value as needed */
    }

    svg {
        width: 100%; /* Make the SVG fill its container */
        height: auto; /* Maintain aspect ratio */
    }

    /*svg {*/
    /*    position: absolute;*/
    /*    top: 118vh;*/
    /*    left: 6%;*/
    /*}*/

    h2, span {
        font-family: "cormorant-garamond", serif;
        font-weight: 400;
        font-style: normal;
        margin-left: 10rem;
    }

    h2 {
        font-size: var(--header-one);
    }

    span {
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: italic;
        font-size: var(--header-two);
        margin-top: 1rem;
        margin-left: 12rem;
        display: block;
    }

    p {
        width: 60%;
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--paragraph);
        line-height: 2.2rem;
        margin: 2rem 0 0 24rem;
        padding-bottom: 8rem;
    }

    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        .section-one {
            width: 130%;
            height: 130vh;
        }

        h2, span {
            margin-left: 7rem;
        }

        h2 {
            font-size: var(--header-one);
        }

        span {
            margin-left: 11rem;
        }

        p {
            width: 65%;
            font-size: var(--par-tablet);
            line-height: 2.2rem;
            margin: 3rem 0 0 18rem;
        }
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        .section-one {
            width: 200%;
            height: 130vh;
        }
    }


</style>