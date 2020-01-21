import React, { useEffect, useState, useRef } from 'react'; 
import { Row, Col, PageHeader, Tabs, Button, Divider } from "antd"; 
import DynamicSizingVideo from "./DynamicSizingVideo"; 

const { TabPane } = Tabs; 

function AppContent(props) {

    const basicTextStyle = { fontSize: 18 };
    

    const createDescriptions = (keyPrefix, paragraphs) => {
        let wrap = (content) => <Row type="flex" justify="center" align="middle">
                                    <Col span={16}>
                                        {content}
                                    </Col>
                                </Row>;
        let contents = []; 
        for (let i = 0; i < paragraphs.length; i++) {
            contents.push(
                <Row 
                style={ i === 0 ? { marginTop: "1em" } : {} } 
                key={keyPrefix + `${i}`}>
                    <Col>
                        <p style={basicTextStyle}>{paragraphs[i]}</p>
                    </Col>
                </Row>
            ); 
        }
        return wrap(contents); 
    }; 

    const wrapWithCenteringRow = (content) => (
        <Row type="flex" justify="space-around" align="middle">
            <Col>
                {content}
            </Col>
        </Row>
    ); 

    const header = {
        title: (
            <Row type="flex" justify="space-around" align="middle">
                <Col>
                    <p style={{ display: 'inline-block', margin: '0 .8em 0 0' }}>Trippy Graphics Experiments</p>
                </Col>
                <span style={{ 
                    color: '#1890ff', 
                    height: 'auto', 
                    margin: 0, 
                    fontVariant: 'tabular-nums', 
                    background: '#e6f7ff',
                    border: '1px solid #91d5ff',
                    borderRadius: 4, 
                    padding: '0 8px', 
                    lineHeight: '24px', 
                    boxSizing: 'border-box', 
                    whiteSpace: 'nowrap',
                    listStyle: 'none', 
                    fontSize: '14px', 
                    cursor: 'default'
                }}>
                    beta
                </span>
            </Row>
        ), 
        subtitle:  `An animation engine based on interpolation between 
                    user-defined states of a generative geometric system`, 
    }; 
    const tabs = {
        style: {
            borderBottom: '1px solid rgb(235, 237, 240)',
        }
    }; 
    const animationsTab = {
        description: createDescriptions('animations', [
            `
            The animation view of the application offers an interface for creating a sequential chain 
            of interpolations between different static configurations of the geometric system.
            `, 
            `
            Each animation can be programmed with a specific duration, easing function, and delay.
            `, 
            `
            By coming up with a wide variety of unique static configurations, 
            experimenting with the order of static configurations in the chain, 
            and tweaking animation parameters, 
            users can produce a wide variety of interesting visual effects. 
            `
        ]),
        video: wrapWithCenteringRow(<DynamicSizingVideo id="animation-clip" widthFraction={.65} />)
    };
    const staticConfigsTab = {
        description: createDescriptions('static', [
            `
            The static configuration view can be used to tweak parameters of the geometric
            system in order to find interesting candidate configurations for use in animations.
            `, 
            `
            Parameters include continuous numeric values, boolean values, and a color palette. 
            `
        ]), 
        video: wrapWithCenteringRow(<DynamicSizingVideo id="static-clip" widthFraction={.65} />)
    }; 
    const layoutTab = {
        description: createDescriptions('layout', [
            `
            Users can manipulate the view layout to maximize screen space while experimenting 
            with different static configurations and animations. 
            `
        ]), 
        video: wrapWithCenteringRow(<DynamicSizingVideo id="layout-clip" widthFraction={.65} />)
    }; 

    return <React.Fragment>

        <PageHeader
        title={header.title}
        subTitle={header.subtitle}
        backIcon={false}
        extra={<Button icon="github" href="https://github.com/brycemorrow4564/TrippyGraphics" target="_blank">Code</Button>}
        />
        <Row type="flex" justify="center">
            <Col span={23}>
                <Tabs
                tabBarStyle={{}}
                type="card"
                defaultActiveKey="1"
                >
                    <TabPane
                    tab="Interface"
                    key="1">
                        <div style={{ padding: 20, background: '#dedede', sizing: 'content-box' }}>
                            <div className="card-container">
                                <Tabs 
                                tabBarStyle={tabs.style}
                                defaultActiveKey="1">
                                    <TabPane tab="Animations" key="1" >
                                        <div style={{ marginBottom: '1em' }}>
                                            {animationsTab.description}
                                            {animationsTab.video}
                                        </div>     
                                    </TabPane>
                                    <TabPane tab="Static Configurations" key="2" >
                                        <div style={{ marginBottom: '1em' }}>
                                            {staticConfigsTab.description}
                                            {staticConfigsTab.video}
                                        </div> 
                                    </TabPane>
                                    <TabPane tab="Layout" key="3" >
                                        <div style={{ marginBottom: '1em' }}>
                                            {layoutTab.description}
                                            {layoutTab.video}
                                        </div> 
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                        
                    </TabPane>
                    <TabPane
                    tab="About"
                    key="2">

                        <p style={Object.assign({ marginTop: '1em' }, basicTextStyle)}>
                            This application was developed by 
                            <a href="https://www.linkedin.com/in/bryce-morrow-181829128/" target="_blank"> Bryce Morrow</a>
                        </p>

                        <p> The inspiration for this project came when I started attending electronic music concerts.
                            I've always 
                            
                            
                            </p>



                    </TabPane>
                </Tabs>
            </Col>
        </Row>
        <div style={{ height: 24, backgroundColor: "#fff" }}></div>
        

        </React.Fragment>; 

}; 

export default AppContent; 