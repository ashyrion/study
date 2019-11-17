<template>
  <div>
    <div v-for="(box, index) in colorBoxs" :key="index">
      <div class="row">
        <div class="countBox" :style="{ backgroundColor: box.color }">
          {{ box.value }}
        </div>
      </div>
      <div class="row">
        <div class="countBox" :style="{ backgroundColor: box.color }">
          {{ box.value }}
        </div>
      </div>
      <div class="row">
        <div class="countBox" :style="{ backgroundColor: box.color }">
          {{ box.value }}
        </div>
      </div>
    </div>
    <div>
      <button @click="up(colorBoxs[0])">카운트 증가</button>
      <button @click="up(colorBoxs[1])">카운트 증가</button>
      <button @click="up(colorBoxs[2])">카운트 증가</button>
      <button @click="reset">리셋</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "countBox",
  data() {
    return {
      colorBoxs: [
        {
          value: 1,
          color: "green"
        },
        {
          value: 1,
          color: "blue"
        },
        {
          value: 1,
          color: "red"
        }
      ]
    };
  },
  methods: {
    up(up) {
      up.value += 1;
    },
    reset() {
      this.colorBoxs[0].value = 1;
      this.colorBoxs[1].value = 1;
      this.colorBoxs[2].value = 1;
    }
  }
};
</script>
<style>
.row {
  float: left;
}
.countBox {
  width: 100px;
  height: 20px;
  border: 1px solid;
  margin: 20px;
  padding: 10px;
}
</style>
