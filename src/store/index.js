import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    peoplePage: [],
    allPeople: [],
    nextPage: 1,
  },
  getters: {
    cleanResponse(state) {
      var response = [];
      state.peoplePage.forEach((person) => {
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

        response.push(filteredPerson);
      });
      return response;
    },
  },
  mutations: {
    addPeoplePage(state, newPeople) {
      state.peoplePage = newPeople;
    },
    addAllPeople(state, newPeople) {
      state.allPeople = [...state.allPeople, ...newPeople];
      state.nextPage++;
    },
  },
  actions: {
    async loadPeople({ commit, getters }) {
      const page = this.state.nextPage;
      const response = await fetch(
        `https://randomuser.me/api/?page=${page}&results=50&seed=easterEgg`
      );
      const people = await response.json();

      commit("addPeoplePage", people.results);
      const cleanedPeople = getters.cleanResponse;
      commit("addAllPeople", cleanedPeople);

      return this.state.allPeople;
    },
  },
  modules: {},
});
