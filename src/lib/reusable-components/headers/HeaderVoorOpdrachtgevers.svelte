<script>
    import HeaderImgVoorOpdrachtgevers from '$lib/assets/header-voor-opdrachtgevers.png'
</script>

<header>
    <img src={HeaderImgVoorOpdrachtgevers} alt="" aria-label="">

    <article>
        <h1>Waar <span>HORECA</span> en <span>TALENT</span> samenkomen!</h1>
    </article>

    <div class="flex-container-arrow">
        <a href="#discover">
            <svg width="49" height="32" viewBox="0 0 59 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.7984 0.542852L29.7882 40.4509L1.70059 0.597358L57.7984 0.542852Z" stroke="white"/>
            </svg>

        </a>
    </div>
</header>



<style>

    h1 {
        font-family: "roboto", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--header-two);
        text-align: center;
        position: absolute;
        color: white;
        top: 40%;
        width: 80%;
    }

    span {
        font-family: "cormorant-garamond", serif;
        font-weight: 900;
        font-style: normal;
    }

    article {
        display: flex;
        justify-content: center;
        align-items: center;

    }

    header {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
        background-color: black;
    }

    img {
        width: 100%;
        object-fit: cover;
        filter: grayscale(1);
    }

    .flex-container-arrow {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        position: absolute;
        top: 90%;
    }





</style>