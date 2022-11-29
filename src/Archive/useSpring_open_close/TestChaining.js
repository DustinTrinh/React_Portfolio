import React, { useState, useRef, Fragment } from "react";
import { render } from "react-dom";
import {
    useTransition,
    useSpring,
    useSpringRef,
    useChain,
    config,
} from "react-spring";
import { Global, Container, Item } from "./ChainingStyles";
import data from "../Data/Data";
import * as FontAwesome from "react-icons/fa";

export default function TestChaining() {
    const [open, set] = useState(false);

    const springApi = useSpringRef();

    const Icon = (props) => {
        const { iconName, size, color } = props;
        const icon = React.createElement(FontAwesome[iconName]);
        return <div style={{ fontSize: size, color: color }}>{icon}</div>;
    };

    const { size, ...rest } = useSpring({
        ref: springApi,
        config: config.stiff,
        from: { size: "20%", background: "hotpink" },
        to: {
            size: open ? "100%" : "20%",
            background: open ? "white" : "hotpink",
        },
    });

    // notice we're using useSpringRef, not React's useRef
    const transApi = useSpringRef();
    const transition = useTransition(open ? data : [], {
        ref: transApi,
        trail: 400 / data.length,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    });

    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain(open ? [springApi, transApi] : [transApi, springApi], [
        0,
        open ? 0.1 : 0.6,
    ]);

    return (
        <Fragment>
            <h3>Search Bar I guess 1</h3>
            <Container
                style={{
                    ...rest,
                    width: "100%",
                    height: size,
                    textAlign: "center"
                }}
                onClick={() => set((open) => !open)}
            > 
                <Item style={{ background: "hotpink" }}></Item>
                <Item style={{ background: "hotpink" }}></Item>
                {open ? <h4>It is open</h4> : <h4>It is closed</h4>}
                {transition((style, item) => (
                    <Item style={{ ...style, background: item.css }}>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <Icon iconName={item.icon} size={12} color="orange" />
                    </Item>
                ))}
            </Container>
        </Fragment>
    );
}
