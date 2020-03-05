<template>
  <div id="graph">
  </div>
</template>

<script>
import { createGitgraph } from "@gitgraph/js";

export default {
  name: 'NetworkGraph',
  // components: {
  // }
  created: function() {
    // Get the graph container HTML element.
    const graphContainer = document.getElementById("graph");

    // Instantiate the graph.
    const gitgraph = createGitgraph(graphContainer);

    // Simulate git commands with Gitgraph API.
    const master = gitgraph.branch("master");
    master.commit("Initial commit");

    const develop = gitgraph.branch("develop");
    develop.commit("Add TypeScript");

    const aFeature = gitgraph.branch("a-feature");
    aFeature
      .commit("Make it work")
      .commit("Make it right")
      .commit("Make it fast");

    develop.merge(aFeature);
    develop.commit("Prepare v1");

    master.merge(develop).tag("v1.0.0");
  },
  data() {
    return {
      graph: null
    }
  }
}
</script>

<style lang="scss">

</style>