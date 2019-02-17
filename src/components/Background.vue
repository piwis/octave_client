<template>
    <div class="background-vue">
        <div v-if="transitionBg" class="start-animation">
            <span :class="{ 'class-a': transitionBg, 'bg-transition blue' : true } "></span>
            <span class="bg-transition red transition-blue"></span>
        </div>
        <div v-else class="add-class">
            <span :class="{ 'class-a': transitionBg, 'bg-transition red' : true } "></span>
            <span class="bg-transition blue transition-red"></span>
        </div>
    </div>
</template>

<script>

    import mask from "../assets/img/rend.png"
    import bgBlue from "../assets/img/bg-blue.jpg"
    import bgRed from "../assets/img/bg-red.jpg"

    export default {
        name: 'background-vue',

        data() {
            return {
                transitionBg: true,
                img: null,
                mask: null,
                canvasTransition: null,
                imgTransition: null,
                maskTransition: null,
                iTransition: 0,
                i: 0,
            }
        },
        methods: {},
        mounted() {

            console.log(this.$router.name);

            this.$root.$on('bg', (data) => {
                console.log("Salut");
                this.transitionBg = !this.transitionBg;
                setTimeout(() => {
                    document.querySelector(".add-class").classList.add('start-animation')
                }, 100)
            })

            // this.initCanvas();
            // this.canvasImg(bgBlue);
            // this.draw()

        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .background-vue {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
    }

    #canvasTransition {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1000;
    }

    .CSScanvas {
        position: relative;
        width: 800px;
        height: 600px;
    }

    .img {
        width: 800px;
        height: 600px;
        position: absolute;
        top: 0;
        left: 0;
    }

</style>
