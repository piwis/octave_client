<template>
    <div id="app">
        <main>
            <transition name="fade"
                        mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
    </div>
</template>

<script>
    import courseData from "./assets/datas/courseData";

    export default {
        name: 'app',
        mounted() {
        }
    }
</script>

<style>
    body {
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
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
        text-align: center;
        width: 100%;
        height: 100%;
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
</style>
