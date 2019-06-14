<template lang="pug">
    main(v-if="track && track.album")
        .container
            pm-loader(v-show="isLoading")

            .columns
                .column.is-3.has-text-centered
                    figure.media-left
                        p.image
                            img(v-bind:src="track.album.images[0].url")
                        p
                            a.button.is-primary.is-large
                                span.icon(@click="selectTrack")
                .column.is-8
                    .panel
                        .panel-heading
                            h1.title {{track.name}}
                        .panel-block
                            article.media
                                .media-content
                                    .content
                                        ul(v-for="(v,k) in track")
                                            li
                                                strong {{ k }}:&nbsp;
                                                span {{ v }}
                                nav.level
                                 .level-left
                                    a.level-item
</template>


<script>
    import trackService from '@/services/track';
    import PmLoader from '@/components/shared/Loader.vue';
    import trackMixin from '@/mixins/track';

    export default {
        mixins:[trackMixin],
        data(){
            return{
                track:{},
                isLoading:true,

            }
        },

        components:{
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