<template lang="pug">
    section.hero.is-success
        .hero-head
            header.nav
                .container.wrap-nav
                    .nav-left
                        .nav-item
                            strong Platzi Music
                    .nav-right.nav-menu
                        router-link.nav-item(to='/') Search
                        router-link.nav-item(to='about') About

        .hero-body
            .container.has-text-centered
                h1.title Platzi Music
                h2.subtitle Cansiones Vue-nisimas
                pm-player
</template>


<script>

import PmPlayer from '@/components/Player.vue';
export default {
    components:{
        PmPlayer
    }
}
</script>

<style lang="scss" >
   .wrap-nav{
       display: flex;
       justify-content: space-between;
     }
</style>


