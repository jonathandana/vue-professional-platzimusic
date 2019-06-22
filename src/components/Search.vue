<template lang="pug">
  main

    transition(name="move")
        pm-notification(
            v-show="showNotification",
            v-bind:type_message="notificationData.class_css")
            p(slot="body") {{notificationData.message}}
    transition(name="move")
        pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-large(
            v-model="searchQuery",
            v-on:keyup.enter="search",
            type="text",
            placeholder="Search songs")

          a.button.is-info.is-large(v-on:click="search") search
          a.button.is-danger.is-large &times;

      .container
          p
            small {{searchMessage}}

      .container.result
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(
            v-blur="t.preview_url",
            v-bind:class="{'is-active': t.id == selectedTrack}",
            v-bind:track="t",
            v-on:select="setSelectedTrack")



</template>

<script>
import trackService from '@/services/track';


import PmTrack from '@/components/Track.vue';

import PmLoader from '@/components/shared/Loader.vue';
import PmNotification from "@/components/shared/Notification.vue"




export default {
  name: 'app',
  data () {
    return {
        searchQuery:'',
        tracks:[],
        isLoading:false,
        selectedTrack:'',
        showNotification:false,
        notificationData:{
            class_css : '',
            message   : ''
        }

    }
  },

  components:{
      PmTrack,
      PmLoader,
      PmNotification
  },

  methods:{
    search(){
        if(this.searchQuery.length < 2){
            return false;
        }

        this.isLoading = true;
        trackService.search(this.searchQuery)
            .then((res)=>{

                if(res.tracks.total !== 0){
                    this.notificationData.class_css = 'is-success';
                    this.notificationData.message = `found ${res.tracks.total} total`;
                }else{
                    this.notificationData.class_css = 'is-danger';
                    this.notificationData.message = `Not Found Result.`;
                }

                this.showNotification = true;
                this.tracks = res.tracks.items;
                this.isLoading = false;
            })
    },
    setSelectedTrack(id){
        this.selectedTrack = id;
    }
  },
  computed:{
      searchMessage(){
          return `Found ${this.tracks.length}`;
      }
  },

  watch:{
      showNotification(){
          if(this.showNotification){
              if(this.notificationData.class_css === 'is-success') return;
              setTimeout(()=>{
                  this.showNotification = false;
              },3000)
          }
      }
  }


}
</script>

<style lang="scss">

.result{
    margin-top:50px;
}

.is-active{
    border: 3px solid #23d160;
}

</style>
