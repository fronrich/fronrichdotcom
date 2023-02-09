<script>
  import { getContext } from "svelte";
  import Saos from "saos";
  import ThreeScene from "../../components/frames/ThreeScene.svelte";
  import ThreeFlurry from "../../components/assets/ThreeFlurry.svelte";
  import ThreeCarpet from "../../components/assets/ThreeCarpet.svelte";
  import Background from "../../components/frames/Background.svelte";
  import Page from "../../components/frames/Page.svelte";
  import View from "../../components/frames/View.svelte";
  import Layer from "../../components/frames/Layer.svelte";
  import Pool from "../../components/assets/Pool/Pool.svelte";
  import Button from "../../components/mutators/Button.svelte";
  import Row from "../../components/frames/Row.svelte";
  import CaptionMediaView from "../../components/frames/CaptionMediaView.svelte";
  import HighlightedText from "../../components/assets/HighlightedText.svelte";
  import {
    Code,
    FlowerPetal,
    Folder,
    PaintBrush,
    Wand,
    Wrench,
  } from "../../gltfmodels";

  // compiles faster than dynamic imports
  import DribbbleLogo from "phosphor-svelte/lib/DribbbleLogo";
  import BehanceLogo from "phosphor-svelte/lib/BehanceLogo";
  import GithubLogo from "phosphor-svelte/lib/GithubLogo";
  import SpotifyLogo from "phosphor-svelte/lib/SpotifyLogo";
  import Envelope from "phosphor-svelte/lib/Envelope";
  import LinkedinLogo from "phosphor-svelte/lib/LinkedinLogo";

  const { color } = getContext("Theme");
</script>

<section>
  <Background>
    <ThreeScene position={[0, 0, 7]}>
      <ThreeFlurry petalCount={10} spawnWidth={8} />
    </ThreeScene>
  </Background>
  <Background>
    <ThreeScene position={[0, 0, 4]}>
      <ThreeFlurry petalCount={10} spawnWidth={5} />
    </ThreeScene>
  </Background>
  <Page>
    <Saos
      animation={"fade-in 1200ms cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}
      animation_out={"fade-in 1200ms cubic-bezier(0.390, 0.575, 0.565, 1.000) both reverse"}
      top={250}
      bottom={250}
    >
      <View>
        <Layer>
          <Pool>
            <h1>fronrich.p</h1>
          </Pool>
          <Row>
            <Button>Design</Button>
            |
            <Button>Engineering</Button>
            |
            <Button>Art</Button>
          </Row>
        </Layer>
      </View>
    </Saos>
    <CaptionMediaView media={Wrench}>
      hi. i’m fronrich, a
      <HighlightedText>ui/ux</HighlightedText> researcher,
      <HighlightedText>software</HighlightedText> developer, and a
      <HighlightedText>graphic</HighlightedText> designer. i've loved creating things
      ever since I was little.
    </CaptionMediaView>
    <CaptionMediaView media={Code} reverse>
      during my time studying computer science at university, i
      <HighlightedText>researched</HighlightedText>,
      <HighlightedText>designed</HighlightedText>, and
      <HighlightedText>programmed</HighlightedText> the ui for the
      <a
        href="https://thedailytexan.com/2019/08/06/ut-students-create-new-dining-menu-website/"
        target="_blank"
        rel="noreferrer"
      >
        campus dining menu.
      </a>
      the university of texas at austin still uses this menu to this day.
      <br /><br />
      this case study was the first step of my journey into the world of ux.
    </CaptionMediaView>
    <CaptionMediaView media={Wand} scale={0.03}>
      i also started,
      <HighlightedText>IZA Creative Studio</HighlightedText>, a full-stack,
      platform development studio.
    </CaptionMediaView>
    <CaptionMediaView media={Folder} scale={0.2} reverse>
      since then, i’ve created everything from
      <HighlightedText>brand artwork</HighlightedText>, to
      <HighlightedText>dashboards</HighlightedText>, to
      <HighlightedText>portfolio sites</HighlightedText> , to
      <HighlightedText>PWAs</HighlightedText>
      for U.S and international clients.
    </CaptionMediaView>
    <CaptionMediaView media={PaintBrush} scale={0.2}>
      i’m always looking for opportunities to expand my horizons and redefine
      the
      <HighlightedText>art of the possible</HighlightedText>.
    </CaptionMediaView>
    <View>
      <Layer>
        <ThreeCarpet />
      </Layer>
      <Layer>
        <Saos
          animation={"fade-in 1200ms cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}
          animation_out={"fade-in 1200ms cubic-bezier(0.390, 0.575, 0.565, 1.000) both reverse"}
          top={250}
          bottom={250}
        >
          <div class="Contact" style:background={color.background}>
            <h2>
              Lets get to work!
              <br /><br />
              <LinkedinLogo /> Fronrich Puno
              <br /><br />
              <Envelope /> iza.design.consulting@gmail.com
            </h2>
            <h1 style:background={color.background}>
              <a
                href="https://dribbble.com/piing_at_iza"
                target="_blank"
                rel="noreferrer"
              >
                <DribbbleLogo weight="thin" />
              </a>
              <a
                href="https://www.behance.net/fronrich"
                target="_blank"
                rel="noreferrer"
              >
                <BehanceLogo weight="thin" />
              </a>
              <a
                href="https://github.com/fronrich"
                target="_blank"
                rel="noreferrer"
              >
                <GithubLogo weight="thin" />
              </a>
              <a
                href="https://open.spotify.com/artist/6XFkqP44urfco1VyhjQJgx?si=-4ODv0XuQCGwGx_W7l0euQ"
                target="_blank"
                rel="noreferrer"
              >
                <SpotifyLogo weight="thin" />
              </a>
            </h1>
          </div>
        </Saos>
      </Layer>
    </View>
  </Page>
  <Background>
    <ThreeScene position={[0, 0, 2]}>
      <ThreeFlurry petalCount={5} />
    </ThreeScene>
  </Background>
</section>

<style>
  .Contact {
    margin: 20px;
    padding: 40px;
    border-radius: 2em;
    box-shadow: 0px 8px 20px #00000030;
  }
</style>
