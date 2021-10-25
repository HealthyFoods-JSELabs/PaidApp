import React from 'react';
import { bool, func, string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../img/home.svg'
import './CSS.css'

// import {faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const styles = StyleSheet.create({
    activeBar: {
        height: 56,
        width: 3,
        backgroundColor: '#ffffff',
        position: 'absolute',
        left: 0
    },
    activeContainer: {
        // backgroundColor: 'rgb(255,255,255)',
        background: "linear-gradient(to left, #46A26F, #000000)",
        borderBottomRightRadius:25,

    },
    activeTitle: {
        color: 'rgba(255,255,255,0.69)'
    },
    container: {
        height: 56,
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'rgba(221,226,255, 0.08)'
        },
        paddingLeft: 32,
        paddingRight: 32
    },
    title: {
        fontFamily: '',
        fontSize: 14,
        fontWeight:'bold',
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: "rgb(0,0,0)",
        marginLeft: 24
    },
    home__icon:{
        fill: "#FFFFF",
        color: "rgb(0,0,0)",
},
    logo :{
        stroke: "#ffffff",
        fill: "#3eff8e",
        width:200
}

});
const MenuIcon = (props) =>(
    <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} ></svg>
)

function MenuItemComponent(props) {
    const { content, active, icon, title, ...otherProps } = props;
    const Icon = icon;
    return (
        <Link to={content}>
       {/*<a href={content}> */}
           <Row className={css(styles.container, active && styles.activeContainer)} vertical="center" {...otherProps}>
            {active && <div className={css(styles.activeBar)}></div>}

           {/*<img*/}

           {/*    style={{marginLeft:"-15px",marginRight:"10px",backgroundColor:"#0FDD00"}}*/}
           {/*    alt="..."*/}
           {/*    // src={(Icon)}*/}
           {/*    src="img/home.svg"*/}
           {/*    width="20px"*/}
           {/*    height="20px"*/}
           {/*/>*/}
           {/*     <img src={icon} className={("logo", active && "activelogo") } />*/}
               {/*<Logo className={("logo", active && "activelogo") }/>*/}
               <div className="icon-shape" style={{backgroundColor:"#ffffff",borderRadius:20,width:40, height:40}}>
               <img src={icon}  className={(styles.logo) } style={{width:28, height:28}} />
               </div>
               {/*<MenuIcon fill="red"/>*/}

            <span className={css(styles.title, active && styles.activeTitle)}>{title}</span>
            {/*   <a href="https://icons8.com/icon/14096/home" className={css(styles.title, active && styles.activeTitle)}>{title}</a>*/}
        </Row>
        {/*</a>*/}
        </Link>
    );
}

MenuItemComponent.propTypes = {
    active: bool,
    icon: func,
    title: string
};

export default MenuItemComponent;
