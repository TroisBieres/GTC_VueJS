<template>
  <div class="hello">
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
</template>

<script>
export default {
  name: 'Convention'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
