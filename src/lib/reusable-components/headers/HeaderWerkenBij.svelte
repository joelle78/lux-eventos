<script>
    import HeaderImgWerkenBij from '$lib/assets/header-werken-bij.png'
</script>

<header>
    <img src={HeaderImgWerkenBij} alt="" aria-label="">

    <article>
        <h1>Ontdek op maat gemaakte opdrachten die passen bij jouw expertise en ambities</h1>
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
    }




</style>