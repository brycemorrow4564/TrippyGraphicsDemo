import React from 'react'; 
import { Row, Col, PageHeader, Tabs, Button } from "antd"; 
import DynamicSizingVideo from "./DynamicSizingVideo"; 

const { TabPane } = Tabs; 

function AppContent(props) {

    return <React.Fragment>

        {/* Page Header */}
        <PageHeader
        title={
            <Row type="flex" justify="space-around" align="middle">
                <Col>
                    <p className="page-title">Trippy Graphics Experiments</p>
                </Col>
            </Row>
        }
        subTitle={
            `An animation engine based on interpolation between 
             user-defined states of a generative geometric system`
        }
        backIcon={false}
        extra={
            <Button 
            icon="github" 
            href="https://github.com/brycemorrow4564/TrippyGraphics" 
            target="_blank"
            rel="noopener noreferrer">Code</Button>}
        />

        {/* Page Content */}
        <Row type="flex" justify="center">
            <Col span={23}>
                <Tabs
                type="card"
                defaultActiveKey="1"
                className="top-tabs">
                    <TabPane
                    tab="Interface"
                    key="1"
                    forceRender>
                        <div style={{  margin: 10 }}>
                            <div className="card-container">
                                <Tabs 
                                type="card"
                                defaultActiveKey="1">
                                    <TabPane tab="Animations" key="1" forceRender>
                                        <div style={{ marginBottom: '1em' }}>
                                            <Row type='flex' align="middle" style={{ paddingTop: 10 }}>
                                                <Col span={6} offset={2}>
                                                    <p className="description">
                                                    The animation view of the application offers an interface for creating a sequential chain 
                                                    of interpolations between different static configurations of the geometric system.
                                                    </p>
                                                    <p className="description">
                                                    Each animation can be programmed with a specific duration, easing function, and delay.
                                                    </p>
                                                    <p className="description">
                                                    By coming up with a wide variety of unique static configurations, 
                                                    experimenting with the order of static configurations in the chain, 
                                                    and tweaking animation parameters, 
                                                    users can produce a wide variety of interesting visual effects. 
                                                    </p>
                                                </Col>
                                                <Col offset={2}>
                                                    <DynamicSizingVideo id="animation-clip" widthFraction={.5} />
                                                </Col>
                                            </Row>
                                        </div>     
                                    </TabPane>
                                    <TabPane tab="Static Configurations" key="2" forceRender>
                                        <div style={{ marginBottom: '1em' }}>
                                            <Row type='flex' align="middle" style={{ paddingTop: 10 }}>
                                                <Col span={6} offset={2}>
                                                    <p className="description">
                                                    The static configuration view can be used to tweak parameters of the geometric
                                                    system in order to find interesting candidate configurations for use in animations.
                                                    </p>
                                                    <p className="description">
                                                    Parameter types include continuous numeric values, boolean values, and a color palette. 
                                                    </p>
                                                </Col>
                                                <Col offset={2}>
                                                    <DynamicSizingVideo id="static-clip" widthFraction={.5} />
                                                </Col>
                                            </Row>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Layout" key="3" forceRender>
                                        <div style={{ marginBottom: '1em' }}>
                                            <Row type='flex' align="middle" style={{ paddingTop: 10 }}>
                                                <Col span={6} offset={2}>
                                                    <p className="description">
                                                    Users can manipulate the view layout to maximize screen space while experimenting 
                                                    with different static configurations and animations. 
                                                    </p>
                                                </Col>
                                                <Col offset={2}>
                                                    <DynamicSizingVideo id="layout-clip" widthFraction={.5} />
                                                </Col>
                                            </Row>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane
                    tab="About"
                    key="2"
                    forceRender>
                        <div style={{ margin: 10}}>
                            <p className="description" style={{ marginTop: '1em' }}>
                                This application was developed by 
                                <a 
                                href="https://www.linkedin.com/in/bryce-morrow-181829128/" 
                                target="_blank" 
                                rel="noopener noreferrer"> Bryce Morrow</a>
                            </p>

                            <p className="description"> 
                                I was inspired to start this project when I attended my first electronic music festival.
                                For the first time, I saw how artists used custom graphics to create amazing audio-visual 
                                experiences of music. I knew then and there that it was something that I myself wanted to 
                                explore. 
                            </p>

                            <p className="description"> 
                                Having no prior background in 3D computer graphics, I started with a simple premise: 
                                What kind of graphics could I make using only rectangles? 
                                This project is the result of my exploration of that seemingly simple question.
                            </p>

                            <p className="description"> 
                                After I came up with a generative system that was pretty interesting, I decided that I  
                                wanted to make its functionality available to others to use for fun and for free. So 
                                I built a GUI to allow users to easily explore to possible space of visual effects that
                                this tool is capable of. 
                            </p>

                            <p className="description"> 
                                Though the tool has no built in audio component, I enjoy experimenting with the interface
                                while listening to music I enjoy. In the future, I might expand the functionality of the 
                                tool so that it can take audio as an input source and use this signal to drive animations. 
                            </p>

                            <p className="description"> 
                                I hope to have a fully functioning version of the tool online soon! 
                            </p>
                        </div>
                    </TabPane>
                </Tabs>
            </Col>
        </Row>

        <div className='bottom-spacing'/>
        

    </React.Fragment>; 

}; 

export default AppContent; 