<template>
    <div class="choose-landscape">
        <div class="bloc-landscape">
            <div class="bloc-landscape--item" v-for="(city, index) in citys" @click="AnLandScapeHasChoosen(index)">
                <span class="bloc-landscape--item-square">
                    {{city.id}}
                    <!--{{ city.img }}-->
                </span>
                <p class="bloc-landscape--item-text">
                    {{ city.name }}
                </p>
            </div>
            <transition name="fade" mode="out-in">
                <div class="test" v-show="show">
                    <lanscdapechoosen v-if="cityChoosen" v-bind:landscape="cityChoosen"></lanscdapechoosen>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>


    import Events from "../../static/datas/eventsOfCourse";
    import Test from '@/components/chooseAnLandscape'

    export default {
        name: 'understand-introduction-view',

        components: {
            'lanscdapechoosen': Test,
        },
        data() {
            return {
                show: false,
                cityChoosen: null,
                citys: [
                    {
                        name: "Grésivaudan",
                        img: 'https://via.placeholder.com/220'
                    },
                    {
                        name: "Oisans",
                        img: 'https://via.placeholder.com/220'
                    },
                    {
                        name: "Vercors",
                        img: 'https://via.placeholder.com/220'
                    },
                    {
                        name: "Portes des Alpes",
                        img: 'https://via.placeholder.com/220'
                    },
                ]
            }
        },
        sockets: {
            chooseLandscape: function (data) {
                this.AnLandScapeHasChoosen(data)
            },
            closeLandscape: function (data) {
                this.cityChoosen = null;
                this.show = !this.show
            }
        },

        methods: {
            AnLandScapeHasChoosen(id) {
                this.show = !this.show
                this.cityChoosen = this.citys[id];
            }
        },

        mounted() {


        }

    };
</script>


<style lang="scss">
    .bloc-landscape {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        height: 100vh;
        max-height: 500px;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        max-width: 800px;
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        padding: 20px;
        box-sizing: border-box;
    }

    .bloc-landscape--item {
        width: 40%;
        height: 120px;

        &-square {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            background: grey;
            margin-bottom: 10px;

        }
        &-text {
            display: block;
            margin: 0 auto;

        }
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
