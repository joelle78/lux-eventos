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
        const carouselItemsV = document.querySelectorAll('.carrousel-text-v');
        const carouselItemsA = document.querySelectorAll('.carrousel-text-a');

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

            <div class="flex-container-freelancers-top">
                <svg width="630" height="7" viewBox="0 0 630 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M630 4L0.000158251 3.09691" stroke="#94694B" stroke-width="4.72125"/>
                </svg>
                <h3>FAQ</h3>
                <svg width="630" height="7" viewBox="0 0 630 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M630 4L0.000158251 3.09691" stroke="#94694B" stroke-width="4.72125"/>
                </svg>
            </div>


            <div class="carrousel-container">
                <div class="carrousel">

                    <div class="carrousel-container-v" >
                    <div class="carrousel-text-v ">
                        <p> {contactpage.freelancersVraag1}</p>
                    </div>

                    <div class="carrousel-text-v ">
                        <p> {contactpage.freelancersVraag2}</p>
                    </div>

                    <div class="carrousel-text-v ">
                        <p> {contactpage.freelancersVraag3}</p>
                    </div>

                    <div class="carrousel-text-v ">
                        <p> {contactpage.freelancersVraag4}</p>
                    </div>

                    <div class="carrousel-text-v ">
                        <p> {contactpage.freelancersVraag5}</p>
                    </div>

                    </div>

                    <svg class="svg-middle" width="6" height="644" viewBox="0 0 6 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 0L3 644" stroke="#94694B" stroke-width="5"/>
                    </svg>


                    <div class="carrousel-container-a" >
                    <div class="carrousel-text-a" >
                        <p>{contactpage.freelancersAntwoord1}</p>
                    </div>

                    <div class="carrousel-text-a ">
                        <p>{contactpage.freelancersAntwoord2}</p>
                    </div>

                    <div class="carrousel-text-a ">
                        <p>{contactpage.freelancersAntwoord3}</p>
                    </div>

                    <div class="carrousel-text-a ">
                        <p>{contactpage.freelancersAntwoord4}</p>
                    </div>

                    <div class="carrousel-text-a ">
                        <p>{contactpage.freelancersAntwoord5}</p>
                    </div>

                    </div>

                </div>
            </div>

            <button on:click={previous}>Vorige</button>
            <button on:click={next}>Volgende</button>
        </article>
    {/each}


</section>



<style>



    section {
        margin-top: 10rem;
    }

    h3 {
        font-family: "cormorant-garamond", serif;
        font-weight: 600;
        font-style: normal;
        font-size: var(--header-three);
    }

    p {
        text-align: left;
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
        /*position: absolute;*/
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        /*top: 240%;*/
        gap: 5rem;
    }

    .carrousel-container-v {
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

    .carrousel-text-v {
        width: 20%;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 100%;
        scroll-snap-align: center;
    }

    .carrousel-text-a {
        width: 20%;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 100%;
        scroll-snap-align: center;
    }
    
    button {

    }





</style>



