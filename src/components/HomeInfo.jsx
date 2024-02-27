import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';


const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box '>
        <p className='font-medium sm:text-sm text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn text-sm'>
            {btnText}
            <img src={arrow} className='w-3 h-3 object-contain'/>
        </Link>
    </div>
)

// bg-clip-padding backdrop-fliter backdrop-blur-sm bg-opacity-30 border

const renderContent = {
    1: (
        <h1 className='sm:text-base sm:leading-snug text-center rounded-lg bg-pink-700 border border-pink-800 py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Priti</span>
            <br />
            A Software Engineer from India
        </h1>
    ),
    2: (
        <InfoBox
            text="Self-taught developer worked with many companies picked up many skills along the way"
            link="/about"
            btnText ="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Led multiple projects to sucess over the years. Curious about the impact?"
            link="/projects"
            btnText ="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few keystrokes away"
            link="/contacts"
            btnText ="Let's talk"
        />
    )
}

const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo