<template>
  <div class="app-layout">
    <header class="header">
      <div><img class="img" src="../assets/logo.svg"/></div>
      <div>My shirt shop</div>
    </header>
    <NavMenu />
     <router-view />
  </div>
</template>

<script>



</script>
import NavMenu from './NavMenu.vue'
export default{
    components:{
        NavMenu,
    }
}
<style lang="stylus">
@import '../style/main';
</style>

<style lang="stylus" scoped>
.header {
  .img {
    width: 64px;
    height: 64px;
  }
}
</style>
