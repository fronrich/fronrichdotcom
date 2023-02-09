<!-- takes up 100vw and 100vh. no overflow
 views stack layers on top of each other -->

<section class="View">
  <slot />
</section>

<style>
  .View {
    width: 100vw;
    min-height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
  }
</style>
