from flask import Flask, render_template
import os
app = Flask(__name__)

#RAIZ
@app.route('/')
def index():
    return render_template('index.html')

#REGISTRAR
@app.route('/registrar')
def registrar():
    return "Registro exitoso"

#CONSULTAR
@app.route('/consultar')
def consultar():
    return "Consulta exitosa"


if __name__ == "__main__":
    app.run(debug=True)