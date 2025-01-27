from flask import Flask, request, jsonify
from flask_restx import Api, Resource, reqparse
from flask_cors import CORS
from werkzeug.datastructures import FileStorage
import tensorflow as tf
from PIL import Image
import numpy as np

app = Flask(__name__)
api = Api(app, version='1.0', title='Trash Sorting API', description='An API to classify images using a pre-trained model')
CORS(app)
# Load your model
model = tf.keras.models.load_model('C:/Users/User/Desktop/ml_for_de/trash_sorting/fine_tuned_model.h5')

# Define a namespace
ns = api.namespace('predict', description='Prediction operations')

# Define the input model for Swagger
upload_parser = reqparse.RequestParser()
upload_parser.add_argument('file', location='files', type=FileStorage, required=True, help='Image file')

# Static mapping for class labels (manually define based on your model's class order)
class_labels = ["battery", "biological", "metal", "paper", "plastic", "white"]

# Define the prediction endpoint
@ns.route('/')
class Predict(Resource):
    @ns.expect(upload_parser)
    def post(self):
        """Classify an uploaded image"""
        args = upload_parser.parse_args()
        image_file = args['file']

        if not image_file:
            return {"error": "No file uploaded"}, 400
         
         # Debug: Log file details
        print(f"File received: {args['file']}")
        print(f"File type: {image_file.content_type}")


        # Process the image
        try:
            image = Image.open(image_file)
            image = image.resize((150, 150))  # Resize to match model input
            image_array = np.array(image) / 255.0  # Normalize
            image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension

            # Predict
            predictions = model.predict(image_array)
            class_index = np.argmax(predictions, axis=1)[0]
            class_name = class_labels[class_index]  # Map the index to the class name

            return {"class": class_name, "confidence": float(np.max(predictions))}, 200
        except Exception as e:
            return {"error": str(e)}, 500

# Register the namespace
api.add_namespace(ns, path='/predict')

if __name__ == '__main__':
    app.run(debug=True)
