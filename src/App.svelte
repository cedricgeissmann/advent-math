<script>
    import Day02 from "./days/day02.svelte"
</script>

<div class="grid-wrapper">
<header style="grid-area: header">
    <h1>Adventsmathe</h1>
    <p>Jeden Tag eine neue Aufgabe</p>
</header>

<main style="grid-area: main">
    <Day02 />
</main>
</div>

<style>
.grid-wrapper {
    display: grid;
    grid-template-areas: "header" "main";
    grid-template-rows: auto 1fr;
    min-height: 100dvh;
}

main {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
