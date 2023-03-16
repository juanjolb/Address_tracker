<template>
  <div class="full-width">
    <div class="box-container">
      <div class="item-info">
        <span class="info">IP ADDRESS</span>
        <span class="item">{{ trackInfo.ip }}</span>
      </div>
      <div class="item-info">
        <span class="info">LOCATION</span>
        <span class="item">{{ trackInfo.location.region }}</span>
      </div>
      <div class="item-info">
        <span class="info">TIMEZONE</span>
        <span class="item">{{ trackInfo.location.timezone }}</span>
      </div>
      <div class="item-info">
        <span class="info">ISP</span>
        <span class="item">{{ trackInfo.isp }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../stores/tracker";
import { storeToRefs } from "pinia";

//data
const store = useStore();
const { trackInfo } = storeToRefs(store);
</script>

<style scoped>
.full-width {
  width: 100%;
}
.box-container {
  box-shadow: 0px 0px 3px 1px #e8e8e8;
  background-color: white;
  position: absolute;
  border-radius: 5px;
  margin-top: 20px;
  padding: 15px;
  width: 100%;
}
.item-info {
  margin: 15px 0px;
}
.item-info * {
  padding-bottom: 5px;
  text-align: center;
  display: block;
  font-weight: bold;
}
.item-info .info {
  letter-spacing: 1px;
  font-size: 0.6rem;
  color: var(--custom-gray);
}
</style>
