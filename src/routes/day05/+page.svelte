<script>
import katex from "katex";

let isScramble = false
let isShaking = false

let input = Math.floor(Math.random() * 10) - 5;
const fx = katex.renderToString("f(x)");
const m = 5
const b = 12
const output = katex.renderToString(`f(x) = ${m} \\cdot x ${b < 0 ? "" : "+"} ${b}`);
let value = calc(input)

function calc(x) {
    return m * x + b;
}

    const applyFunction = (e) => {
        input = e.target.value
        isShaking = true
        isScramble = true
        setTimeout(() => {
        value = calc(input)
    })
        setTimeout(() => {
            isShaking = false
            isScramble = false
        }, 4000)
    }
</script>

<style>
.answer > span {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.answer:hover > span,
.answer:focus > span {
  opacity: 1;
}


.answer {
    margin-top: 150px;
}
</style>

<div>
  <p>Bestimmen Sie die Steigung und den y-Achsenabschnitt der folgenden
        Funktion.</p>
    <p>{@html output}</p>
  <div class="answer">
    Antwort: <span>Steigung: {@html m}; y-Achsenabschnitt: {@html b}</span>
  </div>
</div>

