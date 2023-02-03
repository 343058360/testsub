<template>
  <div>
    <!-- <button type="primary">
      <slot>MyBtn</slot>
    </button> -->
    <el-radio v-model="radio" label="1">MyBtn</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>

<script>
export default {
  name: "MyBtn",
  data() {
    return {
      radio: "1",
    };
  },
};
</script>
