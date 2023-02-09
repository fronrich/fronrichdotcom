<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import * as SC from "svelte-cubed";
  import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

  // the .gtlf file
  export let file = "";

  export let rotation = [0, 0, 0];
  export let position = [0, 0, 0];
  export let scale = [0.1, 0.1, 0.1];

  const loadGLTF = () => {
    const loader = new GLTFLoader();
    return loader.loadAsync(file);
  };

  let model = null;

  onMount(() => {
    loadGLTF().then((_model) => (model = _model));
  });
</script>

{#if model}
  <SC.Primitive object={model.scene} {scale} {rotation} {position} />
{/if}
