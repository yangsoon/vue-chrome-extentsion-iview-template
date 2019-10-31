<template>
    <div class="">
        <Drawer v-model="value" :draggable="true" :mask="false" :scrollable="true">
        </Drawer>
    </div>
</template>

<script>
    export default {
        name: "App",
        props: {
          tree: Array
        },
        data () {
            return {
                value: true,
            }
        }
    }
</script>

<style>
</style>