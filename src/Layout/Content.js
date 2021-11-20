import styled from 'styled-components';
import { ReactComponent as Source } from '../Resource/icon-source.svg';


const W_ContentViewCover = styled.div`
  display: flex;  justify-content: center;  padding: 69px 0 56px;
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

const W_PlantInfoSelectNum = styled.div`
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
const W_PlantFigureTitle = styled.h4`
  opacity: 50%;
`
const W_PlantFigureContent = styled.h2``

function W_Content({ Planet, Device }) {

  let PlanetImg = Planet.planetInfo == "overview" ? <img src={process.env.PUBLIC_URL + Planet.planet.images.planet} width={Planet.planet.size[Device]} /> : Planet.planetInfo == "structure" ? <img src={process.env.PUBLIC_URL + Planet.planet.images.internal} width={Planet.planet.size[Device]} /> : <img src={process.env.PUBLIC_URL + Planet.planet.images.planet} width={Planet.planet.size[Device]} />
  let PlanetGeologyImg = Planet.planetInfo == "geology" ? <W_PlanGeologyImg src={process.env.PUBLIC_URL + Planet.planet.images.geology} /> : ""

  let OverView = Planet.planetInfo == "overview" ? <W_PlantInfoSelected color={Planet.planet.color}><W_PlantInfoSelectNum>01</W_PlantInfoSelectNum>OVERVIEW</W_PlantInfoSelected> : <W_PlantInfoSelect onClick={() => { Planet.setPlanetInfo('overview') }}><W_PlantInfoSelectNum>01</W_PlantInfoSelectNum>OVERVIEW</W_PlantInfoSelect>
  let Structure = Planet.planetInfo == "structure" ? <W_PlantInfoSelected color={Planet.planet.color}><W_PlantInfoSelectNum>02</W_PlantInfoSelectNum>INTERNAL STRUCTURE</W_PlantInfoSelected> : <W_PlantInfoSelect onClick={() => { Planet.setPlanetInfo('structure') }}><W_PlantInfoSelectNum>02</W_PlantInfoSelectNum>INTERNAL STRUCTURE</W_PlantInfoSelect>
  let Geology = Planet.planetInfo == "geology" ? <W_PlantInfoSelected color={Planet.planet.color}><W_PlantInfoSelectNum>03</W_PlantInfoSelectNum>SURFACE GEOLOGY</W_PlantInfoSelected> : <W_PlantInfoSelect onClick={() => { Planet.setPlanetInfo('geology') }}><W_PlantInfoSelectNum>03</W_PlantInfoSelectNum>SURFACE GEOLOGY</W_PlantInfoSelect>


  return (
    <W_ContentViewCover>
      <W_ContentView>
        <W_PlantInfoCover>
          <W_PlantImgCover className="center"> {PlanetImg}{PlanetGeologyImg}</W_PlantImgCover>
          <W_PlantInfo>
            <W_PlantName>{Planet.planet.name.toUpperCase()}</W_PlantName>
            <W_PlantInfoContent>{Planet.planet[Planet.planetInfo].content}</W_PlantInfoContent>
            <W_PlantInfoContentSourceWrap href={Planet.planet[Planet.planetInfo].source}><W_PlantInfoContentSourceCover>Source : <W_PlantInfoContentSourceIns> Wikipedia</W_PlantInfoContentSourceIns></W_PlantInfoContentSourceCover><Source /></W_PlantInfoContentSourceWrap>
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


const T_ContentViewCover = styled.div`
  display: flex;  justify-content: center;  padding: 27px 0 36px;
`
const T_PlantImgCover = styled.div`
  position: relative; 
  width: 422px; height: 422px; 
`

const T_PlanGeologyImg = styled.img`
position: absolute; bottom: 20px; left: 50%;      transform: translateX(-50%);
width: 120px; height: 150px;
`

const T_PlantInfoCover = styled.div`
  display: flex;  flex-direction:column;  justify-content: flex-end;  align-items: center;
`

const T_PlantInfo = styled.div`
  display: flex;  justify-content: space-between;
  width: 678px;
`

const T_PlantInfoContentCover = styled.div`
  display: flex;  flex-direction: column;
  width: 339px;
`

const T_PlantName = styled.h1`
  font-size: 48px;  line-height: 1;
  margin-bottom: 24px;
`

const T_PlantInfoContent = styled.div`
  height:110px; margin-bottom: 22px;  
  line-height: 22px;  font-size: 11px;
`

const T_PlantInfoContentSourceWrap = styled.a`
  display: flex;  align-items: center;  column-gap: 4px;
  width: fit-content;  margin-bottom: 37px;
`
const T_PlantInfoContentSourceCover = styled.div`
  display: flex; opacity: 50%; font-size: 12px;
`

const T_PlantFigureCover = styled.div`
  display: flex;  column-gap: 11px;
`
const T_PlantFigure = styled.div`
  display: flex;  flex-direction: column; row-gap: 6px;
  padding: 20px 23px 27px 23px; width: 164px; height: 88px;
  border: 1px solid rgba(216,216,216,.2) ;
  `

const T_PlantFigureTitle = styled.h4`
  opacity: 50%;
  font-size: 8px; line-height: 16px;  word-spacing: 0.73px;
`

const T_PlantFigureContent = styled.h2`
  font-size: 24px;  line-height: 1; word-spacing: -0.9px;
`


function T_Content({ Planet, Device }) {

  let PlanetImg = Planet.planetInfo == "overview" ? <img src={process.env.PUBLIC_URL + Planet.planet.images.planet} width={Planet.planet.size[Device]} /> : Planet.planetInfo == "structure" ? <img src={process.env.PUBLIC_URL + Planet.planet.images.internal} width={Planet.planet.size[Device]} /> : <img src={process.env.PUBLIC_URL + Planet.planet.images.planet} width={Planet.planet.size[Device]} />
  let PlanetGeologyImg = Planet.planetInfo == "geology" ? <T_PlanGeologyImg src={process.env.PUBLIC_URL + Planet.planet.images.geology} /> : ""

  let OverView = Planet.planetInfo == "overview" ? <W_PlantInfoSelected color={Planet.planet.color}><W_PlantInfoSelectNum>01</W_PlantInfoSelectNum>OVERVIEW</W_PlantInfoSelected> : <W_PlantInfoSelect onClick={() => { Planet.setPlanetInfo('overview') }}><W_PlantInfoSelectNum>01</W_PlantInfoSelectNum>OVERVIEW</W_PlantInfoSelect>
  let Structure = Planet.planetInfo == "structure" ? <W_PlantInfoSelected color={Planet.planet.color}><W_PlantInfoSelectNum>02</W_PlantInfoSelectNum>INTERNAL STRUCTURE</W_PlantInfoSelected> : <W_PlantInfoSelect onClick={() => { Planet.setPlanetInfo('structure') }}><W_PlantInfoSelectNum>02</W_PlantInfoSelectNum>INTERNAL STRUCTURE</W_PlantInfoSelect>
  let Geology = Planet.planetInfo == "geology" ? <W_PlantInfoSelected color={Planet.planet.color}><W_PlantInfoSelectNum>03</W_PlantInfoSelectNum>SURFACE GEOLOGY</W_PlantInfoSelected> : <W_PlantInfoSelect onClick={() => { Planet.setPlanetInfo('geology') }}><W_PlantInfoSelectNum>03</W_PlantInfoSelectNum>SURFACE GEOLOGY</W_PlantInfoSelect>


  return (
    <T_ContentViewCover>
      <W_ContentView>
        <T_PlantInfoCover>
          <T_PlantImgCover className="center"> {PlanetImg}{PlanetGeologyImg}</T_PlantImgCover>
          <T_PlantInfo>
            <T_PlantInfoContentCover>
              <T_PlantName>{Planet.planet.name.toUpperCase()}</T_PlantName>
              <T_PlantInfoContent>{Planet.planet[Planet.planetInfo].content}</T_PlantInfoContent>
              <T_PlantInfoContentSourceWrap href={Planet.planet[Planet.planetInfo].source}><T_PlantInfoContentSourceCover>Source : <W_PlantInfoContentSourceIns> Wikipedia</W_PlantInfoContentSourceIns></T_PlantInfoContentSourceCover><Source /></T_PlantInfoContentSourceWrap>
            </T_PlantInfoContentCover>
            <W_PlantInfoSelectCover>
              {OverView}
              {Structure}
              {Geology}
            </W_PlantInfoSelectCover>
          </T_PlantInfo>
        </T_PlantInfoCover>
        <T_PlantFigureCover>
          <T_PlantFigure>
            <T_PlantFigureTitle>ROTATION TIME</T_PlantFigureTitle>
            <T_PlantFigureContent>{Planet.planet.rotation}</T_PlantFigureContent>
          </T_PlantFigure>
          <T_PlantFigure>
            <T_PlantFigureTitle>REVOLUTION TIME</T_PlantFigureTitle>
            <T_PlantFigureContent>{Planet.planet.revolution}</T_PlantFigureContent>
          </T_PlantFigure>
          <T_PlantFigure>
            <T_PlantFigureTitle>RADIUS</T_PlantFigureTitle>
            <T_PlantFigureContent>{Planet.planet.radius}</T_PlantFigureContent>
          </T_PlantFigure>
          <T_PlantFigure>
            <T_PlantFigureTitle>AVERAGE TEMP.</T_PlantFigureTitle>
            <T_PlantFigureContent>{Planet.planet.temperature}</T_PlantFigureContent>
          </T_PlantFigure>
        </T_PlantFigureCover>
      </W_ContentView>
    </T_ContentViewCover>
  )
}


const M_ContentViewCover = styled.div`
  display: ${props => props.display}; justify-content: center;  padding: 0px 0 47px;
  width: 100%;
`
const M_ContentView = styled.div`
  width: 100%;
`

const M_PlantInfoCover = styled.div`
  display: flex;  flex-direction: column; align-items: center;
`
const M_PlantInfoSelectCover = styled.div`
  display: flex;  column-gap: 43px; justify-content: center;
  width: 100%;  
  border-bottom: 1px solid rgba(151,151,151,0.2);
`

const M_PlantInfoSelect = styled.div`
  display: flex; align-items: center;
  height: 50px;
  border-bottom: 4px solid rgba(0,0,0,0);
`

const M_PlantInfoSelected = styled.div`
  display: flex; align-items: center;
  height: 50px;
  border-bottom: 4px solid ${props => props.color};
`

const M_PlantImgCover = styled.div`
  position: relative; 
  width: 256px; height: 256px;  margin-top: 24px;
`
const M_PlanGeologyImg = styled.img`
  position: absolute; bottom: 10px; left: 50%;      transform: translateX(-50%);
  width: 80px; height: 100px;
`
const M_PlantInfo = styled.div`
  display: flex;  flex-direction: column; justify-content: center;
  margin-bottom: 28px;  width: 327px;
`

const M_PlantName = styled.h2`
  margin-bottom: 16px;  
`

const M_PlantInfoContent = styled.div`
  height:132px; margin-bottom: 10px;
  font-size:11px; line-height: 22px; text-align:center;
`

const M_PlantInfoContentSourceWrap = styled.a`
  display:flex; align-items:center; column-gap: 4px;
  width: fit-content;
`
const M_PlantInfoContentSourceCover = styled.div`
  display: flex; opacity: 50%; 
  font-size: 12px;  
`

const M_PlantFigureCover = styled.div`
  display: flex;  flex-direction:column;  row-gap: 8px; align-items: center;
`

const M_PlantFigure = styled.div`
  display: flex;  justify-content:space-between; align-items: center; row-gap: 4px;
  padding: 9px 24px 13px 24px; width: 327px;
  border: 1px solid rgba(216,216,216,.2) ;
`
const M_PlantFigureTitle = styled.h4`
  opacity: 50%; position: relative; top: 2px;
  font-size:8px; line-height: 16px; word-spacing: 0.73px;
`
const M_PlantFigureContent = styled.h2`
  font-size: 20px;  line-height:1;  word-spacing: -0.75px;
`



function M_Content({ Planet, Device, HeaderState }) {

  let PlanetImg = Planet.planetInfo == "overview" ? <img src={process.env.PUBLIC_URL + Planet.planet.images.planet} width={Planet.planet.size[Device]} /> : Planet.planetInfo == "structure" ? <img src={process.env.PUBLIC_URL + Planet.planet.images.internal} width={Planet.planet.size[Device]} /> : <img src={process.env.PUBLIC_URL + Planet.planet.images.planet} width={Planet.planet.size[Device]} />
  let PlanetGeologyImg = Planet.planetInfo == "geology" ? <M_PlanGeologyImg src={process.env.PUBLIC_URL + Planet.planet.images.geology} /> : ""

  let OverView = Planet.planetInfo == "overview" ? <M_PlantInfoSelected color={Planet.planet.color}>OVERVIEW</M_PlantInfoSelected> : <M_PlantInfoSelect onClick={() => { Planet.setPlanetInfo('overview') }}>OVERVIEW</M_PlantInfoSelect>
  let Structure = Planet.planetInfo == "structure" ? <M_PlantInfoSelected color={Planet.planet.color}>STRUCTURE</M_PlantInfoSelected> : <M_PlantInfoSelect onClick={() => { Planet.setPlanetInfo('structure') }}>STRUCTURE</M_PlantInfoSelect>
  let Geology = Planet.planetInfo == "geology" ? <M_PlantInfoSelected color={Planet.planet.color}>SURFACE</M_PlantInfoSelected> : <M_PlantInfoSelect onClick={() => { Planet.setPlanetInfo('geology') }}>SURFACE</M_PlantInfoSelect>


  return (
    <M_ContentViewCover display={HeaderState.header == "open" ? "none" : "flex"}>
      <M_ContentView>

        <M_PlantInfoCover>
          <M_PlantInfoSelectCover>
            {OverView}
            {Structure}
            {Geology}
          </M_PlantInfoSelectCover>
          <M_PlantImgCover className="center"> {PlanetImg}{PlanetGeologyImg}</M_PlantImgCover>

          <M_PlantInfo>
            <M_PlantName className="center">{Planet.planet.name.toUpperCase()}</M_PlantName>
            <M_PlantInfoContent className="center">{Planet.planet[Planet.planetInfo].content}</M_PlantInfoContent>
            <div className="center"><M_PlantInfoContentSourceWrap href={Planet.planet[Planet.planetInfo].source}><M_PlantInfoContentSourceCover>Source : <W_PlantInfoContentSourceIns> Wikipedia</W_PlantInfoContentSourceIns></M_PlantInfoContentSourceCover><Source /></M_PlantInfoContentSourceWrap></div>

          </M_PlantInfo>
        </M_PlantInfoCover>

        <M_PlantFigureCover>
          <M_PlantFigure>
            <M_PlantFigureTitle>ROTATION TIME</M_PlantFigureTitle>
            <M_PlantFigureContent>{Planet.planet.rotation}</M_PlantFigureContent>
          </M_PlantFigure>
          <M_PlantFigure>
            <M_PlantFigureTitle>REVOLUTION TIME</M_PlantFigureTitle>
            <M_PlantFigureContent>{Planet.planet.revolution}</M_PlantFigureContent>
          </M_PlantFigure>
          <M_PlantFigure>
            <M_PlantFigureTitle>RADIUS</M_PlantFigureTitle>
            <M_PlantFigureContent>{Planet.planet.radius}</M_PlantFigureContent>
          </M_PlantFigure>
          <M_PlantFigure>
            <M_PlantFigureTitle>AVERAGE TEMP.</M_PlantFigureTitle>
            <M_PlantFigureContent>{Planet.planet.temperature}</M_PlantFigureContent>
          </M_PlantFigure>
        </M_PlantFigureCover>

      </M_ContentView>
    </M_ContentViewCover>
  )
}

function Content({ Device, Planet, HeaderState }) {

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
    <View Device={Device} Planet={Planet} HeaderState={HeaderState} />
  );

}


export default Content;
