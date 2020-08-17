import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import {useScrollTrigger, Zoom} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    }
}))

function ScrollToTop(props) {
    const {children} = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");
        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role={"presentation"} className={classes.root}>
                {children}
            </div>
        </Zoom>
    )
}

ScrollToTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func
}

const ScrollTop = (props) => {
    return (
        <ScrollToTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollToTop>
    );
};

export default ScrollTop;
