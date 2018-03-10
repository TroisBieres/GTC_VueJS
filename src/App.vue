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
    <association v-if='idOnglet=="Association"'></association>
    <convention v-if='idOnglet=="Convention"'></convention>
    <disponibilite v-if='idOnglet=="Disponibilite"'></disponibilite>
    <partie v-if='idOnglet=="Partie"'></partie>
    <scenario v-if='idOnglet=="Scenario"'></scenario>
    <systeme v-if='idOnglet=="Systeme"'></systeme>
  </div>
</template>

<script>
import Association from '@/components/Association'
import Convention from '@/components/Convention'
import Disponibilite from '@/components/Disponibilite'
import Partie from '@/components/Partie'
import Scenario from '@/components/Scenario'
import Systeme from '@/components/Systeme'

export default {
  name: 'App',
  data () {
    return {
      idOnglet: '',
      lol: '""'
    }
  },
  components: {
    Association,
    Convention,
    Disponibilite,
    Partie,
    Scenario,
    Systeme
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
