<template>
  <div class="hello">
     <form class="ui form" method="post" action="/Systeme">
       <input type="hidden" name="tableName" value="T_Systeme">
        <h4 class="ui dividing header">Ajout d'un univers: </h4>
        <div class="field">
          <label for="name">Nom</label>
          <input type="text" id="name" name="name" placeholder="Nom du système de jeu">
        </div>
        <button type="submit" class="ui blue labeled submit icon button">
          <i class="icon edit"></i> Envoyer
        </button>
     </form>
   </div>
 </template>

<script>
export default {
  name: 'Systeme'
}
</script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
 </style>
