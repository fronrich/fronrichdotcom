<script>
  // TODO: add skin to theme things globally
  // also turn theme into conext
  import { setContext, getContext } from "svelte";
  import { injectGlobal } from "@emotion/css";
  import Theme from "../../Theme";

  setContext("Theme", Theme);

  const theme = getContext("Theme");

  const { color, font, standard } = theme;

  injectGlobal`
    :root {
      font-size: ${standard.unit};
      color: ${color.foreground};
      background-color: ${color.background};

    }

    body {
      margin: 0;
      padding: 0;
      display: flex;
      place-items: center;
      width: 100vw;
      height: 100vh;
      background: ${color.background};
    }

    h1 {
      font-size: 4em;
      line-height: 1em;
      font-family: 'Roboto', sans-serif;
      font-weight: 100;
      margin: 0;
      padding: 0;
      letter-spacing: 1em;
      text-indent: 1em;
    }

    a {
      color: inherit;
    }

    #app {
      margin: 0;
      padding: 0;
      text-align: center;
    }

    button {
      color: ${color.foreground};
      background: ${color.background};
      font-family: 'Ubuntu Mono', monospace;
      font-size: 1em;
      line-height: 2em;
      letter-spacing: 0.5em;
      text-indent:0.5em;
      font-weight: 400;
      margin: 0.5em;
      padding: 1em;
      outline: none;
      border: none;
      border-radius: 2em;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 500ms;
      box-shadow: 0px 8px 20px #00000030;

      &:hover {
        color: ${color.background};
        background: ${color.foreground};
      }
    }
  `;
</script>

<slot />

<style>
  /* global keyframes */
  @keyframes -global-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes -global-roll {
    0% {
      left: 0;
    }
    100% {
      left: 100%;
    }
  }
  @keyframes -global-teeter {
    0% {
      transform: translateX(-150px);
    }
    50% {
      transform: translateX(150px);
    }
    100% {
      transform: translateX(-150px);
    }
  }

  @keyframes -global-shower {
    0% {
      transform: translateY(-30px);
    }
    50% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(-30px);
    }
  }
</style>
