from app import app
from flask import render_template, redirect, request, session

app.config["SECRET_KEY"] = "OCML3BRawWEUeaxcuKHLpw"


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/map')
def map():
    return render_template('map.html', mode = session["MODE"])

@app.route('/map/<mode>')
def mapmode(mode):
    if mode is not None:
        session["MODE"] = mode
    else:
        session["MODE"] = "default"
    return redirect('/map')

@app.route('/info')
def info():
    return render_template('info.html')

@app.route('/solutions')
def solutions():
    return render_template('solutions.html')

@app.route('/references')
def references():
    return render_template('references.html')
