import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: [],
  },
  getters: {
    filterPeople: (state) => (search) => {
      var cleanPeople = [];
      state.people.forEach((person) => {
        let filteredPerson = {
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
        };

        filteredPerson[
          "completeName"
        ] = `${person.name.first} ${person.name.last}`;
        console.log(filteredPerson);
        filteredPerson["gender"] = person.gender;
        filteredPerson["dob"] = person.dob.date.split("T")[0];
        filteredPerson["id"] = person.login.username;
        filteredPerson[
          "location"
        ] = `${person.location.street.name} ${person.location.street.number}, ${person.location.postcode}, ${person.location.city} - ${person.location.state}, ${person.location.country}`;
        filteredPerson["email"] = person.login.email;
        filteredPerson["phone"] = person.login.phone;
        filteredPerson["nat"] = person.login.nat;
        filteredPerson["picture"] = person.picture.medium;

        console.log(filteredPerson);
        cleanPeople.push(filteredPerson);
      });

      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;

        return 0;
      }

      let filteredPeople = cleanPeople.filter((person) => {
        return (
          person.completeName.toLowerCase().indexOf(search.toLowerCase()) != -1
        );
      });

      filteredPeople.sort(compare);

      return state.people;
    },
  },
  mutations: {
    addPeople(state, payload) {
      state.people.push.apply(state.people, payload.newPeople);
    },
  },
  actions: {
    loadPeople(context) {
      
    }
  },
  modules: {},
});
