<script>
  import { fade, fly } from "svelte/transition";
  import * as SC from "svelte-cubed";
  export let position = [0, 0, 3];

  export let width = window.innerWidth;
  export let height = window.innerHeight;
</script>

<section in:fade={{ duration: 10000, delay: 2000 }}>
  <SC.Canvas
    alpha={true}
    precision="lowp"
    powerPreference="high-performance"
    {width}
    {height}
  >
    <slot />
    <SC.PerspectiveCamera {position} />
    <SC.AmbientLight intensity={1.5} />
  </SC.Canvas>
</section>

<style>
  section {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>
