<template>
  <div class="full-width">
    <p><b>IP Address Tracker</b></p>
    <div class="form-controls">
      <input
        v-model="ip"
        type="text"
        name=""
        id=""
        placeholder="Search for any IP address or domain"
      />
      <img @click="processIp(ip)" src="@/assets/icon-arrow.svg" alt="search" />
    </div>
    <p v-show="store.$state.trackError" class="error">
      Introduce una dirección ip correcta
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "@/stores/tracker";

//data
const store = useStore();
const ip = ref("");

//actions
const processIp = (ip: string) => {
  if (ip) store.trackIp(ip);
};
</script>

<style scoped>
p {
  color: white;
  font-size: 1.2rem;
  text-align: center;
}
.error {
  text-align: center;
  color: #d3172e;
  font-size: 0.8rem;
  text-align: center;
}
.full-width {
  width: 100%;
}
.form-controls {
  padding: 25px 25px 0px 25px;
  display: flex;
}
.form-controls img {
  cursor: pointer;
  padding: 0px 15px;
  object-fit: contain;
  background-color: black;
  border-radius: 0px 8px 8px 0px;
}
.form-controls input {
  padding: 12px;
  min-height: 40px;
  width: 100%;
  border: 0px;
  border-radius: 8px 0px 0px 8px;
}
</style>
