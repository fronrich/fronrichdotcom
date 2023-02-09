<script>
  import { clientY } from "../../../SvelteStore";

  let pointerY;

  clientY.subscribe((value) => {
    pointerY = value;
  });

  export let color = "#89D9FF";
  export let reverse = false;
</script>

<section style:transform={reverse ? "scaleX(-1)" : "scaleX(1)"}>
  <!-- body -->
  <svg
    width="150"
    height="100"
    viewBox="0 0 150 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M50 0V50C50 22.3858 27.6142 0 0 0H50Z"
      fill={color}
    />
    <path
      d="M50 0H150V50C150 77.6142 127.614 100 100 100V100C72.3858 100 50 77.6142 50 50V0Z"
      fill={color}
    />
  </svg>
  <div class="Flow" style:top={`${-pointerY * 50 - 50}px`}>
    <!-- afterimage -->
    <svg
      class="AfterImage Flow"
      width="100"
      height="200"
      viewBox="0 0 100 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H100V150C100 177.614 77.6142 200 50 200V200C22.3858 200 0 177.614 0 150V0Z"
        fill={color}
      />
    </svg>
    <!-- expanse -->
    <svg
      class="Flow"
      width="100"
      height="200"
      viewBox="0 0 100 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H100V150C100 177.614 77.6142 200 50 200V200C22.3858 200 0 177.614 0 150V0Z"
        fill={color}
      />
    </svg>
  </div>
</section>

<style>
  .AfterImage {
    opacity: 0.5;
    animation: shower 5000ms cubic-bezier(0.39, 0.575, 0.565, 1) infinite;
  }
  section {
    width: 150px;
    height: 215px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    position: relative;
    overflow-y: hidden;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    position: relative;
  }
  svg {
    transition: 5000ms;
    position: absolute;
    top: 0;
  }
  .Flow {
    /* transition: 500ms; */
    /* transition-delay: 50ms; */
  }
</style>
