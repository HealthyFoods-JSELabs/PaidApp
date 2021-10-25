import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from '../sidebar/SidebarComponent';
import HeaderComponent from '../header/HeaderComponent';
import DashboardContent from "../DashboardContent/DashboardContent.js";
import NewDashboardContent from "../DashboardContent/NewDashboardContent.js";
import Dashboard1 from "../DashboardContent/Dashboard1.js";
import Dashboard2 from "../DashboardContent/Dashboard2.js";




const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#ffffff',
        borderWidth:'0px',
        borderStyle:'solid',
        borderColor:'rgba(0,64,255,0.69)'
    }
});

class DashboardComponent extends React.Component {

    state = { selectedItem: 'Dashboard' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                        <Dashboard1/>
                    </div>
                </Column>
            </Row>
        );
    }
}

export default DashboardComponent;