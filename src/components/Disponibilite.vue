<template>
  <div class="hello">
   <form class="ui form" method="post" action="/Disponibilite">
     <input type="hidden" name="tableName" value="T_Disponibilite">
      <h4 class="ui dividing header">Ajout d'une disponibilité: </h4>
      <div class="required field">
        <label for="convention">Convention</label>
        <select   class="ui fluid dropdown"
                  id="convention"
                  name="convention"
                  v-model="id_Convention"
                  required>
          <option value="0" selected disabled>Nom de la convention</option>
          <option v-for="convention in conventions" :key="convention.id_Convention" :value="convention.id_Convention" @change="changemaxTable(convention.Con_TableQuantity)">
              {{ convention.Con_Name }}
          </option>
        </select>
      </div>
      <div class="required field">
        <label for="scenario">Scenario</label>
        <select   class="ui fluid dropdown"
                  id="scenario"
                  name="scenario"
                  v-model="id_Scenario"
                  required>
          <option value="0" selected disabled>Nom du Scénario</option>
          <option v-for="scenario in scenarios" :key="scenario.id_Scenario" :value="scenario.id_Scenario">
            {{scenario.Sce_Name }}
          </option>
        </select>
      </div>
      <div class="field">
        <label for="schedule1">Date de début</label>
        <div class="two fields">
          <div class="field">
            <input type="date"
              id="Dis_ScheduleDate"
              name="Dis_ScheduleDate"
              v-model="Dis_ScheduleDate"
            />
          </div>
          <div class="field">
            <input type="time"
              id="Dis_ScheduleTime"
              name="Dis_ScheduleTime"
              v-model="Dis_ScheduleTime"
            />
          </div>
        </div>
      </div>
      <div class="field" v-show="id_Convention!==0">
        <label for="name">Numéro de la table</label>
        <input
          id="Dis_TableNumber"
          name="Dis_TableNumber"
          type="number"
          min="1"
          :max="maxTable"
          step="1"
          v-model="Dis_TableNumber"
        />
      </div>
      <button type="submit" class="ui blue labeled submit icon button">
        <i class="icon edit"></i> Envoyer
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Disponibilite',
  data () {
    return {
      scenario: {},
      convention: {},
      scenarios: [],
      conventions: [],
      Dis_ScheduleTime: undefined,
      Dis_ScheduleDate: undefined,
      Dis_TableNumber: undefined,
      Dis_NoPlayer: undefined,
      id_Convention: 0,
      id_Scenario: 0,
      maxTable: undefined
    }
  },
  mounted () {
    this.$http.get('http://localhost:3000/api/T_Conventions').then(
      (res) => {
        this.conventions = res.data
      },
      (err) => {
        console.log(err)
      }
    )
    this.$http.get('http://localhost:3000/api/T_Scenarios').then(
      (res) => {
        this.scenarios = res.data
      },
      (err) => {
        console.log(err)
      }
    )
  },
  methods: {
    changemaxTable (n) {
      this.Dis_TableNumber = n
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
