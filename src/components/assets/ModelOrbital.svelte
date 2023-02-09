<script>
  // displays a 3d model in a canvas and rotates it
  import * as SC from "svelte-cubed";
  import ThreeScene from "../frames/ThreeScene.svelte";
  import ThreeObject from "./ThreeObject.svelte";
  import { FlowerPetal } from "../../gltfmodels";

  export let asset = FlowerPetal;
  export let scale = 0.1;

  let spin = 0;
  SC.onFrame(() => {
    spin += 0.01;
  });
</script>

<section
  style:max-width={`${window.innerWidth / 2}px`}
  style:max-height={`${window.innerWidth / 2}px`}
>
  <ThreeScene
    position={[0, 0, 2]}
    width={window.innerWidth / 2}
    height={window.innerWidth / 2}
  >
    <ThreeObject
      file={asset}
      rotation={[0, spin, 0]}
      scale={[scale, scale, scale]}
    />
  </ThreeScene>
</section>

<style>
  section {
    position: relative;
  }
</style>
