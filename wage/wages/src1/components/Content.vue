<template>
  <div class="content">
    <div class="content-left">
      <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" :collapse="isCollapse" :router="true">
        <template 
          v-for="(item, index) in $router.options.routes"
          v-if="item.meta"
        >
          {{setActive(item.path, index)}}
          <el-submenu :index="index+''" :key="index" v-if="item.children">
            <template slot="title">
              <i :class="item.meta.icon"></i>
              <span slot="title">{{item.meta.title}}</span>
            </template>
            <el-menu-item
              :index="index+'-'+k"
              v-for="(v, k) in item.children"
              :key="k" 
              :route="{path:item.path+'/'+v.path}"
            >
              {{setActive(item.path+'/'+v.path, index+'-'+k)}}
              {{v.meta.title}}
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="1" :key="index" v-else :route="{path:item.path}">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="content-right">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item  v-for="(item, index) in $route.matched" :key="index" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Content',
  data () {
    return {
      isCollapse: false,
      defaultActive: '2'
    }
  },
  methods: {
    setActive (path, index) {
      if (path === this.$route.path) {
        this.defaultActive = index + ''
      }
      return ''
    }
  }
}
</script>
<style lang="sass" scoped>
.content 
  position: absolute
  left: 0 
  top: .5rem 
  right: 0 
  bottom: 0 
  .content-left
    width: 2rem 
    position: absolute
    left: 0 
    top: 0 
    bottom: 0 
    .el-menu-vertical-demo 
      width: 100%
      height: 100%
  .content-right 
    position: absolute
    left: 2rem 
    top: 0 
    right: 0 
    bottom: 0 
    padding: .1rem
</style>
