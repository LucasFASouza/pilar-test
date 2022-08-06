<template>
  <div class="home">
    <Person
      v-for="person in people"
      :key="person.id.value"
      :personInfo="person"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Person from "@/components/Person.vue";

export default {
  name: "HomeView",
  components: {
    Person,
  },
  data() {
    return {
      people: [],
    };
  },
  mounted() {
    fetch("https://randomuser.me/api/?results=10").then((res) =>
      res.json().then((json) => (this.people = json.results))
    );
  },
};
</script>
