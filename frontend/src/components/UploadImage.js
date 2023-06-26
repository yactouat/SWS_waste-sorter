import React, { useState } from 'react';
import { PREDICT_ENDPOINT_URL } from '../constants';

const styles = {
    selectedImage: {
        width: '300px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        margin: '10px 30px 10px 5px'
    },
};

const UploadImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (e) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            // at this point, `reader.result` contains the base64 encoded image
            setSelectedImage(reader.result);
            const payloadImg = reader.result.split(',')[1];
            fetch(PREDICT_ENDPOINT_URL, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  file: payloadImg
                })
              })
              .then(res => res.json())
              .then(prediction => {
                console.log(prediction);
                // TODO display correct color after identification
                // var responseDisplay = document.getElementById('response-display');
                // var img = document.createElement('img');
                // img.src = reader.result.split(',')[0] + ',' + imageAsBase64;
                // responseDisplay.appendChild(img);
                // switch(data.prediction) {
                //   case "green":
                //     responseDisplay.innerHTML += `<div 
                //       style='background-color: green; 
                //       width: 250px; height: 250px;'></div>`;
                //       alert('this is glass, throw it in the green trashbin !');
                //     break;
                //   case "blue":
                //     responseDisplay.innerHTML += `<div 
                //       style='background-color: blue; 
                //       width: 250px; height: 250px;'>`;
                //       alert('this is domestic waste, throw it in the blue trashbin !')
                //     break;
                //   case "yellow":
                //     responseDisplay.innerHTML += `<div 
                //       style='background-color: yellow; 
                //       width: 250px; height: 250px;'></div>`;
                //       alert('that can be recycled and put in the yellow trashbin !');
                //     break;
                // }
              });
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {selectedImage && (
                <div className='center'>
                    <img src={selectedImage} alt="Selected" style={styles.selectedImage} />
                </div>
            )}
        </div>
    );
};

export default UploadImage;
