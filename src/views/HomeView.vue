<template>
  <div class="flex flex-col mx-96">
    <input
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
      <thead>
        <Person
          v-for="person in this.people"
          :key="person.id.value"
          :personInfo="person"
        />
      </thead>
    </table>

    <button class="p-5 border-2 mx-64 my-6 rounded-2xl" @click="api(nextPage)">
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
      people: [],
      nextPage: 1,
    };
  },
  methods: {
    api: function (page) {
      fetch(
        `https://randomuser.me/api/?page=${page}&results=50&seed=easterEgg`
      ).then((res) =>
        res
          .json()
          .then((json) => this.people.push.apply(this.people, json.results))
      );

      this.nextPage = this.nextPage + 1;
    },
  },
  mounted() {
    this.api(this.nextPage);
  },
};
</script>
