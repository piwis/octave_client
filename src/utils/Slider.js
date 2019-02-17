
import {TweenMax} from 'gsap';
import lottie from 'lottie-web';

// import drag from "../assets/json/drag_2.json";
// import clique from "../assets/json/clique_2.json";
// import scroll from "../assets/json/scroll_2.json";
// import quitter from "../assets/json/quitter.json";
// let jsonLottie = [
//     drag,
//     clique,
//     scroll,
//     quitter
// ]

class Slide {
    constructor(el, settings) {
        this.DOM = {el: el};


        this.settings = {
            detailsEl: null,
            onHideDetails: () => {return false;}
        }
        Object.assign(this.settings, settings);


        this.DOM.titleWrap = this.DOM.el.querySelector('.slide-item-number');

        this.DOM.bodyMovin = this.DOM.el.querySelector('.lottie');

        // this.lottie = lottie.loadAnimation({
        //     container: this.DOM.bodyMovin,
        //     renderer: 'svg',
        //     autoplay: false,
        //     loop:true,
        //     animationData: jsonLottie[settings.pos]
        // })
        // Some config values.
        this.config = {
            animation: {
                duration: 1,
                ease: Expo.easeInOut
            }
        };
    }

    stopLottie() {
        //this.lottie.stop();

    }
    playLottie() {
        // this.lottie.play();
    }
    // Sets the current class.
    setCurrent(isCurrent = true) {
        this.DOM.el.classList[isCurrent ? 'add' : 'remove']('slide--current');
    }
    // Hide the slide.
    hide(direction) {
        return this.toggle('hide', direction);
    }
    // Show the slide.
    show(direction) {
        return this.toggle('show', direction);
    }
    // Show/Hide the slide.
    toggle(action, direction) {
        return new Promise((resolve, reject) => {

            let revealerOpts = {
                delay: action === 'hide' ? 0 : this.config.animation.duration / 2,
                ease: this.config.animation.ease,
            };

            TweenMax.to(this.DOM.el, this.config.animation.duration, {
                delay: revealerOpts.delay,
                ease: this.config.animation.ease,
                opacity: action === 'hide' ? 0 : 1,
                onComplete: () => {

                    if(action === "show") {
                        this.playLottie()

                    } else {
                        this.stopLottie()
                    }
                    resolve();
                }
            });

        });
    }
    // Show the details boxes.
}

// The navigation class. Controls the .boxnav animations (e.g. pagination animation).
class Navigation {
    constructor(el, settings) {
        this.DOM = {el: el};

        this.settings = {
            next: () => {return false;},
            prev: () => {return false;}
        }
        Object.assign(this.settings, settings);

        // Navigation controls (prev and next)
        this.DOM.prevCtrl = document.querySelector('.boxnav__item--prev');
        this.DOM.nextCtrl = document.querySelector('.boxnav__item--next');
        // The current and total pages elements.
        this.DOM.pagination = {
            current: this.DOM.el.querySelector('.boxnav__label--current'),
            total: this.DOM.el.querySelector('.boxnav__label--total')
        };
        this.initEvents();
    }
    // Updates the current page element value.
    // Animate the element up, update the value and finally animate it in from bottom up.
    setCurrent(val, direction) {
        //this.DOM.pagination.current.innerHTML = val;
        TweenMax.to(this.DOM.pagination.current, 0.4, {
            ease: 'Back.easeIn',
            y: direction === 'right' ? '-100%' : '100%',
            opacity: 0,
            onComplete: () => {
                this.DOM.pagination.current.innerHTML = val;
                TweenMax.to(this.DOM.pagination.current, 0.8, {
                    ease: 'Expo.easeOut',
                    startAt: {y: direction === 'right' ? '50%' : '-50%', opacity: 0},
                    y: '0%',
                    opacity: 1
                });
            }
        });
    }
    // Sets the total pages value.
    setTotal(val) {
        this.DOM.pagination.total.innerHTML = val;
    }
    // Initialize the events on the next/prev controls.
    initEvents() {
        this.DOM.prevCtrl.addEventListener('click', () => this.settings.prev());
        this.DOM.nextCtrl.addEventListener('click', () => this.settings.next());
    }
}

// The Slideshow class.
export default class Slideshow {
    constructor(el) {
        this.DOM = {el: el};
        // Initialize the navigation instance. When clicking the next or prev ctrl buttons, trigger the navigate function.
        this.navigation = new Navigation(document.querySelector('.boxnav'), {
            next: () => this.navigate('right'),
            prev: () => this.navigate('left')
        });

        // The slides.
        this.slides = [];
        // Initialize/Create the slides instances.
        Array.from(this.DOM.el.querySelectorAll('.slide')).forEach((slideEl,pos) => this.slides.push(new Slide(slideEl, {
            pos,
            // this slide's details element.
            //detailsEl: this.DOM.details[pos],
            // When clicking the close details ctrl button call the closeDetailsBoxes function.
            onHideDetails: () => {
                if ( this.isAnimating ) return;
                this.isAnimating = true;
                this.closeDetailsBoxes().then(() => this.isAnimating = false);
            }
        })));
        // The total number of slides.
        this.slidesTotal = this.slides.length;

        // Set the total number of slides in the navigation box.
        this.navigation.setTotal(this.slidesTotal);
        // At least 2 slides to continue...
        /*if ( this.slidesTotal < 2 ) {
            return false;
        }*/
        // Current slide position.
        this.current = 0;
        // Initialize the slideshow.
        this.init();
    }
    // Set the current slide and initialize some events.
    init() {
        this.slides[this.current].setCurrent();
        this.initEvents();
    }
    initEvents() {
        // Open the details boxes.
        //this.DOM.detailsCtrl.addEventListener('click', () => this.openDetailsBoxes());
    }
    openDetailsBoxes() {
        if ( this.isAnimating ) return;
        this.isAnimating = true;

        // Overlay
        //this.DOM.el.classList.add('slideshow--details');

        //this.DOM.detailsWrap.classList.add('details-wrap--open');
        //this.DOM.details[this.current].classList.add('details--current');
        //this.slides[this.current].showDetails().then(() => this.isAnimating = false);
    }
    closeDetailsBoxes() {
        return new Promise((resolve, reject) => {
            // Overlay.
            console.log("COUCOU",this.slides,this.current);
            resolve()
        });
    }
    // Navigate the slideshow.
    navigate(direction) {
        // If animating return.
        if ( this.isAnimating ) return;
        this.isAnimating = true;

        // The next/prev slide´s position.
        const nextSlidePos = direction === 'right' ?
            this.current < this.slidesTotal-1 ? this.current+1 : 0 :
            this.current > 0 ? this.current-1 : this.slidesTotal-1;

        // Close the details boxes (if open) and then hide the current slide and show the next/previous one.
        this.closeDetailsBoxes().then(() => {
            // Update the current page element.
            this.navigation.setCurrent(nextSlidePos+1, direction);

            Promise.all([this.slides[this.current].hide(direction), this.slides[nextSlidePos].show(direction)])
                .then(() => {
                    console.log("Dans la promse");
                    // Update current.
                    this.slides[this.current].setCurrent(false);
                    this.current = nextSlidePos;
                    this.slides[this.current].setCurrent();
                    this.isAnimating = false;
                });
        });
    }
}


