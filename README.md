# 🎭 AI Poem Analyzer

An intelligent web application that uses **Natural Language Processing (NLP)** to analyze poems — classifying them by theme and generating a meaningful interpretation. Built with a Python backend and React frontend.

---

## ✨ Features

- 📜 Input any poem and get an instant AI-powered analysis
- 🏷️ Theme classification using NLP models
- 💡 Automated poem interpretation generation
- ⚛️ Interactive React-based frontend UI
- 🔗 REST API backend built with Python

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, CSS |
| Backend | Python, Flask |
| NLP / AI | Jupyter Notebook, NLP libraries |
| Data Science | Pandas, NumPy, Scikit-learn |

---

## 📁 Project Structure

```
AI-poem-analyzer/
│
├── backend/                        # Python Flask API
│   ├── app.py                      # API entry point
│   └── model/                      # NLP model files
│
├── my-react-app/                   # React frontend
│   ├── src/
│   │   ├── App.js
│   │   └── components/
│   └── public/
│
├── poemInterpretationFinalProject2.ipynb   # Model training notebook
├── LICENSE
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Python 3.8+
- Node.js & npm

---

### 🔧 Backend Setup

```bash
# Navigate to backend folder
cd backend

# Create virtual environment
python -m venv venv
venv\Scripts\activate      # Windows
source venv/bin/activate   # Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Run the backend server
python app.py
```

Backend runs at: `http://localhost:5000`

---

### 🎨 Frontend Setup

```bash
# Navigate to React app folder
cd my-react-app

# Install dependencies
npm install

# Start the development server
npm start
```

Frontend runs at: `http://localhost:3000`

---

## 🧠 How It Works

1. User inputs a poem in the React frontend
2. The poem is sent to the Python backend via API
3. The NLP model analyzes the poem for themes and sentiment
4. An AI-generated interpretation is returned
5. Results are displayed beautifully on the frontend

---

## 📓 Model Training

The NLP model was trained using the Jupyter Notebook:
`poemInterpretationFinalProject2.ipynb`

It covers data preprocessing, model training, theme classification, and interpretation generation.


---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👩‍💻 Author

**Swara** — [GitHub Profile](https://github.com/Swara651)
