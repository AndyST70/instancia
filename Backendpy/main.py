
from fileinput import filename 
from flask import * 
from flask_cors import CORS
import os
import random
from hashlib import *
from datetime import datetime



app = Flask(__name__)
CORS(app)


@app.get('/check')
def check():
    return  make_response("",200)

@app.get('/vm')
def vm():
    return make_response("Saludos desde la VM #2", 200)

@app.get('/')
def home():
    return jsonify({
        "instancia": "Instancia #2 - API #2",
        "Curso": "Seminario de sistemas 1",
        "Sección": "Sección A",
        "Periodo": "2 semestre 2024",
        "Estudiante": "Andy Ezequiel Sanic Tiul - 202006699"
    })




if __name__ == '__main__':
    app.run(debug=True)
 
