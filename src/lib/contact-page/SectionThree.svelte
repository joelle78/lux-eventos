<script>
    export let data;

    import { onMount } from 'svelte';

    let currentIndex = 0;
    const totalItems = 5; // Total number of carousel items

    // Function to navigate to the next carousel item
    function next() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    // Function to navigate to the previous carousel item
    function previous() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    // Function to update the carousel display
    function updateCarousel() {
        const carouselItemsV = document.querySelectorAll('.carrousel-text-v-w');
        const carouselItemsA = document.querySelectorAll('.carrousel-text-a-w');

        carouselItemsV.forEach((item, index) => {
            item.style.display = index === currentIndex ? 'block' : 'none';
        });

        carouselItemsA.forEach((item, index) => {
            item.style.display = index === currentIndex ? 'block' : 'none';
        });
    }

    // Function to handle cleanup (optional)
    onMount(() => {
        updateCarousel(); // Initial setup
        return () => {
            // Clean up any resources if needed
        };
    });


</script>


<section>
    {#each data.contactPages as contactpage}

        <article>

            <h3>VOOR WERKGEVERS</h3>
            <div class="flex-container-freelancers-top">
                <svg class="svg-left" width="630" height="7" viewBox="0 0 630 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M630 4L0.000158251 3.09691" stroke="#B8A096" stroke-width="2"/>
                </svg>
                <h4>FAQ</h4>
                <svg class="svg-right" width="630" height="7" viewBox="0 0 630 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M630 4L0.000158251 3.09691" stroke="#B8A096" stroke-width="2"/>
                </svg>
            </div>


            <div class="carrousel-container">
                <div class="carrousel">

                    <div class="carrousel-container-v-w" >

                        <div class="carrousel-text-v-w ">

                            <p> {contactpage.werkgeversVraag1}</p>
                        </div>

                        <div class="carrousel-text-v-w ">

                            <p> {contactpage.werkgeversVraag2}</p>
                        </div>

                        <div class="carrousel-text-v-w ">

                            <p> {contactpage.werkgeversVraag3}</p>
                        </div>

                        <div class="carrousel-text-v-w ">

                            <p> {contactpage.werkgeversVraag4}</p>
                        </div>

                        <div class="carrousel-text-v-w ">

                            <p> {contactpage.werkgeversVraag5}</p>
                        </div>

                    </div>

                    <svg class="svg-middle" width="6" height="644" viewBox="0 0 6 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 0L3 444" stroke="#B8A096" stroke-width="2"/>
                    </svg>


                    <div class="carrousel-container-a" >
                        <div class="carrousel-text-a-w" >

                            <p>{contactpage.werkgeversAntwoord1}</p>
                        </div>

                        <div class="carrousel-text-a-w ">

                            <p>{contactpage.werkgeversAntwoord2}</p>
                        </div>

                        <div class="carrousel-text-a-w ">

                            <p>{contactpage.werkgeversAntwoord3}</p>
                        </div>

                        <div class="carrousel-text-a-w ">

                            <p>{contactpage.werkgeversAntwoord4}</p>
                        </div>

                        <div class="carrousel-text-a-w ">

                            <p>{contactpage.werkgeversAntwoord5}</p>
                        </div>

                    </div>

                </div>
            </div>

            <div class="button-container">
                <button class="left-button" on:click={previous}> VORIGE </button>
                <button class="right-button" on:click={next}> VOLGENDE </button>
            </div>
        </article>
    {/each}


</section>



<style>

    section {
        padding-top: 10rem;
        background-color: var(--background-color-medium);
    }

    h3 {
        margin-left: 3rem;
        font-family: "cormorant-garamond", serif;
        font-weight: 600;
        font-style: normal;
        font-size: var(--paragraph);
    }

    h4 {
        font-family: "cormorant-garamond", serif;
        font-weight: 600;
        font-style: normal;
        font-size: var(--header-three);
    }

    p {
        text-align: left;
        font-family: "fira-sans", serif;
        font-weight: 200;
        font-style: normal;
        font-size: 1.3rem;
        line-height: 2.2rem;
    }

    .flex-container-freelancers-top {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 3rem;

    }

    .carrousel-container{
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .carrousel {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        top: -25vh;
        gap: 5rem;
    }

    .carrousel-container-v-w {
        display: flex;
        flex-direction: row;
        overflow: auto;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
        width: 40%;
    }

    .carrousel-container-a {
        display: flex;
        flex-direction: row;
        overflow: auto;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
        width: 40%;

    }

    .carrousel-text-v-w {
        width: 20%;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 100%;
        scroll-snap-align: center;
    }

    .carrousel-text-a-w {
        width: 20%;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 100%;
        scroll-snap-align: center;
    }

    .button-container {
        position: relative;
        top:-20vh;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    button {
        background-color: transparent;
        cursor: pointer;
        border: none;
        text-align: left;
        font-family: "cormorant-garamond", serif;
        font-weight: 800;
        font-style: normal;
        font-size: 0.8rem;
        color: black;
    }

    .right-button {
        padding-left: 7rem;
    }

    /*MEDIA QUERY TABLET */
    @media screen and (max-width: 768px) {
        section {
            width: 130%;
        }


        p {
            font-size: var(--par-tablet);
            padding-left: 3rem;
            padding-right: 3rem;
        }

        .svg-left {
            padding-left: 3rem;
        }

        .svg-right {
            padding-right: 3rem;
        }

        .svg-middle {
            padding-top: 4rem;
            padding-bottom: 2rem;
        }
    }





</style>



