import React, { useEffect, useState } from 'react'; 
import useDimensions from "react-use-dimensions";
import useEventListener from "@use-it/event-listener";
import { Carousel, Row, Col, Divider, PageHeader, Tabs } from "antd"; 
import ReactPlayer from "react-player"; 

const { TabPane } = Tabs; 

function ViewCarousel(props) {

    const [height, setHeight] = useState(window.innerHeight); 
    const panelStyle = { background: '#364d79', height, width: '100%' }; 
    const basicTextStyle = { fontSize: 18 }; 

    const createDescriptions = (paragraphs) => {
        let wrap = (content) => <Row type="flex" justify="center" align="middle">
                                    <Col span={16}>
                                        {content}
                                    </Col>
                                </Row>;
        let contents = []; 
        for (let i = 0; i < paragraphs.length; i++) {
            contents.push(
                <Row style={ i === 0 ? { marginTop: "1em" } : {} }>
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
    // const animations = {
    //     description: createDescriptions([
    //         `
    //         The animation view of the application offers an interface for creating a sequential chain 
    //         of interpolations between different static configurations of the geometric system.
    //         `, 
    //         `
    //         Each animation can be programmed with a specific duration, easing function, and delay.
    //         `, 
    //         `
    //         By coming up with a wide variety of unique static configurations, 
    //         experimenting with the order of states in the chain, and tweaking animation parameters, 
    //         users can produce a wide variety of interesting visual effects. 
    //         `
    //     ]),
    //     video: (
    //         null
    //     )
    // };

    // const staticConfigs = {
    //     description: createDescriptions([
    //         `
    //         The static configuration view can be used to tweak parameters of the geometric
    //         system in order to find interesting candidate configurations for use in animations.
    //         `, 
    //         `
    //         Parameters include continuous numeric values, boolean values, and a color palette. 
    //         `
    //     ])
    // }; 

    return (

        <ReactPlayer url="http://localhost:3000/static/media/demo-animation.6aa15a1d.mp4" playing />

        // <PageHeader
        // title={header.title}
        // subTitle={header.subtitle}
        // backIcon={false}
        // footer={
        //     <Tabs 
        //     tabBarStyle={tabs.style}
        //     defaultActiveKey="1">
        //         <TabPane tab="Animations" key="1" >
        //             {animations.description}
        //             {animations.video}
        //         </TabPane>
        //         <TabPane tab="Static Configurations" key="2" >
        //             {staticConfigs.description}
        //         </TabPane>
        //         <TabPane tab="Layout" key="3" >

        //         </TabPane>
        //     </Tabs>
        // }
        // ></PageHeader>

    ); 

}; 

export default ViewCarousel; 