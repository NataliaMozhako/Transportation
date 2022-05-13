import React from 'react';

const AboutService = (props) => {
    return (
        <div className="aboutservice">
            <div className='servicetitle'>
                {props.service.title}
            </div>
            <div className='aboutserviceinfo'>
                {props.service.description}
            </div>
        </div>
    );
};

export default AboutService;