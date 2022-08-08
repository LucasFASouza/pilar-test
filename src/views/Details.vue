<template>
  <div class="flex flex-col m-28 lg:mx-80">
    <div class="border-2">
      <span class="p-3 font-normal">Name: </span>
      <span class="p-3 font-light">{{ this.searchPerson().completeName }}</span>
    </div>
    <div class="border-2">
      <span class="p-3 font-normal">Gender: </span>
      <span class="p-3 font-light">{{ this.searchPerson().gender }}</span>
    </div>
    <div class="border-2">
      <span class="p-3 font-normal">Date of Birth: </span>
      <span class="p-3 font-light">{{ this.searchPerson().dob }}</span>
    </div>
    <div class="border-2">
      <span class="p-3 font-normal">ID: </span>
      <span class="p-3 font-light">{{ this.searchPerson().id }}</span>
    </div>
    <div class="border-2">
      <span class="p-3 font-normal">Location: </span>
      <span class="p-3 font-light">{{ this.searchPerson().location }}</span>
    </div>
    <div class="border-2">
      <span class="p-3 font-normal">Email: </span>
      <span class="p-3 font-light">{{ this.searchPerson().email }}</span>
    </div>
    <div class="border-2">
      <span class="p-3 font-normal">Phone: </span>
      <span class="p-3 font-light">{{ this.searchPerson().phone }}</span>
    </div>
    <div class="border-2">
      <span class="p-3 font-normal">Nationality: </span>
      <span class="p-3 font-light">{{ this.searchPerson().nat }}</span>
    </div>
    <div class="border-2">
      <span class="p-3 font-normal">URL: </span>
      <span class="p-3 font-light">{{ this.searchPerson().url }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      person: {
        completeName: "",
        gender: "",
        dob: "",
        id: "",
        url: "",
        location: "",
        email: "",
        phone: "",
        nat: "",
        picture: "",
      },
    };
  },
  methods: {
    searchPerson() {
      const people = this.$store.state.allPeople;
      const person = people.find((x) => x.id === this.$route.params.id);
      return person;
    },
  },
};
</script>
