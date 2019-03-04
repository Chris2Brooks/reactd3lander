import React, { Component } from "react";
import styled from "styled-components";
import VideoBlock from "../widgets/VideoBlock";

//import Mock1 from '../images/Mock1.png'

const Wrapper = styled.div`
    max-width: 750px;
    margin: 0rem auto 0;
    padding: 0 1rem;
    height: 100%;
    text-align: center;
    img {
        height: 300px;
        display: block;
        margin: 0 auto;
    }
    @media (max-width: 940px) {
        h1 {
            font-size: 40px;
        }
    }
`;

const H1 = styled.h1`
    width: 100%;
    margin: 0rem auto 0;
    text-align: center;
`;

const WrapperGroup = styled.div``;

export default class Hero extends Component {
    render() {
        return (
            <React.Fragment>
                <H1>
                    Stop copy pasting D3 examples <br /> create data
                    visualizations of your own
                </H1>

                <Wrapper>
                    <WrapperGroup>
                        <h3>
                            Learn how to{" "}
                            <strong>build scalable dataviz components</strong>{" "}
                            your whole team can understand with React for Data
                            Visualization.
                        </h3>
                        <VideoBlock
                            video={
                                <iframe
                                    className="youtubevid"
                                    width="560"
                                    height="315"
                                    title="This is a unique title"
                                    src="https://www.youtube.com/embed/7HQzbq4s7MQ"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                />
                            }
                        />
                        {/*<img src={Mock1} alt='barchart'/>*/}
                    </WrapperGroup>
                </Wrapper>
            </React.Fragment>
        );
    }
}
