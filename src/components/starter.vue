<template>
    <div class="start-drone">


    </div>

</template>

<script>

    import Loader from '@/components/Loader'

    export default {
        name: 'choose-an-landscape',
        props: ['landscape'],
        components: {
            'Loader': Loader,
        },
        data() {
            return {
                show:false,
                city: this.landscape
            }
        },
        sockets: {
            connect() {
            },
            disconnect() {
            },
            // On attend la connection du drone
        },

        methods: {

        },
        mounted() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .choose-an-landscape {
        background: white;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        &--close {
            background: red;
            width: 20px;
            height: 20px;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    p {
        display: block;
    }
</style>
