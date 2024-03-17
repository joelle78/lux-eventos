<script>
    import HeaderImgVoorOpdrachtgevers from '$lib/assets/header-voor-opdrachtgevers.jpg'
</script>

<header>
    <img src={HeaderImgVoorOpdrachtgevers} alt="" aria-label="">

    <article>
        <div class="flex-container">
        <h1>Waar <span>HORECA</span> en <span>TALENT</span> samenkomen!</h1>
        </div>

    <div class="flex-container-arrow">
        <a href="#discover">
            <svg width="49" height="32" viewBox="0 0 59 42" fill="white" xmlns="http://www.w3.org/2000/svg">
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
        font-family: "PT Serif", serif;
        font-weight: 500;
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
        height: 100vh;
        object-fit: cover;
        opacity: 0.7;
    }

    .flex-container-arrow {
        position: absolute;
        margin-top: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    svg {
        opacity: 0.9;
    }




    /* MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        h1 {
            font-size: 2rem;
            line-height: 2.5rem;
            width: 80%;
        }

        header {
            width: 130vw;
        }

        img {
            width: 130vw;
        }


    }


    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        header {
            width: 200vw;
            height: 150vh;
        }

        img {
            width: auto;
            height: 160vh;
        }

        h1 {
            font-size: 3rem;
            line-height: 3.5rem;
            width: 75%;
        }

        .flex-container-arrow {
            margin-top: 100vh;
        }
    }

    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        header {
            width: 220%;
            height: 150vh;
        }

        img {
            width: auto;
            height: 160vh;
        }
    }
    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 320px) {
        header {
            width: 260%;
            height: 170vh;
        }

        img {
            width: auto;
            height: 180vh;
            /*overflow: clip;*/
        }
    }




</style>