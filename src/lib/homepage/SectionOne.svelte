<script>
    export let data
</script>

<section class="section-one">
{#each data.homepages as homepage }
    <article>

        <div class="svg-container">
        <svg width="37" height="25" viewBox="0 0 97 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 85V3H97" stroke="#94694B" stroke-width="5"/>
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
        font-family: "roboto", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--header-two);
        margin-left: 9rem;
        display: block;
    }

    p {
        width: 60%;
        font-family: "roboto", sans-serif;
        font-weight: 300;
        font-style: normal;
        font-size: var(--paragraph);
        line-height: 2.8rem;
        margin: 2rem 0 0 24rem;
        padding-bottom: 8rem;
    }


</style>