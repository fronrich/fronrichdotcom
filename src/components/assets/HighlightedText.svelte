<script>
  import { getContext } from "svelte";
  const { color } = getContext("Theme");
</script>

<span
  style={`background-color: ${color.foreground}; color: ${color.background};`}
>
  <slot />
</span>
