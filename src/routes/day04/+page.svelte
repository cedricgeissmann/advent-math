<script>
    import katex from "katex"
    const input = "2"
    const fx = katex.renderToString('f(x)')
    const output = katex.renderToString('f(x) = ...')

    const applyFunction = () => {
        document.getElementById("scramble").classList.add("scramble")
        setTimeout(() => {
            document.getElementById("scramble").classList.remove("scramble")
        }, 2000)
    }
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

.function-box {
    border: 2px solid white;
    padding: 2rem;
}

.function-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    justify-content: center;
}

.function-input {
    min-width: unset;
    padding: 1rem;
    width: 2rem;
}

.scramble {
    transform: translateX(-220px);
    animation-name: scramble;
    animation-duration: 4s;
    z-index: -1;
}

@keyframes scramble {
    0% {transform: translateX(-220px); filter: blur(0);}
    40% {transform: translateX(-100px); filter: blur(5px);}
    60% {transform: translateX(-100px); filter: blur(5px);}
    100% {transform: translateX(0); filter: blur(0px);}
}

@keyframes shake {

}



</style>

<div>
<p>
    Bestimmen Sie die Funktionsvorschrift von {@html fx}.
</p>
    <div class="function-wrapper">
        <input class="function-input" type="number" value={input} on:change={applyFunction} />
        <span class="function-box">{@html fx}</span>
        <span id="scramble" class="scramble">{input}</span>
    </div>
<div class="answer">Antwort: <span>{@html output}</span></div>
</div>




