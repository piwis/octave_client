<template>
    <div class="introduction">
        <transition name="fade" mode="out-in">
            <div class="first-introduction">
                <p>
                    Cette expérience se déroule sur écran
                    mais se controle grâce à votre smartphone.
                </p>
                <p>
                    N’oubliez pas de <strong>regarder le grand écran.</strong>
                </p>
            </div>
        </transition>

    </div>
</template>

<script>

    import Events from "../../static/datas/eventsOfCourse";
    var QRCode = require('qrcode');

    export default {
        name: 'introduction-view',

        data() {
            return {
                lookAtScreen: true,
                useHeadPhone: false,
                //startIntroduction: false,
            }
        },

        sockets: {

            lookAtScreen() {
                this.$router.push('headphone')
            }

        },

        methods: {


        },

        mounted() {

        }

    };
</script>


<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    #canvas {
        width: 300px !important;
        height: 300px !important;
    }
</style>
