<template lang="pug">
    .card(v-if="track && track.album")
        .card-image
            figure.image.is-1by1
                img(v-bind:src="track.album.images[0].url")

        .card-content
            .media
                .media-left
                    figure.image.is-48x48
                        img(v-bind:src="track.album.images[0].url")

                .media-content
                    p.title.is-6
                        strong {{track.name}}
                    p.subtitle.is-6 {{track.artists[0].name}}
            .content
            small {{track.duration_ms | ms-to-mm}}

            nav.level
                .level-left
                    a.level-item(v-on:click="selectTrack")
                        span.icon.is-small play

                    a.level-item(v-on:click="GoToTrack(track.id)")
                        span.icon.is-small Go



</template>
<script>
    import msToMm from '@/filters/ms-to-mm';
    import trackMixin from '@/mixins/track';
    export default {
        mixins:[trackMixin],
        props:{
            track:{
                type:Object,
                require:true
            }
        },
        methods:{


            GoToTrack(id){
                if(!this.track.preview_url){
                    return false;
                }

                this.$router.push({
                    name:'track',
                    params:{id}
                });
            }
        }
    };
</script>