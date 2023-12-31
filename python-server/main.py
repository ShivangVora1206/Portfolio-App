from flask import Flask, send_from_directory, request, render_template
from flask_cors import CORS, cross_origin
import os
import json
from imagecutter import ImageCutter
app = Flask(__name__)

imageCutter = ImageCutter()
uploadsPath = 'python-server/uploads/'

CORS(app, origins=["http://localhost:3000"], supports_credentials=True)
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/Images/v1/getImage', methods=['GET'])
def getImage():
    args = request.args
    print(args)
    return send_from_directory('roi', f'{args["id"][0:7]}')

@app.route('/Images/v1/getImages', methods=['GET'])
def getImages():
    roiList = os.walk('roi').__next__()[2]
    print(roiList)
    return json.dumps({"list" : roiList})

@app.route('/Images/v1/uploadImage', methods=['POST'])
def upload_image():
    #TODO: return error code and message
    if request.method == 'POST':
        uploaded_image = request.files['image']
        # print(uploaded_image.stream.read())
        print(uploaded_image.filename, "<- uploaded image")
        if uploaded_image:
            # uploaded_image.save(uploadsPath + uploaded_image.filename)
            # imageCutter.setImage('python-server\\uploads\\' + uploaded_image.filename, 'python-server\\roi')
            imageCutter.setImage(img_buffer=uploaded_image.stream.read(), outPath='python-server\\roi')
            if imageCutter.cutImageToGrid(120, 120, 4, 7):
                return "success"
            else:
                return "failed to process image"
    return "uploaded"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)