import React from 'react';
import {ExifImage} from 'exif';

function ExifData(props) {
    console.log(ExifImage(props.image));
        return <p>{
          
            ExifImage(props.image).text
            }</p>

    
        }


export default ExifData;

