<template>
  <tr class="border-2">
    <th class="p-3 font-normal">
      {{ this.personInfo.name.first }} {{ this.personInfo.name.last }}
    </th>
    <th class="p-3 font-light">{{ this.personInfo.gender }}</th>
    <th class="p-3 font-light">{{ this.personInfo.dob.date.split("T")[0] }}</th>
    <th class="p-3 font-light">No actions yet</th>
  </tr>
</template>

<script>
export default {
  name: "SomethingElse",
  props: ["personInfo"],
};
</script>
