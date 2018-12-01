<template>
  <nav class="menu">
    <router-link :to="{name:'home'}" exact>Home</router-link>
    <router-link :to="{name:'faq'}">FAQ</router-link>
    <div class="spacer">
      <template v-if="$state.user">
        <a href>{{$state.user.username}}</a>
        <a href @click="logout">Logout</a>
      </template>
	  <router-link v-else :to"{name:'login'}"></router-link>
    </div>
  </nav>
</template>
<style lang="stylus" scoped>
@import '../style/imports';

.router-link-active {
  border-bottom-color: $primary-color;
}
</style>
