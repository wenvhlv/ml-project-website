from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify(message="Hello from the Flask backend!")

if __name__ == '__main__':
    app.run()
