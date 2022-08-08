<template>
  <tr class="border-2">
    <th class="p-3 font-normal">{{ personInfo.completeName }}</th>
    <th class="p-3 font-light">{{ personInfo.gender }}</th>
    <th class="p-3 font-light">{{ personInfo.dob }}</th>
    <th class="p-3 font-light underline">
      <a :href="`http://localhost:8080/details/${personInfo.id}`"
        >Open Details</a
      >
    </th>
  </tr>
</template>

<script>
export default {
  name: "Person",
  props: ["personInfo"],
};
</script>
