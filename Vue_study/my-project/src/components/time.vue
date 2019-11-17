<template>
  <div>
    <div>
      {{ timer }}
    </div>
  </div>
</template>
<script>
export default {
  name: "time",
  data() {
    return {
      timer: ""
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function() {
      var todayDate = new Date().toISOString().slice(0, 19);
      this.timer = todayDate;
    }
  }
};
</script>
<style></style>
