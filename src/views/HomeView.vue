<template>
  <div class="flex flex-col lg:mx-96">
    <input
      v-model="searchNameTextValue"
      type="text"
      placeholder="Search user"
      class="border-2 my-5 focused:border-blue"
    />

    <table class="table-auto my-3">
      <thead class="border-2">
        <tr>
          <th class="p-4">Name</th>
          <th class="p-4">Gender</th>
          <th class="p-4">Birth</th>
          <th class="p-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        <Person
          v-for="person in this.search()"
          :key="person.id"
          :personInfo="person"
        />
      </tbody>
    </table>

    <button class="p-5 border-2 xl:mx-64 my-6 rounded-2xl" @click="load()">
      Load More
    </button>
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
      searchNameTextValue: "",
    };
  },
  methods: {
    load() {
      this.$store.dispatch("loadPeople");
    },
    search() {
      console.log("searching");
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      let people = this.$store.state.allPeople.filter((person) => {
        return (
          person.completeName
            .toLowerCase()
            .indexOf(this.searchNameTextValue.toLowerCase()) != -1
        );
      });
      people.sort(compare);
      return people;
    },
  },
  mounted() {
    this.load();
  },
  computed: {
    people() {
      console.log(this.$store.getters.allPeople);
      return this.$store.getters.allPeople;
    },
  },
};
</script>
