<template>
  <div class="hello">
     <form class="ui form" method="post" action="/Partie">
       <input type="hidden" name="tableName" value="T_Partie">
        <h4 class="ui dividing header">Ajout d'une partie: </h4>
        <div class="field">
          <label for="disponibilite">Disponibilité</label>
          <select   class="ui fluid dropdown"
                    id="disponibilite"
                    name="disponibilite"
                    required>
            <option value="" selected disabled>Choisir une disponibilité</option>
<!--            <% for(var i=0; i<T_Disponibilite.length; i++) {%>
              <option value=<%= T_Disponibilite[i].id_Disponibilite %>>
                <%= T_Disponibilite[i].Con_Name %>:
                <%= T_Disponibilite[i].Sys_Name %> -
                <%= T_Disponibilite[i].Sce_Name %> |
                <%= T_Disponibilite[i].Dis_Schedule %>
              </option>
            <% } %>
  -->
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
  name: 'Partie'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
