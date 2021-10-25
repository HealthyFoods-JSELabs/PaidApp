import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import PPLogoComponent from './PPLogoComponent';
import ProfileComponent from './ProfileComponent';
import MenuItemComponent from './MenuItemComponent';
import IconBurger from '../../assets/icon-burger';
import './CSS.css';
import { Sidenav, Dropdown,Nav,Icon } from 'rsuite';

const styles = StyleSheet.create({
    burgerIcon: {
        cursor: 'pointer',
        position: 'absolute',
        left: 24,
        top: 34
    },
    container: {
        width: 255,
        height:'100%',
        paddingTop: 32,
        // height: 'calc(100% - 32px)',
        backgroundColor: '#ffffff',
        borderWidth:'0px',
        // boxShadow:'5px',
        borderStyle:'solid',
        borderColor:'rgba(0,64,255,0.69)'
    },
    containerMobile: {
        transition: 'left 0.5s, right 0.5s',
        position: 'absolute',
        width: 255,
        height: 'calc(100% - 32px)',
        zIndex: 901
    },
    mainContainer: {
        backgroundColor: '#ffffff',
        height: '100%',
        minHeight: '100vh'
    },
    mainContainerMobile: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        top: 0,
        left: 0
    },
    menuItemList: {
        marginTop: 52
    },
    outsideLayer: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.50)',
        zIndex: 900
    },
    separator: {
        borderTop: '2px solid #000000',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    },
    hide: {
        left: -255
    },
    show: {
        left: 0
    }
});

class SidebarComponent extends React.Component {

    state = { expanded: false };

    onItemClicked = (item) => {
        this.setState({ expanded: false });
        return this.props.onChange(item);
    }

    isMobile = () => window.innerWidth <= 768;

    toggleMenu = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

    renderBurger = () => {
        return <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
            <IconBurger />
        </div>
    }

    render() {
        const { expanded } = this.state;
        const isMobile = this.isMobile();
        return (
            <div className="shadow" style={{ position: 'relative' }}>
                <Row className={css(styles.mainContainer)} breakpoints={{ 768: css(styles.mainContainerMobile) }}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <Column className={css(styles.container)} breakpoints={{ 768: css(styles.containerMobile, expanded ? styles.show : styles.hide) }}>
                        <PPLogoComponent />
                        {/*<div style={{ paddingBottom:"-80px" }} className={css(styles.separator)}></div>*/}
                        <ProfileComponent/>
                        {/*<div className={css(styles.separator)}></div>*/}

                        <Column className={css(styles.menuItemList)}>

                            <div style={{ width: "100%",backgroundColor: '#ffffff', }}>
                                <Sidenav>
                                    <Sidenav.Body style={{backgroundColor: '#ffffff', }}>

                                        <MenuItemComponent
                                            content={'/dashboard'}
                                            title="DISCOVER" icon={'../img/home.svg'}
                                            onClick={() => this.onItemClicked('Dashboard')}
                                            active={this.props.selectedItem === 'Dashboard'} />
                                        <MenuItemComponent
                                            content={'/customers'}
                                            title="CUSTOMERS" icon={'../img/customers.png'}
                                            onClick={() => this.onItemClicked('Customer List')}
                                            active={this.props.selectedItem === 'Customer List'} />
                                        <MenuItemComponent
                                            content={'/analisis'}
                                            title="ANALYSIS" icon={'../img/analysis.png'}
                                            onClick={() => this.onItemClicked('Angeing Analysis')}
                                            active={this.props.selectedItem === 'Angeing Analysis'} />
                                        {/*<div className={css(styles.separator)}></div>*/}
                                        {/*<MenuItemComponent*/}
                                        {/*    content={'/'}*/}
                                        {/*    title="Logout" icon={'img/Sidebar/logout.png'}*/}
                                        {/*    onClick={() => this.onItemClicked('Logout')}*/}
                                        {/*    active={this.props.selectedItem === 'Logout'} />*/}
                                        <Dropdown menuStyle={{color: 'rgba(0,64,255,0.69)',}} title="SETTINGS" icon={<Icon icon="setting" />} >
                                            <MenuItemComponent
                                                content={'/aboutyou'}
                                                title="About You" icon={'../img/about.png'}
                                                onClick={() => this.onItemClicked('About You')}
                                                active={this.props.selectedItem === 'About You'}
                                            />
                                            <MenuItemComponent
                                                content={'/subscribeaproduct'}
                                                title="Subscribe a Product" icon={'../img/pound.png'}
                                                onClick={() => this.onItemClicked('Subscribe a Product')}
                                                active={this.props.selectedItem === 'Subscribe a Product'} />
                                            <MenuItemComponent
                                                content={'/connectwithstrip'}
                                                title="Connect with strip" icon={'../img/connect.png'}
                                                onClick={() => this.onItemClicked('Connect with strip')}
                                                active={this.props.selectedItem === 'Connect with strip'} />
                                            <MenuItemComponent
                                                content={'/pickaworkflow'}
                                                title="Pick a worckflow" icon={'../img/pick.png'}
                                                onClick={() => this.onItemClicked('Pick a worckflow')}
                                                active={this.props.selectedItem === 'Pick a worckflow'} />
                                            <MenuItemComponent
                                                content={'/passwordchange'}
                                                title="Change Password" icon={'../img/passwordchange.png'}
                                                onClick={() => this.onItemClicked('Change Password')}
                                                active={this.props.selectedItem === 'Change Password'} />
                                            <MenuItemComponent
                                                content={'/'}
                                                title="Logout" icon={'../img/logout.png'}
                                                onClick={() => this.onItemClicked('Logout')}
                                                active={this.props.selectedItem === 'Logout'} />
                                        </Dropdown>
                                    </Sidenav.Body>
                                </Sidenav>
                            </div>
                        </Column>
                    </Column>
                    {isMobile && expanded && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
                </Row>
            </div>
        );
    };
}

export default SidebarComponent;
