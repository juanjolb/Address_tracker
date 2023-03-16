<template>
  <div>
    <div class="container">
      <Searchbar />
      <InfoBox />
    </div>
    <div id="map">
      <Map />
    </div>
  </div>
</template>

<script setup lang="ts">
import Searchbar from "../components/Searchbar.vue";
import InfoBox from "../components/InfoBox.vue";
import Map from "../components/Map.vue";
</script>

<style scoped>
.container {
  background-image: url("../assets/pattern-bg.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 320px;
  padding: 20px;
}
#map {
  height: 180px;
}
</style>
