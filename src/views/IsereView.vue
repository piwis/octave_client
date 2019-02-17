<template>
    <div class="isere">
        <div class="third-introduction">
<<<<<<< HEAD
            <p>
                Je suis un drône,
                et je parcours l’Isère pour faire découvrir aux gens
            </p>
            <strong>
                la richesse et la variété de ses paysages
            </strong>
=======

            <transition name="fade" mode="out-in">

                <a v-show="isereHasRead" class="btn red" href="#" @click="startIntroduction">
                    <span>
                        On y va !
                    </span>
                </a>
            </transition>
>>>>>>> dfdf7f36be40e4e34a59c1d9142a556b786e65dc
        </div>
    </div>
</template>

<script>


    import Events from "../../static/datas/eventsOfCourse";

    export default {
        name: 'isere-view',

        data() {
            return {
                lookAtScreen: true,
                useHeadPhone: false,
                isereHasRead: false,
                //startIntroduction: false,
            }
        },

        sockets: {

<<<<<<< HEAD
            isereView: function (data) {
                this.$router.push('introduction-tuto')
            }
=======
            isereHasRead: function () {
                this.isereHasRead = true
            }


>>>>>>> dfdf7f36be40e4e34a59c1d9142a556b786e65dc
        },

        methods: {


        },

        mounted() {

            setTimeout(() => {
                console.log("Salut");
                this.$socket.emit(Events.isereHasRead, true)
            }, 2000)

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
    .btn {
        width: 100%;
        max-width: 100px;
        span {
            width: 120px;
        }
    }
</style>
