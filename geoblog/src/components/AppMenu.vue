<template>
    <div class="app-menu">
        <div class="header">
            <i class="material-icons">place</i>
            GeoBlog
        </div>

        <div class="user">
            <div class="info" v-if="user">
                <span class="picture" v-if="userPicture">
                    <img :src="userPicture">
                </span>
                <span class="username">{{ user.profile.displayName }}</span>
            </div>
            <a @click="centerOnUser">
                <i class="material-icons">my_location</i>
            </a>
            <a @click="logout">
                <i class="material-icons">power_settings_new</i>
            </a>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
    computed:mapGetters([
        'user',
        'userPicture',
    ]),
    methods:mapActions({
        centerOnUser:'login',
        logout:'logout',
    })
    /*
    computed: {
        user() {
            return this.$store.getters.user;
        },
        userPicture() {
            return this.$store.getters.userPicture; // TODO
        }
    },
    methods: {
        centerOnUser() {
            // TODO
            this.$store.dispatch('login');
        },
        logout() {
            // TODO
            console.log("in app-menu,logout,this.user:",this.user);
            if(!this.user){
                const userData = {
                    profile:{
                        displayName:'Mr Cat',
                    }
                };

                this.$store.commit('user',userData);
                console.log("in app-menu,logout commit udt",userData);
            }
            else{
                //this.$store.commit('user',null);
                this.$store.dispatch('logout');
                console.log("in app-menu,logout commit null");
            }
        }
    }*/
};
</script>