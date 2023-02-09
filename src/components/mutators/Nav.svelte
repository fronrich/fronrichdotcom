<script>
  import Page from "../frames/Page.svelte";
  import Background from "../frames/Background.svelte";
  import View from "../frames/View.svelte";
  import Layer from "../frames/Layer.svelte";
  import Button from "./Button.svelte";

  import ArrowBendLeftUp from "phosphor-svelte/lib/ArrowBendLeftUp";
  import ArrowBendRightUp from "phosphor-svelte/lib/ArrowBendRightUp";

  export let scrollToTop;
</script>

<Background>
  <View>
    <section>
      <div>
        <Button onClick={scrollToTop}
          ><ArrowBendLeftUp />Back To Top<ArrowBendRightUp /></Button
        >
      </div>
    </section>
  </View>
</Background>

<style>
  div {
    pointer-events: all;
    height: min-content;
    margin: 40px;
  }
  section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
</style>
