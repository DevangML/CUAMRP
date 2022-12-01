from flask import Flask, request
import numpy as np
import pickle
from pathlib import Path

app = Flask(__name__)


@app.route('/')
def ChurnPredictor(to_predict_list):
    root = Path(".")
    churn_model = root / "notebooks" / "Churn" / "model.pkl"
    loaded_model = pickle.load(open(churn_model, "rb"))
    result = loaded_model.predict(to_predict_list)
    return str(result[0])


@app.route('/churn', methods=['GET'])
def get_churn_rate():
    if request.method == 'GET':
        args = request.args.to_dict()
        to_predict_list = list(args.values())
        to_predict_list = list(map(float, to_predict_list))
        to_predict_list = [to_predict_list]
        result = ChurnPredictor(to_predict_list)
        prediction = str(result)
        return prediction


# if __name__ == "__main__":
#     app.run()
