<script>
import { base } from "$app/paths";
</script>

<h1>Advent-Math</h1>

<nav>
  <ul>
    <li>
      <a href="{base}/day01">Tag 1</a>
    </li>
    <li>
      <a href="{base}/day02">Tag 2</a>
    </li>
    <li>
      <a href="{base}/day03">Tag 3</a>
    </li>
    <li>
      <a href="{base}/day04">Tag 4</a>
    </li>
  </ul>
</nav>

<style>
nav {
  margin-top: 2rem;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

li a {
  display: block;
  padding: 1rem 2rem;
  background-color: #1a1a1a;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.25s;
}

li a:hover {
  background-color: #2a2a2a;
}
</style>
