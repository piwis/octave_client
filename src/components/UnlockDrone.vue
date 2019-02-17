<template>
    <div class="start-drone">
        <div class="draggerBounds">
            <div class="dragger">Drag</div>
        </div>
    </div>

</template>

<script>


    import {Draggable} from 'gsap/Draggable'

    export default {
        name: 'choose-an-landscape',
        props: ['landscape'],
        data() {
            return {
                show: false,
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
            unlockDrone() {

                var w = document.querySelector(".draggerBounds").getBoundingClientRect().width;
                var h = document.querySelector(".draggerBounds").getBoundingClientRect().height;

                let that = this;
                this.drag = Draggable.create(".dragger", {
                    type: "x",
                    bounds: ".draggerBounds",
                    onDrag: function () {
                        calcPercent(w, h, this.x, this.y, that)
                    }
                    //onDrag: function(){calcPercent(this.x,this.y)}
                });

                function calcPercent(w, h, x, y, that) {

                    let thatDrag = that;
                    let Xpercent = Math.round(x / w * 100);
                    let Ypercent = Math.round(y / h * 100);

                    if (Xpercent === 80) {
                        thatDrag.drag[0].disable();
                        thatDrag.isUnlock()
                        // emit l'user prendre le controle du drone
                    }
                }
            },
            isUnlock () {
                this.$emit('clicked', true)
            }


        },
        mounted() {
            this.unlockDrone();
        },
        beforeDestroy: function () {
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

    .draggerBounds {
        position: absolute;
        left: 30px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 250px;
        height: 50px;
        background: grey;
        margin: 20px;
        box-sizing: content-box;
    }

    .dragger {
        width: 50px;
        height: 50px;
        background: red;
        text-align: center;
        line-height: 50px;
        position: absolute;
    }
</style>
