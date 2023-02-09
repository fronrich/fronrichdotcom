<script>
  import * as SC from "svelte-cubed";
  import ThreeObject from "./ThreeObject.svelte";
  import { clientX, clientY } from "../../SvelteStore";
  import { FlowerPetal } from "../../gltfmodels";

  export let petalCount = 10;
  export let spawnWidth = 1;

  const WINDSPEED = 0.05;
  const GRAVITY = 0.01;

  // create petalCount petals with these props
  const genPetals = () => {
    let list = [];
    for (let i = 0; i < petalCount; i++) {
      const SPAWN_LIMIT_X = spawnWidth;
      const SPAWN_LIMIT_Y = 1;
      // scale determines the areodynamics of the petals
      const SCALE_LIMIT = 0.1;

      // the minimum faction of the full scale an object can be in size
      const MIN_FRACTION_SCALE = 0.85;
      const scale =
        Math.random() * (SCALE_LIMIT * (1 - MIN_FRACTION_SCALE)) +
        SCALE_LIMIT * MIN_FRACTION_SCALE;
      list.push({
        originX: Math.random() * SPAWN_LIMIT_X - SPAWN_LIMIT_X / 2,
        originY: Math.random() * SPAWN_LIMIT_Y + SPAWN_LIMIT_Y,
        originZ: Math.random(),
        scale: scale,

        // the bigger the scale the more air resistance
        windResist: (SCALE_LIMIT - scale) * 10,
      });
    }
    return list;
  };

  const petalIds = genPetals();
  let pointerX, pointerY;

  clientX.subscribe((value) => {
    pointerX = value;
  });
  clientY.subscribe((value) => {
    pointerY = value;
  });

  let spin = 0;
  let posX = 0;
  let posY = 0;

  SC.onFrame(() => {
    // physics
    spin += pointerY * (WINDSPEED / 2) + WINDSPEED; // inverts spin on up
    posX += pointerX * WINDSPEED;
    posY += pointerY * GRAVITY - WINDSPEED / 10 / 2; // gravity resists wind
  });
</script>

{#each petalIds as petal}
  <ThreeObject
    file={FlowerPetal}
    rotation={[-45, spin * petal.windResist, spin]}
    position={[
      posX * petal.windResist + petal.originX,
      posY + petal.originY,
      petal.originZ,
    ]}
    scale={[petal.scale, petal.scale, petal.scale]}
  />
{/each}
