from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

# ✅ Initialize Flask App
app = Flask(__name__)
CORS(app)  # ✅ Enable CORS for frontend communication

# ✅ Colab FastAPI Endpoint (Replace with your actual ngrok URL)
COLAB_API_URL = "https://ba69-34-53-25-96.ngrok-free.app/predict/"

# ✅ Flask Route to Handle Poem Interpretation
@app.route("/interpret", methods=["POST"])
def interpret_poem():
    data = request.json  # Get JSON request data
    poem_text = data.get("poem", "").strip()

    if not poem_text:
        return jsonify({"error": "Poem text is required!"}), 400

    try:
        # ✅ Send the poem to FastAPI in Colab
        response = requests.post(COLAB_API_URL, json={"poem": poem_text})
        response_data = response.json()

        # ✅ Return FastAPI Response to React
        return jsonify(response_data)

    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"Failed to connect to FastAPI: {str(e)}"}), 500

# ✅ Run Flask App
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
