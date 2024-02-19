<script>
    export let data;
</script>

<section>
    {#each data.contactPages as contactpage }

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

            <div class="flex-container-freelancers">

                <p> {contactpage.freelancersVraag1}</p>

                <svg width="6" height="644" viewBox="0 0 6 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 0L3 644" stroke="#94694B" stroke-width="5"/>
                </svg>

                <p>{contactpage.freelancersVraag2}</p>

            </div>


        </article>
    {/each}


</section>

<style>

    section {
        margin-top: 10rem;
    }

    .flex-container-freelancers-top {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 3rem;

    }

    .flex-container-freelancers {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        position: relative;
        top: -20vh;
        gap: 10rem;

    }

    h3 {
        font-family: "cormorant-garamond", serif;
        font-weight: 600;
        font-style: normal;
        font-size: var(--header-three);
    }

    p {
        width: 20%;

    }

</style>