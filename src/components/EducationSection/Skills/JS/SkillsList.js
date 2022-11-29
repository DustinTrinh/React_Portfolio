import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";


import * as FontAwesome from "react-icons/fa";
import * as Ionicons from "react-icons/io5";
import * as SimpleIcons from "react-icons/si";
import * as DevIcons from "react-icons/di";
import classes from "../CSS/SkillList.module.css";


export default function SkillsList(props) {
    let avatarClass = "";
    
    if(props.category === "FE"){
        avatarClass = "background: linear-gradient(90deg, hsla(211, 96%, 62%, 1) 0%, hsla(295, 94%, 76%, 1) 100%)";
    }
    else if(props.category === "BE"){
        avatarClass = "background: linear-gradient(90deg, hsla(211, 66%, 87%, 1) 0%, hsla(348, 67%, 88%, 1) 50%, hsla(272, 26%, 72%, 1) 100%)";
    }
    else if(props.category === "OT"){
        avatarClass = "background: linear-gradient(90deg, hsla(42, 93%, 57%, 1) 0%, hsla(358, 78%, 62%, 1) 100%)";
    }

    const Icon = (props) => {
        const { iconName, iconCat } = props;

        let tempIconHolder = FontAwesome[iconName];

        if (iconCat === "fa") {
            tempIconHolder = FontAwesome[iconName];
        } 
        else if (iconCat === "io5") {
            tempIconHolder = Ionicons[iconName];
        } 
        else if (iconCat === "si") {
            tempIconHolder = SimpleIcons[iconName];
        }
        else if(iconCat === "di"){
            tempIconHolder = DevIcons[iconName];
        }
        else {
            tempIconHolder = FontAwesome["FaBeer"];
        }
        let icon = React.createElement(tempIconHolder);

        return <div className={`${classes.iconSizing}`}>{icon}</div>;
    };
    const skillsList = props.skills.map((skill, index) => (
        <ListItem  key={skill.id}>
            <ListItemAvatar>
                <Avatar sx={{backgroundColor: "#fff"}}>
                    <Icon iconName={skill.icon} iconCat={skill.iconCat} />
                </Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.skillsName} primary={skill.name} />
        </ListItem>
    ));

    return (
        <Fragment>
        <List
            sx={avatarClass}
            className={classes.skillSection}
        >
            <h3>{props.title}</h3>
            {skillsList}
        </List>
        </Fragment>
    );
}
