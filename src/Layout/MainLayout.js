import styled from 'styled-components';
import { useState,useEffect } from 'react';

import Header from './Header';
import Content from './Content';

const View = styled.div`
    display:flex; flex-direction: column;
`

const useResize = () => {

    const [state, setState] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        device: 'web'
    });

    const scrolling = () => {

        let nowDevice = 'mobile'
        if (window.innerWidth <= 320) {
            nowDevice = 'mobile'
        } else if (window.innerWidth < 768) {
            nowDevice = 'tablet'
        } else {
            nowDevice = 'web'
        }

        console.log("width : ", window.innerWidth, " height : ", window.innerHeight," device : ",nowDevice);

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

function MainLayout() {

    const device = useResize()

  return (
    <View>
        <Header></Header>
        <Content></Content>
        {device}
    </View>
  );
}

export default MainLayout;
