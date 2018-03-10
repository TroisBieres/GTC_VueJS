<template>
  <div class="hello">
    <form class="ui form" method="post" action="/Scenario">
      <input type="hidden" name="tableName" value="T_Scenario">
        <h4 class="ui dividing header">Ajout d'un scénario: </h4>
        <div class="field">
          <label for="name">Nom</label>
          <input type="text" id="name" name="name" placeholder="Nom du scenario">
        </div>
        <div class="field">
          <label for="playermin">Nombre de joueurs</label>
          <input id="playermin" name="playermin" type="number" min="1" step="1"/>
        </div>
        <div class="field">
          <label for="playermax">Nombre de joueurs</label>
          <input id="playermax" name="playermax" type="number" min="1" step="1"/>
        </div>
        <div class="field">
          <label for="duration">Durée maximale de la table :</label>
          <input type="time" id="duration" name="duration"/>
        </div>
        <div class="field">
          <label for="idsystem">Univers:</label>
          <select   class="ui fluid dropdown"
                    id="idsystem"
                    name="idsystem"
                    required>
            <option value="" selected disabled>Choisir un univers</option>
<!--            <% for(var i=0; i < T_Systeme.length; i++) {%>
              <option value=<%= T_Systeme[i].id_Systeme %>>
                <%= T_Systeme[i].Sys_Name %>
              </option>
            <% } %>  -->
          </select>
        </div>

        <div class="field">
          <label for="audience">Public cible</label>
          <input type="text" id="audience" name="audience" placeholder="Tout Public">
        </div>

        <div class="field">
          <label for="idMJ">Univers:</label>
          <select   class="ui fluid dropdown"
                    id="idMJ"
                    name="idMJ"
                    required>
            <option value="" selected disabled>Choisir un MJ</option>
<!--            <% for(var i=0; i < T_Organisateur.length; i++) {%>
              <option value=<%= T_Organisateur[i].id_Organisateur %>>
                <%= T_Organisateur[i].Org_FirstName + ' ' + T_Organisateur[i].Org_LastName %>
              </option>
            <% } %> -->
          </select>
        </div>

        <button type="submit" class="ui blue labeled submit icon button">
          <i class="icon edit"></i> Envoyer
        </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Scenario',
  data () {
    return {
      systemes: {},
      organistateurs: {}
    }
  },
  mounted () {
    this.$http.get('http://localhost:3000/api/T_Systemes').then(
      (res) => {
        this.systeme = res.data
      },
      (err) => {
        console.log(err)
      }
    )
/*    this.$http.get('http://localhost:3000/api/T_Scenarios').then(
      (res) => {
        this.scenarios = res.data
      },
      (err) => {
        console.log(err)
      }
    )*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
