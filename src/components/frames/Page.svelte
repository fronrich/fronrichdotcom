<!-- stacks views vertically, pages -->
<script>
  import Nav from "../mutators/Nav.svelte";
  let Page;

  // smooth scrolls to top
  // TODO: move this functionality to the NAV
  const scrollToTop = () => {
    Page.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
</script>

<section class="Page" bind:this={Page}>
  <slot />
</section>
<Nav {scrollToTop} />

<style>
  .Page {
    width: 100%;
    height: 100vh;
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>
