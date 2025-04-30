import { useState } from 'react';


export default function ExperienceCard(props) {
    const [moreInfo, setMoreInfo] = useState(false);

    const handleInfoButtonClick = () => {
        setMoreInfo(prev => !prev);
    }
    return (
        <div className={`ExperienceCard container ${props.side}`}>
            <div className="content flex flex-col">
            <h2>
                {props.name}
            </h2>
            <h3>
                {props.location}
            </h3>
            {moreInfo &&
                <ul>
                    {
                        props.bulletPoints.map((bulletPoint, index) => {
                            return (
                                <li style={{ listStyle: "inside" }} key={index}>

                                    {bulletPoint}
                                </li>
                            );
                        })
                    }
                </ul>
            }
            <button className={`experience-button${moreInfo ? ' closed' : ''}`} onClick={handleInfoButtonClick}>
            </button>
            </div>
        </div>
    );
}