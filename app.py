import base64
from io import BytesIO
from flask import Flask, jsonify, render_template, request
from fastcore.all import *
from fastai.vision.all import *

app = Flask(__name__)

learner = load_learner('/app/export.pkl')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    base64_string = request.json['file']
    image_bytes = base64.b64decode(base64_string)
    img = PILImage.create(BytesIO(image_bytes))
    pred,pred_idx,probs = learner.predict(img)
    return jsonify({'prediction': str(pred), 'prediction_index': str(pred_idx), 'probabilities': str(probs)})

if __name__ == '__main__':
    # TODO change debug to False when deploying
    app.run()
