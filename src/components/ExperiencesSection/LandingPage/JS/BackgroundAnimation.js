import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadConfettiPreset } from "tsparticles-preset-confetti";

import "../CSS/styles.css";

export default function BackgroundAnimation() {
    const particlesInit = useCallback(async (engine) => {
        await loadConfettiPreset(engine);
    }, []);

    
    const options = {
        fullScreen: {
            enable: false,
            zIndex: 0,
        },
        preset: "confetti",
        background: {
            color: "#000000",
        },
        emitters: {
            life: {
                duration: 2,
                count: 0
            },
            rate: {
                quantity: 10,
            }
        }

      };
    return (
        <Particles
            id="tsparticles_ExperiencesPage"
            init={particlesInit}
            options={options}
        />
    );
}
