import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

import "../CSS/styles.css";

export default function BackgroundAnimation() {
    const particlesInit = useCallback(async (engine) => {
        await loadFireworksPreset(engine);
    }, []);
    
    const options = {
        preset: "fireworks",
        fullScreen: {
            enable: false,
            zIndex: 0,
        },
        life: {
            count: 1,
        },
        background: {
            color: "#000000",
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 2 },
            animation: {
                enable: false,
                speed: 1,
                count: 1
            },
        },
        move: {
            speed: {
                min: 1,
                max: 2,
            },
        },
        emitters: {
            life: {
                count: 0,
                duration: 0.1,
                delay: 1,
            },
            rate: {
                delay: 0.175,
                quantity: 2,
            },
            position: {
                y: 100,
                x: 50,
            }
        }
      };
    return (
        <Particles
            id="tsparticles_ProjectPage"
            init={particlesInit}
            options={options}
        />
    );
}
