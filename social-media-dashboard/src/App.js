import React,{useState} from 'react'
import './App.scss'

import TotalCardData from './components/Data/TotalCardData';
import OverviewCardData from './components/Data/OverviewCardData';

import TotalCard from '../src/components/TotalCard/TotalCard'
import OverviewCard from '../src/components/OverviewCard/OverviewCard'

function App() {
  const [isDarkToggled,setIsDarkToggled] = useState(true);
  return (
    <div style={isDarkToggled === false ? {background: 'white'} : {background: 'var(--Very-Dark-Blue)'}} className="app">
      <div className="app-container">
        <div className="dashboard">
          <div className="dashboard-top">
            <div className="dashboard-left">
              <h2 style={isDarkToggled === false ? {color: 'var(--Very-Dark-Blue)'}:{color: 'var(--White)'}}>Social Media Dashboard</h2>
              <p style={isDarkToggled === false ? {color: 'var(--Dark-Grayish-Blue)'}:{color: 'var(--Desaturated-Blue)'}}>Total Followers: 23,004</p>
            </div>
            <div className="dashboard-right">
              <p style={isDarkToggled === false ? {color: 'var(--Dark-Grayish-Blue)'}:{color: 'var(--White)'}}>Dark Mode</p>
              <div onClick={()=>{
                setIsDarkToggled(!isDarkToggled);
              }} style={isDarkToggled === false ? {justifyContent:'flex-end',background:'hsl(230, 22%, 74%)'}: {justifyContent:'flex-start',background:'linear-gradient(hsl(210, 78%, 56%),hsl(146, 68%, 55%))'}} className="toggle">
                <div style={isDarkToggled === false ? {background: 'white'}: {background: 'var(--Very-Dark-Blue'}} className="toggle-circle"></div>
              </div>
            </div>
          </div>
          <div className="dashboard-cards">    
            {TotalCardData.map((data)=>{
              return <TotalCard isDarkToggled={isDarkToggled} decrease={data.decrease} svg2={data.svg2} color={data.color} svg={data.svg} followers={data.followers} name={data.name} type={data.type} change={data.change} />;
            })}
          </div>
        </div>
        <div className="overview">
          <div className="overview-top">
            <h2 style={isDarkToggled === false ? {color: 'var(--Dark-Grayish-Blue)'}:{color: 'var(--White)'}}>Overview-Today</h2>
          </div>
          <div className="overview-cards">
            {OverviewCardData.map((data) =>{
              return <OverviewCard isDarkToggled={isDarkToggled} decrease={data.decrease} icon={data.icon} icon2={data.icon2} type={data.type} percent={data.percent} count={data.count} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
