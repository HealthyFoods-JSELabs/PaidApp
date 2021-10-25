import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from '../sidebar/SidebarComponent';
import HeaderComponent from '../header/HeaderComponent';
import AnalisisContent from "../AnalisisContent/AnalisisContent.js";
import Barchart from "../Barchart/Barchart.js";
import NewBarChart from "../Barchart/NewBarChart.js";


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

class AnalisisComponent extends React.Component {

    state = { selectedItem: 'Angeing Analysis' };

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
                        <NewBarChart/>
                    </div>
                </Column>
            </Row>
        );
    }
}

export default AnalisisComponent;