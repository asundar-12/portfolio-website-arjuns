import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Experience.css';
import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';

function Experience() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="experience" id="experience" style={{ backgroundColor: theme.secondary }}>
            <div className="experience-body">
                <div className="experience-image">
                    <img src={theme.expimg} alt="" />
                </div>
                <div className="experience-description">
                    <h1 style={{ color: theme.primary }}>Experience</h1>
                    {experienceData.map(company =>
                        company.roles.map(role => (
                            <ExperienceCard
                                key={`${company.id}-${role.jobtitle}-${role.startYear}`}
                                id={company.id}
                                jobtitle={role.jobtitle}
                                description={role.description}
                                tools={role.tools}
                                company={company.company}
                                startYear={role.startYear}
                                endYear={role.endYear}
                                location={company.location}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Experience