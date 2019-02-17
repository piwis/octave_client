<template>
    <div id="app">
        <main>
            <transition name="fade"
                        mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
        <Background/>
    </div>
</template>

<script>
    import courseData from "./assets/datas/courseData";
    import Background from '@/components/Background'

    export default {
        name: 'app',
        components: {
            'Background': Background,
        },
        data() {
            return {
                transitionBg: true,
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    @import './assets/scss/utils/variables';

    body, main, #app {
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    .start-animation {
        .transition-red, .transition-blue {
            -webkit-mask: url("./assets/img/rend.png");
            mask: url("./assets/img/rend.png");
            -webkit-mask-size: 2300% 100%;
            mask-size: 2300% 100%;
            -webkit-animation: mask-play 1.4s steps(22) forwards;
            animation: mask-play 1.4s steps(22) forwards;

        }
    }

    .bg-transition {
        z-index: 1;
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        &.blue {
            background-image: url("../src/assets/img/bg-blue.jpg");
        }
        &.red {
            background-image: url("../src/assets/img/bg-red.jpg");
        }
        @keyframes mask-play {
            from {
                -webkit-mask-position: 0% 0;
                mask-position: 0% 0;
            }
            to {
                -webkit-mask-position: 100% 0;
                mask-position: 100% 0;
            }
        }
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }

    main {
        position: relative;
        z-index: 100;
        text-align: center;
        width: 100%;
        height: 100vh;
    }

    main > div {
        height: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-flow: column;
    }

    header {
        margin: 0;
        height: 56px;
        padding: 0 16px 0 24px;
        background-color: #35495E;
        color: #ffffff;
    }

    header span {
        display: block;
        position: relative;
        font-size: 20px;
        line-height: 1;
        letter-spacing: .02em;
        font-weight: 400;
        box-sizing: border-box;
        padding-top: 16px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

    .light {
        @include f-muli-light;
    }

    .extra-light {
        @include f-muli-extra-light;
    }

    .bold {
        @include f-muli-bold;
    }
</style>
