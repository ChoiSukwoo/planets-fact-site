import styled from 'styled-components';
import { useState, useEffect } from 'react';

import Header from './Header';
import Content from './Content';

import Planet from '../Resource/data.json'
import bgStar from '../Resource/background-stars.svg'

const View = styled.div`
    width: 100%; height: 100%;
    display:flex; flex-direction: column;
    background-color: #070724;  background-image: url(${props => props.bgSvg});
`

const useResize = () => {

    const [state, setState] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        device: 'web'
    });

    const scrolling = () => {

        let nowDevice = 'mobile'

        if (window.innerWidth <= 768) {
            nowDevice = 'mobile'
        } else if (window.innerWidth <= 1023) {
            nowDevice = 'tablet'
        } else {
            nowDevice = 'web'
        }

        console.log("width : ", window.innerWidth, " height : ", window.innerHeight, " device : ", nowDevice);

        setState({
            x: window.scrollX,
            y: window.scrollY,
            device: nowDevice
        });
    };

    useEffect(() => {
        window.addEventListener("resize", scrolling);
        scrolling()
        return () => {
            window.removeEventListener("resize", scrolling);
        };
    }, []);

    return state.device;
};

const useHeaderOpen = () => {

    const [state, setState] = useState('close');

    useEffect(() => {
    }, []);

    return {
        header: state,
        setheader: setState
    };

};

const usePlanet = () => {

    const planetInfo = Planet.map((value, key) => ({name:value.name, color:value.color}))

    const [state, setState] = useState(Planet[0]);

    const setPlanet = (name) =>{
        Planet.some(function(value){
            if(value.name == name){
                setState(value);
                console.log(value)
                return true
            }
        });
    }

    useEffect(() => { }, []);

    return {
        planetInfo:planetInfo,
        planet: state,
        setPlanet: setPlanet
    };
}



function MainLayout() {

    const device = useResize()
    const headerState = useHeaderOpen()
    const planet = usePlanet()

    return (
        <View bgSvg={bgStar}>
            <Header Device={device} HeaderState={headerState} PlanetInfo={planet.planetInfo} SetPlanet={planet.setPlanet}></Header>
            <Content></Content>
        </View>
    );
}

export default MainLayout;
