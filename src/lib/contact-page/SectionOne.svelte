<script>


</script>

<section>
    <div class="flex-container-contact-form-text">
        <h5 id="contact">CONTACT</h5>
        <p>
            Heb je nog vragen, onduidelijkheden of wil je gewoon even kletsen? Gebruik dan gerust onderstaand
            contactformulier om in contact te komen! We staan klaar om al je vragen te beantwoorden en met je te praten.

        <div class="flex-container-contact-form">

            <form action="/form-submitted" method="POST">
                <input type="hidden" name="access_key" value="33363e93-6b07-4679-8fad-6251f4982f3b">

                <div class="flex-1">
                    <div>
                        <label for="naam">Naam:</label>
                        <input type="text" id="naam" name="naam" required>
                    </div>

                    <div>
                        <label for="bedrijf">Bedrijf/Instelling:</label>
                        <input type="text" id="bedrijf" name="bedrijf">
                    </div>
                </div>

                <div class="flex-2">
                    <div>
                        <label for="telefoonnummer">Telefoonnummer:</label>
                        <input type="tel" id="telefoonnummer" name="telefoonnummer">
                    </div>
                    <div>
                        <label for="e-mail">E-mail:</label>
                        <input type="email" id="e-mail" name="e-mail">
                    </div>
                </div>

                <div>
                    <label for="bericht">Bericht:</label>
                    <textarea id="bericht" name="bericht" rows="10" required></textarea>
                </div>

                <button type="submit">VERSTUUR</button>
            </form>
        </div>
    </div>
</section>

<style>
    section {
        background-color: var(--background-color-medium);
    }


    h5 {
        font-family: "PT Serif", serif;
        font-weight: 100;
        font-style: normal;
        font-size: var(--header-two);
        margin-top: 8rem;
        margin-bottom: 2rem;

    }

    p {
        text-align: center;
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--paragraph);
        width: 70%;
        line-height: 2.2rem;
        margin-bottom: 5rem;
    }

    label {
        font-family: "PT Serif", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: var(--paragraph);
        display: block;
    }

    input {
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: 1rem;
        width: 20rem;
        height: 2rem;
        border-radius: 10px;
    }

    textarea {
        font-family: "fira-sans", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: 1rem;
        width: 43rem;
        resize: none;
    }

    .flex-container-contact-form-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .flex-container-contact-form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .flex-1, .flex-2 {
        display: flex;
        flex-direction: row;
        gap: 3rem;
        margin-bottom: 1rem;
    }

    label {
        margin-bottom: 1rem;
    }

    input, textarea {
        border: none;
        border-radius: 10px;
    }

    input:focus,
    textarea:focus {
        outline: 2px solid var(--color-beige);
    }

    button {
        margin-top: 2rem;
        margin-bottom: 5rem;
        font-family: "PT Serif", serif;
        font-weight: 400;
        font-style: normal;
        background-color: transparent;
        display: inline-block;
        padding: 10px 20px;
        border: 2px solid var(--color-beige); /* Border color */
        color: black;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
        transition: ease-out 0.5s;
        border-radius: 10px;

    }

    button:hover {
        border-radius: 25px;
        transition: ease-in 0.5s;
    }

    /* MEDIA QUERY MOBILE L */
    @media screen and (max-width: 426px) {
        section {
            width: 200vw;
            height: 165vh;
        }

        p {
            font-size: 2rem;
            line-height: 3rem;
            width: 85%;
            padding-bottom: 2rem;
        }

        button {
            margin-bottom: 2rem;
        }
    }

    /* MEDIA QUERY MOBILE M */
    @media screen and (max-width: 376px) {
        section {
            width: 220vw;
            height: 160vh;
        }
    }

    /* MEDIA QUERY MOBILE S */
    @media screen and (max-width: 321px) {
        section {
            width: 260vw;
            height: 160vh;

        }
    }
</style>