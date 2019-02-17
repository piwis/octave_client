<template>
    <div class="isere">
        <div class="third-introduction">
            <p>
                Je suis un drône,
                et je parcours l’Isère pour faire découvrir aux gens
            </p>
            <strong>
                la richesse et la variété de ses paysages
            </strong>
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
                //startIntroduction: false,
            }
        },

        sockets: {

            isereView: function (data) {
                this.$router.push('introduction-tuto')
            }
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
</style>
