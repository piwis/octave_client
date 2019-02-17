import {Audios} from "./Medias";

export default {
    parcours: {
        audios: {
            1: {
                play: [
                    {
                        src: Audios.ENV.INTRODUCTION,
                        options: {
                            volume: {
                                from: 0,
                                to: 1,
                                duration: 5
                            }
                        }
                    },
                ],
            }
        }

    }

}
