<template>
  <div class="circle-list" id="study-one">
    <div v-for="(circle, index) in circles" :key="index">
      <div class="circle" :class="circle.colorName">
        {{ circle.position }}
        {{ circle.colorName }}
        {{ index }}
      </div>
    </div>
    <div class="button-list">
      <button @click="colorChange">신호등 변경</button>
      <button @click="positionChange">위치 변경</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "studyOne",
  data() {
    return {
      circles: [
        {
          colorName: "yellow"
        },
        {
          colorName: "blue"
        },
        {
          colorName: "red"
        }
      ]
    };
  },
  methods: {
    colorChange() {
      var b = Object.assign({}, this.circles);
      console.log(b[0].colorName, b[1].colorName, b[2].colorName);
      //   Vue.set(this.circles, this.circles[0].colorName, b[2].colorName);
      //   Vue.set(this.circles, this.circles[0].colorName, b[0].colorName);
      //   Vue.set(this.circles, this.circles[0].colorName, b[1].colorName);
      b[0].colorName = this.circles[1].colorName;
      b[1].colorName = this.circles[2].colorName;
      b[2].colorName = this.circles[0].colorName;
      this.circles = Object.assign({}, this.circles, b);
    },
    positionChange() {
      var a = Object.assign({}, this.circles);
      console.log(a[0].position);
      this.circles[0] = a[2];
      this.circles[1] = a[0];
      this.circles[2] = a[1];

      this.circles = Object.assign({}, this.circles, this.circles);
    }
  }
};
</script>
<style>
.circle-list {
  width: 100%;
  float: left;
}
.circle {
  width: 100px;
  height: 100px;
  color: #000;
  border-radius: 100%;
  border: 1px solid;
  float: left;
  margin: 0 20px;
}
.yellow {
  background-color: yellow;
}
.blue {
  background-color: blue;
}
.red {
  background-color: red;
}
</style>
