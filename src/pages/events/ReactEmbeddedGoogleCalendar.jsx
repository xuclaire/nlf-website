import React from 'react';

export const ReactEmbeddedGoogleCalendar = ({ 
publicUrl = '',
width = `60%`,
height = `100%`
}) => { 
    if (publicUrl === '') {return <p>Please, provide public URL of your Google calendar</p>;}
    return ( 
        <iframe src={publicUrl} style={{borderWidth:0, overflowX: "scroll"}}
            width={width} height={height}
            frameBorder="0" scrolling="no">
        </iframe>
    );
};