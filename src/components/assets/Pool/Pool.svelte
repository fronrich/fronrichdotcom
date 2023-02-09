<script>
  import { getContext } from "svelte";
  import { clientX } from "../../../SvelteStore";
  import Wave from "./Wave.svelte";
  import WaterFall from "./WaterFall.svelte";

  const { color } = getContext("Theme");

  let pointerX;

  clientX.subscribe((value) => {
    pointerX = value;
  });

  const TOP_BEND = 100;
  const BOTTOM_BEND = 5;
</script>

<section
  style:border-radius={`${(pointerX + 0.5) * TOP_BEND}% ${
    TOP_BEND - (pointerX + 0.5) * TOP_BEND
  }%  2em 2em`}
>
  <div class="WavesWrapper">
    <div class="Waves Clear">
      <Wave color={color.primary} />
      <Wave color={color.primary} />
      <Wave color={color.primary} />
      <Wave color={color.primary} />
      <Wave color={color.primary} />
      <Wave color={color.primary} />
      <Wave color={color.primary} />
      <Wave color={color.primary} />
    </div>
    <div class="Waves">
      <Wave color={color.primary} />
      <Wave color={color.primary} />
      <Wave color={color.primary} />
      <Wave color={color.primary} />
    </div>
  </div>
  <div class="Pool" style:background={color.primary}>
    <slot />
  </div>
</section>

<style>
  section {
    max-width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: visible;
    margin: 2em;
    filter: drop-shadow(0px 8px 20px #00000030);
  }
  .Pool {
    max-width: 1064px;
    width: 1064px;
    min-width: 0;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
  }

  .WavesWrapper {
    position: relative;
    width: calc(1064px + 2em);
    height: 8em;
  }
  .Waves {
    max-width: calc(1064px + 2em);
    height: 8em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    overflow: visible;
    position: absolute;
    bottom: 0;
  }

  .Clear {
    opacity: 0.5;
    animation: teeter 5000ms cubic-bezier(0.39, 0.575, 0.565, 1) infinite;
  }
</style>
