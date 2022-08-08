<template>
  <div class="flex flex-col mx-96">
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
      <thead>
        <Person
          v-for="person in people"
          :key="person.login.username"
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
      nextPage: 1,
      searchNameTextValue: "",
    };
  },
  methods: {
    api() {
      let list = [
        {
          gender: "female",
          name: { title: "Miss", first: "Elfi", last: "Heinzel" },
          location: {
            street: { number: 1520, name: "Mühlenstraße" },
            city: "Pohlheim",
            state: "Baden-Württemberg",
            country: "Germany",
            postcode: 58633,
            coordinates: { latitude: "-52.7998", longitude: "90.7987" },
            timezone: {
              offset: "+4:00",
              description: "Abu Dhabi, Muscat, Baku, Tbilisi",
            },
          },
          email: "elfi.heinzel@example.com",
          login: {
            uuid: "45092bb0-8d49-40e2-ad60-20ce405ee277",
            username: "beautifuldog141",
            password: "griffin",
            salt: "YpLb4i32",
            md5: "160edc64834ef8a3bdc80300e44359fe",
            sha1: "6b462f087fbe491d7318b0d97b50cf195429def1",
            sha256:
              "c1d7738c75eafe2b823a45a894bd300db6060bbc537856d36cf537d77af56631",
          },
          dob: { date: "1990-03-20T06:03:27.939Z", age: 32 },
          registered: { date: "2021-01-14T22:34:51.663Z", age: 1 },
          phone: "0038-8144796",
          cell: "0172-5948812",
          id: { name: "SVNR", value: "38 200390 H 895" },
          picture: {
            large: "https://randomuser.me/api/portraits/women/29.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/29.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/29.jpg",
          },
          nat: "DE",
        },
        {
          gender: "female",
          name: { title: "Ms", first: "Gordana", last: "Stojković" },
          location: {
            street: { number: 1396, name: "Milovana Milenkovića" },
            city: "Čoka",
            state: "Prizren",
            country: "Serbia",
            postcode: 15080,
            coordinates: { latitude: "38.4004", longitude: "156.4846" },
            timezone: {
              offset: "-1:00",
              description: "Azores, Cape Verde Islands",
            },
          },
          email: "gordana.stojkovic@example.com",
          login: {
            uuid: "a38e7ed1-45c9-4db4-8d62-83a0cd6f55e0",
            username: "whiteladybug154",
            password: "skidoo",
            salt: "U1A7ux6b",
            md5: "de15706d9f697074ddca88dcf0b6fa90",
            sha1: "988d311d9c4d06ceaf318863df8f84bd5c754c99",
            sha256:
              "c6c8e5891fd458e9c9bcc50bb1df7996d9bd07fc499cfd33926920f62488e0c4",
          },
          dob: { date: "2000-02-20T03:34:32.266Z", age: 22 },
          registered: { date: "2016-07-11T09:17:51.631Z", age: 6 },
          phone: "036-1381-395",
          cell: "065-0999-098",
          id: { name: "SID", value: "594793293" },
          picture: {
            large: "https://randomuser.me/api/portraits/women/72.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/72.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/72.jpg",
          },
          nat: "RS",
        },
      ];

      this.$store.commit({
        type: "addPeople",
        newPeople: list,
      });
    },
  },
  mounted() {
    this.api(this.nextPage);
  },
  computed: {
    people() {
      return this.$store.getters.filterPeople(this.searchNameTextValue);
    },
  },
};
</script>
