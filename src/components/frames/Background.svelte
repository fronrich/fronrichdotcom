<!-- A hybrid of page layer and view that can hold contents as a static, non-scrolling background -->

<section class="Background">
  <slot />
</section>

<style>
  .Background {
    width: 100vw;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    pointer-events: none;
  }
</style>
