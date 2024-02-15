<script>
    import HeaderImgOverOns from '$lib/assets/header-over-ons.png'
</script>

<header>
    <img src={HeaderImgOverOns} alt="" aria-label="">

    <article>
        <h1>Waar <span>TALENT</span> en <span>GASTVRIJHEID</span> samenkomen voor <span>ONVERGETELIJKE</span> evenementen!</h1>
    </article>
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
        opacity: 0.4;
    }




</style>