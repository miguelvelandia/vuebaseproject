<template>
  <div v-loading="loading">
    <h2>{{model.title}}</h2>
    {{model.body}}
  </div>
</template>

<script>
  export default {
    name: "ExampleView",
    data() {
      return {
        loading: false,
        model: {}
      };
    },
    created() {
      let self = this;
      self.loading = true;
      //self.$route.params.id
      this.$store.dispatch('getPost', 1).then(r => {
        self.loading = false
        self.model = r;
      }).catch(r => {});
    },
    methods: {

    }
  };

</script>
