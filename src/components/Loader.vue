<template>
    <div class="loader">
        <img src="https://cdn.dribbble.com/users/225707/screenshots/2958729/attachments/648705/straight-loader.gif" alt="">
        <p>{{this.texte}}</p>
    </div>

</template>

<script>

    export default {


        name: 'choose-an-landscape',
        props: ['text'],
        data() {
            return {
                show:false,
                texte: this.text
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

            closeDecision() {

            },
            goToConnectDrone() {
                this.show = true
                // Lancer EMIT pour se connecter au drone

                // Réponse du drone en haut dans socket
                // Simulation connexion
                setTimeout(() => {

                })

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
