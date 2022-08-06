<template>
  <div class="hello">
    <h1>{{ this.personInfo.name.first }} {{ this.personInfo.name.last }}</h1>
    <p>{{ this.personInfo.gender }}</p>
    <p>{{ this.personInfo.dob.date }}</p>
    <p>No actions yet</p>
  </div>
</template>

<script>
export default {
  name: "SomethingElse",
  props: ["personInfo"],
};
</script>
