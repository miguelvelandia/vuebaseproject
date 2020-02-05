<template>
  <div v-loading="loading">

    <h2>Example Module</h2>
    <el-table :data="posts" :default-sort="{prop: 'title', order: 'ascending'}" style="width: 100%">
      <el-table-column prop="id" label="Num" sortable width="100"></el-table-column>
      <el-table-column prop="title" label="Titutlo" sortable>
        <template slot-scope="scope">
          <a :href="'#/example/' + scope.row.id">{{ scope.row.title }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="body" label="Mensaje"></el-table-column>
    </el-table>

  </div>
</template>

<script>
  export default {
    name: "ExampleIndex",
    data() {
      return {
        loading: false,
      };
    },
    created() {
      let self = this;
      self.loading = true;
      this.$store.dispatch('loadPosts', {
          moduel: this.$el
        }).then(r => {
          self.loading = false
        })
        .catch(r => {});
    },
    computed: {
      posts() {
        return this.$store.getters.getPosts
      }
    },
    methods: {

    }
  };

</script>
