<template>
  <div class="hello">
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
</template>

<script>
export default {
  name: 'Association'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
