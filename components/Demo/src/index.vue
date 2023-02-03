<template>
  <div>
    <el-button type="primary"><slot>demo</slot></el-button>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {};
  },
};
</script>

<style lang="less">
.demo {
  background: red;
  border: none;
  color: #fff;
  cursor: pointer;
}
</style>
