<template>
    <div class="hello">
        {{ landscapeOrientation }}
        <h2>X = {{ posX }}</h2>
        <h2>Y = {{ posY }}</h2>
        <h2>Z = {{ posZ }}</h2>
    </div>

</template>

<script>
    import * as UMath from '../utils/UMath';

    import Events from "../../static/datas/eventsOfCourse"

    var GyroNorm = require('gyronorm');

    export default {
        name: 'hello',


        sockets: {
            connect() {
                // Fired when the socket connects.
                this.$socket.emit(Events.scanQrCode, true)
            },
            disconnect() {
                this.isConnected = false;
            },
        },

        data() {
            return {
                posX: 0,
                posY: 0,
                posZ: 0,
                landscapeOrientation: false,
            }
        },
        methods: {
            startIntroduction() {
                this.$socket.emit(Events.startIntroduction, true)
            },

            rotationScreen() {
                var supportsOrientationChange = "onorientationchange" in window,
                    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

                window.addEventListener(orientationEvent, () => {
                    if (window.orientation === 90 || window.orientation === -90) {
                        this.landscapeOrientation = true;
                    } else {
                        this.landscapeOrientation = false;
                    }
                }, false);
            },
        },
        created() {
        },
        mounted() {
            this.rotationScreen();

            var gn = new GyroNorm();
            gn.init().then(() => {
                gn.start((data) => {
                    if (this.landscapeOrientation) {

                        if (data.do.gamma > -80 && data.do.gamma < 0 && data.do.alpha < 120 && data.do.beta < 100 && data.do.beta > -100) {
                            this.posY = "Rotation gauche : " + UMath.normalize(data.do.gamma, 0, -80);
                            this.posX = "Rotation gauche : " + UMath.normalize(data.do.beta, -180, 180);
                        } else if (data.do.gamma < 80 && data.do.gamma > 0 && data.do.alpha > 120 && data.do.beta < 100 && data.do.beta > -100) {
                            this.posY = "Rotation droite : " + UMath.normalize(data.do.gamma, 0, 80);
                            this.posX = "Rotation droite : " + UMath.normalize(data.do.beta, -180, 180);
                        }
                        this.posZ = data.do.alpha
                    } else {
                        // this.posX = data.do.beta;
                        // this.posY = data.do.gamma;
                    }


                });
            }).catch(function (e) {
                console.log("Erreur", e);
            });
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #35495E;
    }
</style>
