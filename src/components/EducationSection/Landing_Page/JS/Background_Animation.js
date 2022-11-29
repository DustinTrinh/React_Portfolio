import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";
import "../CSS/styles.css";

export default function Background_Animation() {
    const particlesInit = useCallback(async (engine) => {
        await loadBubblesPreset(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    const options = {
        preset: "bubbles",
        background: {
            color: "#000000",
        },
        fullScreen: {
            enable: false
        },
        particles: {
            number: {
                value: 500,
            },
            color: {
                value: "random",
            },
        },
        move: {
            speed: 30,
            random: true,
            straight: true,
        },
        size: {
            value: { min: 200, max: 1000 },
        },
        emitters: [
            {
                life: {
                    duration: 1,
                    delay: 0,
                    count: 0,
                },
            },
        ]

      };
    return (
        <Particles
            id="tsparticles_EducationPage"
            init={particlesInit}
            options={options}
        />
    );
}
