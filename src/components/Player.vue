<template lang="pug">
    .content(v-if="track && track.album")
        p.is-128x128
            img(v-bind:src="track.album.images[0].url")

        p
            strong {{track.name}}
            small [{{track.duration_ms | ms-to-mm}}]

        p
            audio(controls, v-bind:src="track.preview_url")

</template>

<script>
    import {mapState} from 'vuex';

    export default {

        // created(){
        //     this.$bus.$on('set-track',(track)=>{
        //         this.track = track;
        //     })
        // }

        computed:{
            ...mapState(['track'])
        }
    }

</script>

<style lang="scss" scoped>
    img{
        width: 124px;
        border-radius: 50%;
    }
</style>