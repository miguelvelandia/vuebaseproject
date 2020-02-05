<template>
  <el-menu default-active="0">
    <template v-for="item in items">
      <el-submenu :index="item.id" :key="item.id" v-if="item.children !== undefined">
        <template slot="title">
          <i :class="'fa fa-' + item.icon"></i>
          <span>{{ item.text }}</span>
        </template>
        <el-menu-item-group title="Opciones">
          <el-menu-item v-for="child in item.children" :key="(item.id + child.id)" @click="redirect(child.path)">
            <i :class="'fa fa-' + child.icon"></i> <span>{{ child.text }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2" :key="item.id" v-if="item.children === undefined" @click="redirect(item.path)">
        <i :class="'fa fa-' + item.icon"></i>
        <span>{{ item.text }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
  export default {
   
    data() {
      return {
        items: [{
            id: "1",
            icon: "dashboard",
            text: "Dashboard",
            path: "/"
          },
          {
            id: "2",
            icon: "star",
            text: "Ejemplo",
            children: [{
              icon: "list",
              text: "Listar",
              path: "/example"
            }]
          },
          {
            id: "3",
            icon: "wrench",
            text: "Configuración",
            children: [{
                id: "1",
                icon: "list",
                text: "Opción 1",
                path: "/configuration/opcion1"
              },
              {
                id: "2",
                icon: "list",
                text: "Opción 2",
                path: "/configuration/opcion2"
              }
            ]
          }
        ]
      }
    },
    methods: {
      redirect(path) {
        if (path === undefined) return;
        this.$router.push(path).catch(err => {});
        
      }
    }
  };

</script>
