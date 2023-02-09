<script>
  import { Router, Link, Route } from "svelte-routing";
  import ClientTracker from "./components/mutators/ClientTracker.svelte";
  import Skin from "./components/mutators/Skin.svelte";
  import Home from "./routes/Home/Home.svelte";
  export let url = "";
</script>

<main>
  <ClientTracker>
    <Skin>
      <Router {url}>
        <Route path="/"><Home /></Route>
      </Router>
    </Skin>
  </ClientTracker>
</main>

<style>
  main {
    position: relative;
  }
</style>
