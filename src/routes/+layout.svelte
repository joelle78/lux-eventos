<script lang="ts">
    import 'aos/dist/aos.css';
    // @ts-ignore
    import AOS from  "aos";

    import { onMount } from 'svelte';

    onMount(() => {
        AOS.init();
        window.AOS = AOS;
    });
</script>

<slot/>
