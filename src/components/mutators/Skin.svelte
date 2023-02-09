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
      font-size: ${font.size.titleDesktop};
      line-height: 1em;
      font-family: 'Roboto', sans-serif;
      font-weight: 100;
      margin: 0;
      padding: 0;
      letter-spacing: 1em;
      text-indent: 1em;
      text-align: center;
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
      font-size: ${font.size.paragraphDesktop};
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

      a {
        text-decoration: none;
      }

      &:hover {
        color: ${color.background};
        background: ${color.foreground};
      }
    }

    .Wrappable {
      display: flex;
      height: 100%;
      alight-items: center;
      justify-content: center;
    }

    .HalfLayer {
      position: relative;
      height: 100vh;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .CaptionContainer {
      padding: 40px;
      border-radius: 2em;
      box-shadow: 0px 8px 20px #00000030;
      margin: 4em;
      text-align: left;
      line-height: 2em;
      text-indent: 0;
    }

    .Contact {
      margin: 20px;
      padding: 40px;
      border-radius: 2em;
      box-shadow: 0px 8px 20px #00000030;
      max-width: 100vw;
      display: flex;
      flex-direction: column;
    }

    .Links {
      display: flex;
      flex-wrap: wrap;
      font-size: 4em;
      align-items: center;
      justify-content: center;
      gap: 1em;
      a {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    @media screen and (max-width: ${standard.media.tablet}) {
      h1 {
        font-size: ${font.size.titleMobile};
        line-height: 1em;
        letter-spacing: 0.75em;
      }
      .Wrappable {
        flex-direction: column-reverse !important;
      }
      .HalfLayer {
        width: 100%;
        height: 100%;
      }
      .Layer {
        height: fit-content;
      }
      .View {
        height: 100vh;
      }
      .CaptionContainer {
        margin: 0em;
        border-radius: 0;
        box-shadow: none;
      }
      .Contact {
        margin: 0;
        box-shadow: none;
        border-radius: 0;
      }
    }

    @media screen and (max-width: ${standard.media.mobile}) {
      :root {
        font-size: ${font.size.paragraphMobile};
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
