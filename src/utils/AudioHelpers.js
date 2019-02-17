import { TweenMax } from 'gsap';
import { Audios } from "@/assets/datas/Medias";

let AudiosContextPlaying = {};

export class AudioHelper {

    static get list () {
        return Audios;
    }

    static getAudioContext (src) {
        return AudiosContextPlaying[src];
    }

    static play (src, options) {
        this.evalTimeout(options, this.startPlay.bind(this, src, options));
    }

    static startPlay (src, options) {
        console.log('start ' + src);
        let AudioContext = new Audio(src);
        this.fromToVolume(AudioContext, options.volume.from, options.volume.to, options.volume.duration);
        AudioContext.play();
        AudiosContextPlaying[src] = AudioContext;
        if (typeof options.onStart !== "undefined") this.eval(AudioContext, false, options.onStart);
        if (typeof options.onFinish !== "undefined") this.eval(AudioContext, 'ended', options.onFinish);
        this.eval(AudioContext, 'ended', this.removeAudioContext.bind(this, src));
    }

    static removeAudioContext (src) {
        delete AudiosContextPlaying[src];
    }

    static stop (src, options) {
        this.evalTimeout(options, (function () {
            if (typeof this.getAudioContext(src) !== "undefined") {
                if (typeof options.onStop !== "undefined") this.eval(AudiosContextPlaying[src], false, options.onStop);
                AudiosContextPlaying[src].pause();
                this.removeAudioContext(src);
            }
        }).bind(this));
    }

    static fromToVolume (AudioContext, from, to, duration) {
        this.setVolume(AudioContext, from);
        this.goToVolume(AudioContext, duration, to);
    }

    static setVolume (AudioContext, volume) {
        TweenMax.set(AudioContext, { volume });
    }

    static goToVolume (AudioContext, duration, volume) {
        TweenMax.to(AudioContext, duration, { volume });
    }
    static evalTimeout (options, callback) {
        if (typeof options.timeout !== "undefined") setTimeout(callback, options.timeout);
        else callback();
    }

}
