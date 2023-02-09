<script>
  import { getContext } from "svelte";
  import Saos from "saos";
  // subsection of view with text to the left and media to the right
  import View from "./View.svelte";
  import Layer from "./Layer.svelte";
  import ModelOrbital from "../assets/ModelOrbital.svelte";
  import { FlowerPetal } from "../../gltfmodels";

  const { color } = getContext("Theme");

  export let media = FlowerPetal;

  export let scale = 0.1;

  export let reverse = false;
</script>

<View>
  <Layer>
    <section
      class="Wrappable"
      style:flex-direction={reverse ? "row-reverse" : "row"}
    >
      <div class="HalfLayer">
        <Saos
          animation={"fade-in 1200ms cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}
          animation_out={"fade-in 1200ms cubic-bezier(0.390, 0.575, 0.565, 1.000) both reverse"}
        >
          <h2 class="CaptionContainer" style:background={color.background}>
            <slot />
          </h2>
        </Saos>
      </div>
      <div class="HalfLayer Right">
        <ModelOrbital asset={media} {scale} />
      </div>
    </section>
  </Layer>
</View>
