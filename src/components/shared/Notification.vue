<template  lang="pug">
    .container
        .columns
            .column.is-5.is-offset-4
                .notification(v-bind:class="type_message")
                    slot(name="body") Has Error.


</template>

<script>
    export default {
        props:{
            type_message:{
                type:String,
                require: false
            }

        }
    }
</script>
<style lang="scss" scoped>
    .notification{
        margin: 10px;
    }
</style>