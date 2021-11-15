import styled from 'styled-components';
import { useEffect } from 'react';


import { ReactComponent as LineSvg } from '../Resource/icon-hamburger.svg';
import { ReactComponent as ArrowSvg } from '../Resource/icon-chevron.svg';

const ViewCover = styled.div`
  border-bottom : 1px solid #979797;
`

const Title = styled.div`
  font-size: 28px;  line-height:36px; font-family:'Antonio'; word-spacing: -1.05px;  font-weight: 500;
`


const W_View = styled.div`
  display:flex; justify-content: space-between; align-items: flex-end;
  height:85px;  padding: 0 40px 27px 32px;
`

const W_SelecterCover = styled.div`
  display: flex;  column-gap: 33px;
  height: 100%;
`

const W_Selecter = styled.h4`
  opacity: 75%;
  height: 100%;
  display: flex;  align-items: flex-end;
  &:hover{
    opacity: 100%;
    border-top: 4px solid ${props => props.color};
  }
`

function W_Header({ PlanetInfo }) {

  let PlanetSelecter = PlanetInfo.map((value, key) => <W_Selecter key={key} color={value.color} className="W_Selecter">{value.name.toUpperCase()}</W_Selecter>)

  return (
    <ViewCover className="ViewCover">
      <W_View className="W_View">
        <Title className="Title">THE PLANETS</Title>
        <W_SelecterCover className="W_SelecterCover">{PlanetSelecter}</W_SelecterCover>
      </W_View>
    </ViewCover>
  )
}


const T_View = styled.div`
    display:flex;  flex-direction: column;  align-items: center; justify-content: space-between;
    height: 159px;  padding: 32px 0 27px 0;
`
const T_SelecterCover = styled.div`
  display: flex;  column-gap: 33px;
`

const T_Selecter = styled.h4`
  opacity: 75%;
  height: 100%;
  display: flex;  align-items: flex-end;
`

function T_Header({ PlanetInfo }) {

  let PlanetSelecter = PlanetInfo.map((value, key) => <T_Selecter key={key} className="T_Selecter">{value.name.toUpperCase()}</T_Selecter>)

  return (
    <ViewCover className="ViewCover">
      <T_View className="T_View">
        <Title>THE PLANETS</Title>
        <T_SelecterCover className="T_SelecterCover">{PlanetSelecter}</T_SelecterCover>
      </T_View>
    </ViewCover>
  )
}


const M_View = styled.div`
    display:flex; flex-direction: column;
    height: 100%;
`

const M_ViewHeader = styled.div`
  display: flex;  justify-content: space-between; align-items: center;
  width: 100%;  height: 68px; padding: 16px 24px;
`


const M_SelecterCover = styled.div`
  height: 100%; width: 100%;
  display: flex;  flex-direction: column; justify-content: center;
`

const M_Selecter = styled.div`
  display: flex;  align-items: center;  justify-content: space-between;
  padding: 20px 24px;
`

const M_SelecterNm = styled.div`
  display: flex;  align-items: center;  column-gap: 24px;
  font-size: 15px;  font-weight: 700; line-height: 25px;  word-spacing: 1.36px;
`

const M_Circle = styled.div`
  width: 20px;  height: 20px; border-radius: 50%;
  background-color: ${props => props.color};
`

function M_Header({ HeaderState, PlanetInfo }) {

  useEffect(() => {
    HeaderState.setheader('open')

    return () => {
      HeaderState.setheader('close')
    }
  }, [])


  let PlanetSelecter = PlanetInfo.map((value, key) => <M_Selecter key={key} className="M_Selecter" onClick={() => HeaderState.setheader('close')}><M_SelecterNm className="M_SelecterNm"><M_Circle color={value.color}/> {value.name.toUpperCase()}</M_SelecterNm><ArrowSvg/></M_Selecter>)

  let changeHeaderState = HeaderState.header == "close" ? <LineSvg  fill="#fff" onClick={() => HeaderState.setheader('open')} /> : <LineSvg fill="#979797" />

  return (
    <M_View className="M_View">
      <ViewCover className="ViewCover">

        <M_ViewHeader className="M_ViewHeader">
          <Title className="Title">THE PLANETS</Title>
          {changeHeaderState}
        </M_ViewHeader>
      </ViewCover>

      <M_SelecterCover className="M_SelecterCover">
        {PlanetSelecter}
      </M_SelecterCover>
    </M_View>
  )
}


function Header({ Device, HeaderState, PlanetInfo }) {

  let View

  switch (Device) {
    case "web": View = W_Header
      break;
    case "tablet": View = T_Header
      break;
    case "mobile": View = M_Header
      break;
  }

  return (
    <View HeaderState={HeaderState} PlanetInfo={PlanetInfo} />
  );

}

export default Header;
