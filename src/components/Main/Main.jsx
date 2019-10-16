import React from 'react'
import s from './Main.module.css'
import Particles from 'react-particles-js';

const Main = () => {
    return (
        <div className={s.outer}>
            <Particles
                params={{
                    "particles": {
                        "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
                        "color": {"value": "#ffffff"},
                        "shape": {
                            "type": "circle",
                            "stroke": {"width": 0, "color": "#000000"},
                            "polygon": {"nb_sides": 3},
                            "image": {"src": "img/github.svg", "width": 100, "height": 100}
                        },
                        "opacity": {
                            "value": 0.0561194221302933,
                            "random": false,
                            "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 256.54592973848366,
                            "color": "#04B4AE",
                            "opacity": 0.12025590456491421,
                            "width": 1.603412060865523
                        },
                        "move": {
                            "enable": true,
                            "speed": 14.430708547789706,
                            "direction": "none",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {"enable": false, "rotateX": 3527.50653390415, "rotateY": 962.0472365193136}
                        }
                    },
                    "interactivity": {
                        "detect_on": "window",
                        "events": {
                            "onhover": {"enable": true, "mode": "repulse"},
                            "onclick": {"enable": true, "mode": "push"},
                            "resize": true
                        },
                        "modes": {
                            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                            "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                            "repulse": {"distance": 200, "duration": 0.4},
                            "push": {"particles_nb": 4},
                            "remove": {"particles_nb": 2}
                        }
                    },
                    "retina_detect": true
                }
                } />
    <div className={s.container}>
        <div className={s.wrapper}>
            <div className={s.aboutMe}>
                <p >Hello! <br/> I'm <span className={s.colorH}>H</span>anna, <br/>frontend developer.</p>
            </div>
            <div className={s.photo}></div>
        </div>
    </div>
</div>
)
};

export default Main