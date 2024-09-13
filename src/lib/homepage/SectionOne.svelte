<script>
    export let data;
</script>

<main>
    <section class="section-one">
        {#each data.homepages as homepage}
            <article>
                <div class="svg-container">
                    <svg
                        width="37"
                        height="25"
                        viewBox="0 0 97 85"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 85V3H97"
                            stroke="#B8A096"
                            stroke-width="3"
                        />
                    </svg>
                </div>

                <h2>Welkom bij<span>Lux-Eventos</span></h2>

                <p data-aos="zoom-in-left" data-aos-duration="1500">
                    {homepage.beschrijving}
                </p>
            </article>
        {/each}
    </section>
</main>

<style>
    
    main {
        background-color: var(--background-color-light);
    }


.section-one {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
  
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
    width: 8%;
    margin-left: 5%;
    top: -10vh;
}

svg {
    width: 100%;
    height: auto;
}

h2,
span {
    font-family: "PT Serif", serif;
    font-weight: 100;
    font-style: normal;
    margin-left: 10rem;
}

h2 {
    font-size: var(--header-one);
}

span {
    font-family: "fira-sans", serif;
    font-weight: 100;
    font-size: var(--header-one);
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
    margin: 2rem 0 0 22.5rem;
}

/* MEDIA QUERY TABLET */
@media screen and (max-width: 48rem) {

    .svg-container {
        top: -5vh;
    }

   svg {
    width: 150%;
   }

    h2,
    span {
        margin-left: 6rem;
        font-size: var(--header-tablet);
    }


    span {
        margin-left: 0.5rem;
    }

    p {
        width: 75%;
        font-size: var(--par-tablet);
        line-height: 1.9rem;
        margin: 3rem 0 0 7rem;
    }
}

/* MEDIA QUERY MOBILE L */
@media screen and (max-width: 23rem) {
    .section-one {
        
        padding: 1rem;
    }

    svg {
        width: 9rem;
    }

    h2 {
        margin-left: 8rem;
        padding-top: 1rem;
    }

    span {
        margin-left: 1rem;
    }

    p {
        margin-left: 9rem;
        font-size: 2rem;
        line-height: 3rem;
        width: 85%; /* Maak de breedte wat flexibeler */
    }
}

</style>
