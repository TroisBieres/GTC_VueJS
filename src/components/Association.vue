<template>
  <div class="hello">
    <form class="ui form">
       <input type="hidden" name="tableName" value="T_Association">
       <h4 class="ui dividing header">Ajout d'une association: </h4>
       <div class="required field">
         <label for="name">Nom</label>
         <input type="text" id="name" name="name" v-model="name" placeholder="Nom de l'association" required>
       </div>
       <button class="ui blue labeled submit icon button" @click="save(name)">
         <i class="icon edit"></i> Envoyer
       </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Association',
  props: {
    association: undefined
  },
  data () {
    return {
      name: undefined
    }
  },
  methods: {
    save (association) {
      if (association === '') {
        return
      }
      this.$http.post('http://localhost:3000/api/T_Associations', {
        Ass_Name: association
      }).then(
        (res) => {
          console.log('success', res)
        },
        (err) => {
          console.log(err)
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
