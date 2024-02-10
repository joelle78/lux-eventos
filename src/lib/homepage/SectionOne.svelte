<script>
    export let data
</script>

<section class="section-one">
{#each data.homepages as homepage }
    <article>
        <svg width="97" height="85" viewBox="0 0 97 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 85V3H97" stroke="#94694B" stroke-width="5"/>
        </svg>

<!--        <h2>{homepage.titel}</h2>-->
        <h2>WELKOM BIJ<span>Lux-Eventos</span></h2>
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

    svg {
        position: absolute;
        top: 118vh;
        left: 6%;
    }

    h2 {
        position: relative;
        font-family: "cormorant-garamond", serif;
        font-weight: 600;
        font-style: normal;
        font-size: 4.5rem;
        margin-left: 10rem;
    }

    span {
        font-family: "roboto", sans-serif;
        font-weight: 100;
        font-style: italic;
        display: block;
        font-size: 3rem;
        margin-left: 8rem;
    }

    p {
        width: 60%;
        font-family: "roboto", sans-serif;
        font-weight: 300;
        font-style: normal;
        font-size: 1.5rem;
        line-height: 2.8rem;
        margin-top: 2rem;
        margin-left: 24rem;
        padding-bottom: 8rem;
    }


</style>