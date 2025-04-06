from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load both the model and scaler from the pickle file
with open('model.pkl', 'rb') as f:
    clf, scaler = pickle.load(f)

@app.route('/')
def home():
    return "ML Model API is running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the input JSON data
        data = request.get_json()

        # Extract and validate CGPA and IQ
        cgpa = float(data['cgpa'])
        iq = float(data['iq'])

        # Prepare and scale the input data
        input_data = np.array([[cgpa, iq]])
        scaled_input = scaler.transform(input_data)

        # Make prediction using the trained model
        prediction = clf.predict(scaled_input)
        
        print(f"Input data: {input_data}")
        print(f"Prediction: {prediction}")

        # Return the prediction result
        return jsonify({
            'prediction': 'Placed' if prediction[0] == 1 else 'Not Placed'
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
