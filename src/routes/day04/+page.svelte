<script>
import katex from "katex";

let isScramble = false
let isShaking = false

let input = Math.floor(Math.random() * 10) - 5;
const fx = katex.renderToString("f(x)");
const m = Math.floor(Math.random() * 10) - 5
const b = Math.floor(Math.random() * 10) - 5
const output = katex.renderToString(`f(x) = ${m} \\cdot x ${b < 0 ? "" : "+"} ${b}`);
let value = calc(input)

function calc(x) {
    return m * x - b;
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

.function-box {
  border: 2px solid white;
  padding: 2rem;
}

.shake {
  animation-name: shake;
        animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-delay: 2s;
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
  0% {
    transform: translateX(-220px);
    filter: blur(0);
  }
  40% {
    transform: translateX(-100px);
    filter: blur(5px);
  }
  60% {
    transform: translateX(-100px);
    filter: blur(5px);
  }
  100% {
    transform: translateX(0);
    filter: blur(0px);
  }
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-5px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(5px);
  }
}

.answer {
    margin-top: 150px;
}
</style>

<div>
  <p>Bestimmen Sie die Funktionsvorschrift von {@html fx}.</p>
  <div class="function-wrapper">
    <input
      class="function-input"
      type="number"
      value={input}
      on:change={applyFunction}
    >
        <span id="function-box" class={`function-box ${isShaking ? 'shake' : ''}`}>{@html fx}</span>
    <span id="scramble" class={`${isScramble ? 'scramble' : ''}`}>{value}</span>
  </div>
  <div class="answer">
    Antwort: <span>{@html output}</span>
  </div>
</div>
