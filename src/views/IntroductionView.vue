<template>
    <div class="introduction">
        <transition name="fade" mode="out-in">
            <div class="first-introduction">
                <p class="light">
                    Cette expérience se déroule sur écran <br>
                    mais se controle grâce à ton smartphone.
                </p>
<<<<<<< HEAD
                <p>
                    N’oubliez pas de <strong>regarder le grand écran.</strong>
                </p>
=======
                <p class="bold">
                        N’oubliez pas de <strong>regarder le grand écran.</strong>
                </p>
                <a href="#" class="btn btn-icon blue" @click="startIntroduction">J'ai compris !</a>
>>>>>>> dfdf7f36be40e4e34a59c1d9142a556b786e65dc
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
<<<<<<< HEAD

            lookAtScreen() {
                this.$router.push('headphone')
            }

=======
>>>>>>> dfdf7f36be40e4e34a59c1d9142a556b786e65dc
        },
        methods: {

<<<<<<< HEAD
=======
            startIntroduction() {
                this.$root.$emit('bg', true)
                this.$socket.emit(Events.lookAtScreen, true)
                this.$router.push('headphone')
            }
>>>>>>> dfdf7f36be40e4e34a59c1d9142a556b786e65dc

        },

        mounted() {

        }

    };
</script>


<style scoped lang="scss">
    @import '../assets/scss/utils/_variables.scss';

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
    p {
        color: $dark-blue;
        line-height: 1;
        &.light {
            font-size: 20px;
            margin-bottom: 20px;
        }
        &.bold {
            margin-top: -3px;
            font-size: 30px;
        }
        @media screen and (max-width: $screen-xs) {
            &.light {
                font-size: 18px;
                margin-bottom: 20px;
            }
            &.bold {
                margin-top: 0;
                font-size: 24px;
            }
        }
        @media screen and (max-width: $screen-xs-max) {
            &.light {
                font-size: 20px;
                margin-bottom: 20px;
            }
            &.bold {

                font-size: 23px;
            }
        }

    }
</style>
