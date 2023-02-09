<script>
  import { clientX, clientY } from "../../SvelteStore";
  // handles client actions (moving mouse, events)
  // normalizes grid to -1 - 1

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const xThresh = windowWidth / 2;
  const yThresh = windowHeight / 2;

  // track mouse

  // convert the 0 - n to -n - n grid, then normalize to -1 - 1
  const handleMousemove = (event) => {
    clientX.update(() => (event.clientX - xThresh) / xThresh);
    clientY.update(() => (-1 * (event.clientY - yThresh)) / yThresh);
  };
</script>

<section class="ClientTracker" on:mousemove={handleMousemove}>
  <slot />
</section>

<style>
  .ClientTracker {
    width: 100vw;
    height: 100vh;
  }
</style>
