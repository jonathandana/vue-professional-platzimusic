<template lang="pug">
    main
        .container
            pm-loader(v-show="isLoading")

            .columns
                .column.is-5.is-offset-4
                    pm-track(v-bind:track="track")
</template>


<script>
    import PmTrack from '@/components/Track.vue';
    import trackService from '@/services/track';
    import PmLoader from '@/components/shared/Loader.vue';


    export default {
        data(){
            return{
                track:{},
                isLoading:true,

            }
        },

        components:{
            PmTrack,
            PmLoader

        },

        created(){
           const id = this.$route.params.id;
           trackService.getById(id)
               .then((data)=>{
                   this.track = data;
                   this.isLoading = false
               })
        }
    }
</script>

<style lang="scss" scoped>
    .columns{
        margin: 20px;
    }
</style>