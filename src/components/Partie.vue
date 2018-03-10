<template>
  <div class="hello">
     <form class="ui form" method="post" action="/Partie">
       <input type="hidden" name="tableName" value="T_Partie">
        <h4 class="ui dividing header">Ajout d'une partie: </h4>
        <div class="field">
          {{disponibilites}}
          <label for="disponibilite">Disponibilité</label>
          <select   class="ui fluid dropdown"
                    id="disponibilite"
                    name="disponibilite"
                    required>
            <option value="" selected disabled>Choisir une disponibilité</option>
            <option v-for="disponibilite in disponibilites" :key="disponibilite.id_Disponibilite" :value="disponibilite.id_Disponibilite">
              {{disponibilite.Con_Name}} :
              {{disponibilite.Sys_Name}} -
              {{disponibilite.Sce_Name}} |
              {{disponibilite.Dis_Schedule}}
            </option>
          </select>
        </div>
        <div class="field">
          <label for="name">Nombre de Joueurs</label>
          <input id="playernumber" name="playernumber" type="number" min="1" max="15" step="1"/>
        </div>
        <button type="submit" class="ui blue labeled submit icon button">
          <i class="icon edit"></i> Envoyer
        </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Partie',
  data () {
    return {
      disponibilites: {},
      disponibilite: {}
    }
  },
  mounted () {
    this.$http.get('http://localhost:3000/api/T_Disponibilites').then(
      (res) => {
        this.disponibilites = res.data
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
