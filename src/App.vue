<template>
  <div id="app">
    <div class="ui fluid container">
      <h1>Section Administration</h1>
      <div class="ui top red inverted attached tabular menu">
        <button class="ui item active" v-if='idOnglet=="Association"'> Association </button>
        <button class="ui item" v-else @click="openAssociation"> Association </button>
        <button class="ui item active" v-if='idOnglet=="Convention"'> Convention </button>
        <button class="ui item" v-else @click="openConvention"> Convention </button>
        <button class="ui item active" v-if='idOnglet=="Disponibilite"'>Disponibilité</button>
        <button class="ui item" v-else @click="openDisponibilite">Disponibilité</button>
        <button class="ui item active" v-if='idOnglet=="Partie"'> Partie </button>
        <button class="ui item" v-else @click="openPartie"> Partie </button>
        <button class="ui item active" v-if='idOnglet=="Scenario"'> Scenario </button>
        <button class="ui item" v-else @click="openScenario"> Scenario </button>
        <button class="ui item active" v-if='idOnglet=="Systeme"'> Univers </button>
        <button class="ui item" v-else @click="openSysteme"> Univers </button>
      </div>
    </div>
<!--    <router-view/> -->
    <div v-if='idOnglet=="Association"'>
      <form class="ui form" method="post" action="/Association">
        <input type="hidden" name="tableName" value="T_Association">
        <h4 class="ui dividing header">Ajout d'une association: </h4>
        <div class="required field">
          <label for="name">Nom</label>
          <input type="text" id="name" name="name" placeholder="Nom de l'association" required>
        </div>
        <button type="submit" class="ui blue labeled submit icon button">
          <i class="icon edit"></i> Envoyer
        </button>
      </form>
    </div>
    <div v-if='idOnglet=="Convention"'>
      <form class="ui form" method="post" action="/Convention">
        <input type="hidden" name="tableName" value="T_Convention">
        <h4 class="ui dividing header">Ajout d'une convention: </h4>
        <div class="required field">
          <label for="name">Nom</label>
          <input  type="text"
                  id="name"
                  name="name"
                  placeholder="Nom de la convention"
                  required />
        </div>
        <div class="required field">
    <label for="name">Nombre de tables</label>
    <input  type="number"
            id="tablenumber"
            name="tablenumber"
            min="1"
            step="1"
            required />
  </div>
  <div class="required field">
    <label for="schedule1">Date de début</label>
    <div class="two fields">
      <div class="field">
        <input  type="date"
                id="schedule1_1"
                name="schedule1_1"
                required />
      </div>
      <div class="field">
        <input  type="time"
                id="schedule1_2"
                name="schedule1_2"
                required />
      </div>
    </div>
  </div>
  <div class="required field">
    <label for="schedule2">Date de fin</label>
    <div class="two fields">
      <div class="field">
        <input  type="date"
                id="schedule2_1"
                name="schedule2_1"
                required />
      </div>
      <div class="field">
        <input  type="time"
                id="schedule2_2"
                name="schedule2_2"
                required />
      </div>
    </div>
  </div>
  <button type="submit" class="ui blue labeled submit icon button">
    <i class="icon edit"></i> Envoyer
  </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      idOnglet: '',
      lol: '""'
    }
  },
  methods: {
    openAssociation: function () {
      this.idOnglet = 'Association'
    },
    openConvention: function () {
      this.idOnglet = 'Convention'
    },
    openDisponibilite: function () {
      this.idOnglet = 'Disponibilite'
    },
    openPartie: function () {
      this.idOnglet = 'Partie'
    },
    openScenario: function () {
      this.idOnglet = 'Scenario'
    },
    openSysteme: function () {
      this.idOnglet = 'Systeme'
    }
  }
}
</script>

<style>

</style>
