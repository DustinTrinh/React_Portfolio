import React from "react";
import classes from "../CSS/SectionCard.module.css";
import { useSpring, animated } from "react-spring";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { FaCog, FaBook, FaBuilding, FaSpinner } from "react-icons/fa";

import test from "../../../assets/images/astronomy.jpg";

const SectionCard = (prop) => {
    let iconGenerator = null;
    const ele = prop.element.id;   
    if(ele === 1){
        iconGenerator = (<FaCog icon="spinner" className={`${classes.spinner} ${classes.iconSpec} `}  />);
    }
    else if(ele === 2){
        iconGenerator = (<FaBook icon="spinner" className={`${classes.spinner} ${classes.iconSpec} `}  />);
    }
    else if(ele === 3){
        iconGenerator = ( <FaBuilding icon="spinner" className={`${classes.spinner} ${classes.iconSpec} `}  />);
    }
    const [props, set] = useSpring(() => ({
        transform: `scale(1)`,
        boxShadow: `0px 5px 15px 0px rgba(0, 0, 0, 0.30)`,
        from: {
            transform: `scale(0.5)`,
            boxShadow: `0px 0px 0px 0px rgba(0, 0, 0, 0.30)`,
        },
    }));
    const updateHover = (hovering) => ({
        transform: `scale(${hovering ? 1.1 : 1})`,
        boxShadow: `0px ${
            hovering ? "10px 20px" : "5px 15px"
        } 0px rgba(0, 0, 0, 0.30)`,
    });

    return (
        <animated.div
            className={classes.cardWrapper}
            style={props}
            onMouseEnter={() => set(updateHover(true))}
            onMouseLeave={() => set(updateHover(false))}
        >
            <Card sx={{ maxWidth: 345, backgroundImage: `url(${test})` }}>
                
                {iconGenerator}
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                        {prop.element.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                </CardActions>
            </Card>
        </animated.div>
    );
}

export default SectionCard;
