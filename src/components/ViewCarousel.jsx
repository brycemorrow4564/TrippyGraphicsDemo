import React, { useEffect, useState, useRef } from 'react'; 
import ReactDOM from "react-dom"; 
import useDimensions from "react-use-dimensions";
import useEventListener from "@use-it/event-listener";
import { Carousel, Row, Col, Divider, PageHeader, Tabs } from "antd"; 

const { TabPane } = Tabs; 

function ViewCarousel(props) {

    // const [width, setWidth] = useState(window.innerWidth); // current width of page 
    const videoContainerRef = useRef(null); 
    const basicTextStyle = { fontSize: 18 }; 

    // width is synchronized to width of window 
    useEventListener('resize', () => {
        // setWidth(window.innerWidth); 
    }); 

    // store reference to video node on application load 
    useEffect(() => {  
        if (videoContainerRef.current) {
            videoContainerRef.current.appendChild(document.getElementById('animation-clip')); 
        } 
    }, [videoContainerRef]); 

    const createDescriptions = (keyPrefix, paragraphs) => {
        let wrap = (content) => <Row type="flex" justify="center" align="middle">
                                    <Col>
                                        {content}
                                    </Col>
                                </Row>;
        let contents = []; 
        for (let i = 0; i < paragraphs.length; i++) {
            contents.push(
                <Row style={ i === 0 ? { marginTop: "1em" } : {} } key={keyPrefix + `${i}`}>
                    <Col>
                        <p style={basicTextStyle}>{paragraphs[i]}</p>
                    </Col>
                </Row>
            ); 
        }
        return wrap(contents); 
    }

    const header = {
        title: 'Trippy Graphics', 
        subtitle:  `An animation engine based on interpolation between 
                    user-defined states of a generative geometric system`, 
    }; 
    const tabs = {
        style: {
            borderBottom: '1px solid rgb(235, 237, 240)',
        }
    }
    const animations = {
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
            experimenting with the order of states in the chain, and tweaking animation parameters, 
            users can produce a wide variety of interesting visual effects. 
            `
        ]),
        video: (
            <Row type="flex" justify="space-around" align="middle">
                <Col span={18}>
                    <div 
                    ref={videoContainerRef}
                    style={{ height: 720, pointerEvents: 'none' }} />
                </Col>
            </Row>
        )
    };

    const staticConfigs = {
        description: createDescriptions('static', [
            `
            The static configuration view can be used to tweak parameters of the geometric
            system in order to find interesting candidate configurations for use in animations.
            `, 
            `
            Parameters include continuous numeric values, boolean values, and a color palette. 
            `
        ])
    }; 

    return (

        <PageHeader
        title={header.title}
        subTitle={header.subtitle}
        backIcon={false}
        footer={
            <Tabs 
            tabBarStyle={tabs.style}
            defaultActiveKey="1">
                <TabPane tab="Animations" key="1" >
                    {animations.description}
                    {animations.video}
                </TabPane>
                <TabPane tab="Static Configurations" key="2" >
                    {staticConfigs.description}
                </TabPane>
                <TabPane tab="Layout" key="3" >

                </TabPane>
            </Tabs>
        }
        ></PageHeader>

    ); 

}; 

export default ViewCarousel; 