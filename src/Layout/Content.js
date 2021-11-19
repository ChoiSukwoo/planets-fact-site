import styled from 'styled-components';
import { ReactComponent as Source } from '../Resource/icon-source.svg';


const W_ContentViewCover = styled.div`
  display: flex;  justify-content: center;  padding-top: 69px;
`

const W_ContentView = styled.div`
  display: flex;  flex-direction:column;  justify-content: flex-end;  align-items: flex-end;
`

const W_PlantInfoCover = styled.div`
  display: flex;  justify-content: flex-end;  align-items: flex-end;
`

const W_PlantImgCover = styled.div`
  position: relative; 
  width: 668px; height: 668px;  margin-right: 110px;
`

const W_PlanGeologyImg = styled.img`
  position: absolute; bottom: 70px; left: 50%;      transform: translateX(-50%);
  width: 163px; height: 199px;
`

const W_PlantInfo = styled.div`
  display: flex;  flex-direction: column; margin-bottom:70px;
  width: 350px;

`
const W_PlantName = styled.h1`
  margin-bottom: 23px;
`

const W_PlantInfoContent = styled.div`
  height:150px; margin-bottom: 24px;
`

const W_PlantInfoContentSourceWrap = styled.a`
  display: flex;  align-items: center;  column-gap: 8px;
  width: fit-content;  margin-bottom: 39px;
`
const W_PlantInfoContentSourceCover = styled.div`
  display: flex; opacity: 50%;
`

const W_PlantInfoContentSourceIns = styled.div`
  text-decoration: underline; font-weight: 600;
`


const W_PlantInfoSelectCover = styled.div`
  display: flex;  flex-direction: column; row-gap: 16px;
`

const W_PlantInfoSelect = styled.h3`
  display: flex;  justify-content: flex-start;  align-items: center;
  height: 48px; padding: 0 28px; column-gap: 28px;
  background-color: ${props => props.color};    border: 1px solid rgba(216,216,216,.2) ;

  &:hover{
    background-color: rgba(216,216,216,.2); border: 1px solid rgba(216,216,216,.0);
  }
`

const W_PlantInfoSelected = styled.h3`
  display: flex;  justify-content: flex-start;  align-items: center;
  height: 48px; padding: 0 28px; column-gap: 28px;
  background-color: ${props => props.color};    border: 1px solid ${props => props.color} ;
`

const W_PlantInfoSelectNum = styled.h3`
  opacity: 0.5;
`

const W_PlantFigureCover = styled.div`
  display: flex;  column-gap: 30px;
`
const W_PlantFigure = styled.div`
  display: flex;  flex-direction: column; row-gap: 4px;
  padding: 20px 23px 27px 23px; width: 255px; height: 128px;
  border: 1px solid rgba(216,216,216,.2) ;
`
const W_PlantFigureTitle = styled. h4`
  opacity: 50%;
`
const W_PlantFigureContent = styled.h2`

`

function W_Content({Planet}) {

  console.log(Planet.planet)

  let PlanetImg = Planet.planetInfo=="overview" ? <img src={process.env.PUBLIC_URL+ Planet.planet.images.planet}/> : Planet.planetInfo=="structure" ? <img src={process.env.PUBLIC_URL+ Planet.planet.images.internal}/> : <img src={process.env.PUBLIC_URL+ Planet.planet.images.planet}/>
  let PlanetGeologyImg = Planet.planetInfo=="geology" ? <W_PlanGeologyImg src={process.env.PUBLIC_URL+ Planet.planet.images.geology}/> : ""

  let OverView = Planet.planetInfo=="overview" ? <W_PlantInfoSelected color={Planet.planet.color}><W_PlantInfoSelectNum>01</W_PlantInfoSelectNum>OVERVIEW</W_PlantInfoSelected> : <W_PlantInfoSelect onClick={() => {Planet.setPlanetInfo('overview')}}><W_PlantInfoSelectNum>01</W_PlantInfoSelectNum>OVERVIEW</W_PlantInfoSelect>
  let Structure = Planet.planetInfo=="structure" ? <W_PlantInfoSelected color={Planet.planet.color}><W_PlantInfoSelectNum>02</W_PlantInfoSelectNum>INTERNAL STRUCTURE</W_PlantInfoSelected> : <W_PlantInfoSelect onClick={() => {Planet.setPlanetInfo('structure')}}><W_PlantInfoSelectNum>02</W_PlantInfoSelectNum>INTERNAL STRUCTURE</W_PlantInfoSelect>
  let Geology = Planet.planetInfo=="geology" ? <W_PlantInfoSelected color={Planet.planet.color}><W_PlantInfoSelectNum>03</W_PlantInfoSelectNum>SURFACE GEOLOGY</W_PlantInfoSelected> : <W_PlantInfoSelect onClick={() => {Planet.setPlanetInfo('geology')}}><W_PlantInfoSelectNum>03</W_PlantInfoSelectNum>SURFACE GEOLOGY</W_PlantInfoSelect>


  return (
    <W_ContentViewCover>
      <W_ContentView>
        <W_PlantInfoCover>
          <W_PlantImgCover className="center"> {PlanetImg}{PlanetGeologyImg}</W_PlantImgCover>
          <W_PlantInfo>
            <W_PlantName>{Planet.planet.name.toUpperCase()}</W_PlantName>
            <W_PlantInfoContent>{Planet.planet[Planet.planetInfo].content}</W_PlantInfoContent>
            <W_PlantInfoContentSourceWrap href={Planet.planet[Planet.planetInfo].source}><W_PlantInfoContentSourceCover>Source : <W_PlantInfoContentSourceIns>Wikipedia</W_PlantInfoContentSourceIns></W_PlantInfoContentSourceCover><Source/></W_PlantInfoContentSourceWrap>
            <W_PlantInfoSelectCover>
              {OverView}
              {Structure}
              {Geology}
            </W_PlantInfoSelectCover>
          </W_PlantInfo>
        </W_PlantInfoCover>
        <W_PlantFigureCover>
        <W_PlantFigure>
            <W_PlantFigureTitle>ROTATION TIME</W_PlantFigureTitle>
            <W_PlantFigureContent>{Planet.planet.rotation}</W_PlantFigureContent>
          </W_PlantFigure>
          <W_PlantFigure>
            <W_PlantFigureTitle>REVOLUTION TIME</W_PlantFigureTitle>
            <W_PlantFigureContent>{Planet.planet.revolution}</W_PlantFigureContent>
          </W_PlantFigure>
          <W_PlantFigure>
            <W_PlantFigureTitle>RADIUS</W_PlantFigureTitle>
            <W_PlantFigureContent>{Planet.planet.radius}</W_PlantFigureContent>
          </W_PlantFigure>
          <W_PlantFigure>
            <W_PlantFigureTitle>AVERAGE TEMP.</W_PlantFigureTitle>
            <W_PlantFigureContent>{Planet.planet.temperature}</W_PlantFigureContent>
          </W_PlantFigure>
        </W_PlantFigureCover>
      </W_ContentView>
    </W_ContentViewCover>
  )
}



const T_PlantInfo = styled.div`

`
function T_Content() {

  return (
    <T_PlantInfo>2</T_PlantInfo>
  )
}


const M_PlantInfo = styled.div`

`
function M_Content() {


  return (
    <M_PlantInfo>3</M_PlantInfo>
  )
}


function Content({ Device,Planet }) {

  let View

  switch (Device) {
    case "web": View = W_Content
      break;
    case "tablet": View = T_Content
      break;
    case "mobile": View = M_Content
      break;
  }

  return (
    <View Planet={Planet}/>
  );

}


export default Content;
