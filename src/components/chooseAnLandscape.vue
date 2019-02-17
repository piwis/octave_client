<template>
    <div class="choose-an-landscape">

        <transition name="fade" mode="out-in">
            <div v-if="show" key="1">
                <Loader text="chargement"></Loader>
            </div>
            <div v-else key="2">
                <img :src="city.img" alt="">
                <p>
                    {{this.city.name}}
                </p>
            </div>

        </transition>

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

            loadDrone: function() {
                this.$router.push("commande-drone")
            }
        },

        methods: {

            closeDecision() {

            },
            goToConnectDrone() {
                this.show = true
                // Lancer EMIT pour se connecter au drone

                // Réponse du drone en haut dans socket
                // Simulation connexion
                setTimeout(() => {
                    this.$router.push("commande-drone")
                },1000)

            }

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
