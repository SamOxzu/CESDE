from distutils.log import debug
from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/gris')
def gris():
    return render_template('gris.html')

@app.route('/negro')
def negro():
    return render_template('negro.html')

@app.route('/azul')
def azul():
    return render_template('azul.html')

@app.route('/morado')
def morado():
    return render_template('morado.html')

@app.route('/verde')
def verde():
    return render_template('verde.html')

if __name__ == "__main__":
    app.run(debug=True, port=3000)
