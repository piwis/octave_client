<template>
    <div class="qrcode">
        <div>
            <canvas id="canvas"></canvas>
            <p class="title">
                Scanner le QR Code avec ton smartphone
                <span>
                pour réveiller Octave !
            </span>
            </p>
        </div>
    </div>
</template>

<script>
    import Events from "../../static/datas/eventsOfCourse";

    var QRCode = require('qrcode');

    export default {
        name: 'qrcode-view',
        data() {
            return {
                show: true
            }
        },
        sockets: {
            connect() {

                /**
                 * Quand l'user arrive sur le site
                 * Cela permet de quitter la page du qrCode
                 */
                this.$socket.emit("clientTv", true)
            },

            startIntroduction() {
                this.$router.push('introduction')
            }
        },

        mounted() {

            var canvas = document.getElementById('canvas')
            QRCode.toCanvas(canvas, 'https://octave.suriteka.website/', function (error) {
                if (error) console.error(error)
                console.log('success!');
            })
        }

    };
</script>


<style scoped>
    .qrcode {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    #canvas {
        width: 300px !important;
        height: 300px !important;
    }

    .title {
        font-size: 30px;
        line-height: 1;
    }

    span {
        display: block;
        font-size: 40px;
        line-height: 1;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-to, .fade-leave {
        opacity: 1;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
</style>
