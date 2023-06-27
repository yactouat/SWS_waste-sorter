import React, { useState } from 'react';
import { PREDICT_ENDPOINT_URL } from '../constants';

const styles = {
    outputBox: {
        width: '300px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        margin: '20px 30px 20px 20px',
        position: 'relative'
    } as React.CSSProperties,
};

const UploadImage = () => {
    const [outputColor, setOutputColor] = useState<string>('gray');
    const [outputBoxText, setOutputBoxText] = useState<string>('');
    // TO DO: selectedImage type may need to be changed ?
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
    
    const handleImageUpload = (e:any) => { 
        const reader: FileReader | null = new FileReader();

        reader.onloadend = () => {
            // at this point, `reader.result` contains the base64 encoded image
            setSelectedImage(reader.result);
            if (reader.result === null) return; // Potential for null value so return if that's the case
            const payloadImg = (reader.result as string).split(',')[1];
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
              .then(data => {
                setOutputBoxText(data.prediction == "webcam" ? "gray" : data.prediction);
                setOutputColor(data.prediction == "webcam" ? "gray" : data.prediction);
                switch(data.prediction) {
                  case "green":
                      alert('this is glass, throw it in the green trashbin !');
                    break;
                  case "blue":
                      alert('this is domestic waste, throw it in the blue trashbin !')
                    break;
                  case "yellow":
                      alert('that can be recycled and put in the yellow trashbin !');
                    break;
                  default:
                      alert('this is not waste');
                }
              });
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {selectedImage && outputBoxText != '' && (
                <div className="outputDiv">
                    <div className='center'>
                        <img src={selectedImage as string} alt="Selected" style={styles.outputBox} />
                    </div>
                    <div className='center' style={{
                        ...styles.outputBox,
                        backgroundColor: outputColor
                    }}>
                        <p className="outputBoxText">{outputBoxText != "gray" ? outputBoxText : ""}{' '}{outputColor != "gray" ? "trashbin": ""}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadImage;
