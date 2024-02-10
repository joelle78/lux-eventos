<script>
    import HeaderImgOverOns from '$lib/assets/header-over-ons.png'
</script>

<header>
    <img src={HeaderImgOverOns} alt="" aria-label="">

    <article>
        <h1>Waar talent en gastvrijheid samenkomen voor onvergetelijke evenementen!</h1>
    </article>
</header>



<style>

    h1 {
        text-align: center;
        position: absolute;
        font-size: 3rem;
        line-height: 4rem;
        color: white;
        top: 40%;
        width: 80%;
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
        opacity: 0.7;
    }




</style>