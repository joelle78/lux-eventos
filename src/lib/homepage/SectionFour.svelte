<script>

    export let data;
</script>

<section class="section-four">
    {#each data.homepages as homepage }
        <article>

            <div class="svg-container">
            <svg width="97" height="85" viewBox="0 0 97 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 85V3H97" stroke="#94694B" stroke-width="5"/>
            </svg>
            </div>

            <h5>Waarom freelancen <span>bij Lux-Eventos</span></h5>
            <p>{homepage.beschrijving4}</p>

        </article>
    {/each}
</section>

<style>
    .section-four {
        background-color: var(--background-color-light);
    }

    article {
        padding-top: 10rem;
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
    /*    top: 520vh;*/
    /*    left: 6%;*/
    /*}*/

    h5, span {
        font-family: "cormorant-garamond", serif;
        font-weight: 400;
        font-style: normal;
        margin-left: 10rem;
    }

    h5 {
        font-size: 4.5rem;
    }

    span {
        font-family: "roboto", sans-serif;
        font-weight: 300;
        font-style: italic;
        font-size: 3rem;
        margin-left: 1rem;
        display: block;
    }

    p {
        width: 60%;
        font-family: "roboto", sans-serif;
        font-weight: 300;
        font-style: normal;
        font-size: 1.5rem;
        line-height: 2.8rem;
        margin: 2rem 0 0 24rem;
        padding-bottom: 8rem;
    }
</style>

