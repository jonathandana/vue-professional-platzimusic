const trackMixin = {
    methods:{
        selectTrack(){
            if(!this.track.preview_url){
                return false;
            }
            this.$emit('select',this.track.id);
            this.$bus.$emit('set-track',this.track)
        }
    }
};

export default trackMixin;