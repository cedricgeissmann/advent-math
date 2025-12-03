<script>
    import katex from "katex"
    const s2 = katex.renderToString('h = \\sqrt{2}')
    const ans = katex.renderToString('A = 1')
</script>

<p>Ein rechtwinkliges, gleichschenkliges Dreieck, hat eine Hypotenuse von
{@html s2}. Wenn Sie dieses Dreieck verdoppeln,
und an der Hypotenuse auffalten, wie gross ist dann die Fläche der
resultierenden Figur?</p>

<svg viewBox="0 0 300 300" width="500px" xmlns="http://www.w3.org/2000/svg">
    <path id="path01" stroke="white" stroke-width="3" fill="none" pathLength="1000"
            stroke-dasharray="1000 10000" stroke-dashoffset="1000"
        d="M 250 50 h -200 v 200 Z" />
    <text id="hypo" x="125" y="150" pathLength="1000">h</text>
    <path id="path02" stroke="white" stroke-width="3" fill="none" 
        d="M 250 50 h -200 v 200 Z" />
</svg>
<div class="answer">Antwort: <span>{@html ans}</span></div>

<style>

#path01 {
    stroke-dashoffset: 0;
    animation-name: draw;
    animation-duration: 10s;
    animation-delay: 0s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}

#path02 {
    opacity: 0;
    transform-origin: 150px 150px;
    animation-name: fold;
    animation-duration: 10s;
    animation-delay: 2s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}

#hypo {
    fill: none;
    stroke: white;
    stroke-dasharray: 1000 10000;
    stroke-dashoffset: 1000;
    animation-name: draw;
    animation-duration: 10s;
    animation-delay: 0s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}

.answer > span {
    opacity: 0;
    transition: opacity 0.6s ease;
}

.answer:hover > span {
    opacity: 1;
}



@keyframes draw {
    0% {stroke-dashoffset: 1000; opacity: 1;}
    20% {stroke-dashoffset: 0; opacity: 1;}
    80% {stroke-dashoffset: 0; opacity: 1;}
    100% {stroke-dashoffset: 0; opacity: 0;}
}

@keyframes fold {
    0% {transform: rotate3d(1, -1, 0, 0deg); opacity: 1;}
    20% {transform: rotate3d(1, -1, 0, 180deg); opacity: 1;}
    60% {transform: rotate3d(1, -1, 0, 180deg); opacity: 1;}
    80% {transform: rotate3d(1, -1, 0, 180deg); opacity: 0;}
    100% {transform: rotate3d(1, -1, 0, 180deg); opacity: 0;}
}
</style>

