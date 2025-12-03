<script>
    import katex from "katex"
    const r = katex.renderToString('r = \\frac{6}{\\pi}',
        {displayMode: false})
    const ans = katex.renderToString('u = 3')
</script>

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

svg > * {
    stroke: white;
    fill: none;
}

#rot {
    transform-origin: center;
    transform: rotate(-90deg);
    animation-name: rotate;
    animation-delay: 2s;
    animation-duration: 2s;
    animation-repeat-count: infinite;
}

@keyframes rotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(-90deg);}
}

</style>

<div>
<p>
    Gegeben ist ein Kreis mit dem Radius {@html r}. Wie lange ist ein viertel
        des Kreisumfangs?
</p>
    <svg viewBox="0 0 300 300" width="500px">
        <circle cx="150" cy="150" r="100" stroke="white" stroke-width="2" fill="none" />
        <path d="M 150 150 h 100"/>
        <path id="rot" d="M 150 150 h 100"/>
        <text x="185" y="170">r</text>
    </svg>
<div class="answer">Antwort: <span>{@html ans}</span></div>
</div>



