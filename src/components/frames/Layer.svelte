<!-- frames that can be stacked in views. objects within are centered -->

<section class="Layer">
  <slot />
</section>

<style>
  .Layer {
    width: 100vw;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: all;
  }
</style>
