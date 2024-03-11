<script>
    import HeaderImgOverOns from '$lib/assets/header-over-ons.png'
</script>

<header>
    <img src={HeaderImgOverOns} alt="" aria-label="">

    <article>

        <div class="flex-container">
            <h1>Waar <span>TALENT</span> en <span>GASTVRIJHEID</span> samenkomen voor <span>ONVERGETELIJKE</span>
                evenementen!</h1>
        </div>


        <div class="flex-container-arrow">
            <a href="#mission">
                <svg width="49" height="32" viewBox="0 0 59 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M57.7984 0.542852L29.7882 40.4509L1.70059 0.597358L57.7984 0.542852Z" stroke="white"/>
                </svg>
            </a>
        </div>

    </article>
</header>


<style>
    header {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 100vh;
        overflow: clip;
        background-color: black;
    }


    h1 {
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--header-two);


        text-align: center;
        letter-spacing: 0.2rem;
        color: white;
    }

    span {
        font-family: "cormorant-garamond", serif;
        font-weight: 900;
        font-style: normal;
    }


    article {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .flex-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    img {
        position: absolute;
        width: 100vw;
        object-fit: cover;
        /*filter: grayscale(1);*/
        opacity: 0.4;
    }


    .flex-container-arrow {
        position: absolute;
        margin-top: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        h1 {
            font-size: 2rem;
            line-height: 2.4rem;
            width: 85%;
        }

        header {
            width: 130%;
            height: 90vh;
        }
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        header {
            width: 200%;
            height: 170vh;
        }

        img {
            height: 170vh;
            /*overflow: clip;*/
        }

        h1 {
            font-size: 3rem;
            line-height: 3.5rem;
            width: 90%;
        }
    }


</style>