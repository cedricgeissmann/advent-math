<script>
    import katex from "katex"
    const f = katex.renderToString('f(x) = \\frac{1}{6} \\cdot x',
        {displayMode: true})
    const g = katex.renderToString('g(x) = -2 \\cdot x + 26')
    const ans = katex.renderToString('S = (2, 12)')
</script>

<p>
    Diese beiden Funktionen haben einen gemeinsamen Punkt. Bestimmen Sie
diesen.
</p>
<p>{@html f}</p>
<p>{@html g}</p>
<div class="answer">Antwort: <span>{@html ans}</span></div>

<style>

.answer {
    margin-top: 5rem;
}

.answer > span {
    opacity: 0;
    transition: opacity 0.6s ease;
}

.answer:hover > span,
.answer:focus > span {
    opacity: 1;
}

</style>

