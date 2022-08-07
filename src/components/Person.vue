<template>
  <tr class="border-2">
    <th class="p-3 font-normal">
      {{ personInfo.name.first }} {{ personInfo.name.last }}
    </th>
    <th class="p-3 font-light">{{ personInfo.gender }}</th>
    <th class="p-3 font-light">{{ personInfo.dob.date.split("T")[0] }}</th>
    <th class="p-3 font-light">
      <button class="underline">Open Details</button>
    </th>
  </tr>
</template>

<script>
export default {
  name: "Person",
  props: ["personInfo"],
};
</script>
