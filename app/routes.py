from app import app
from flask import render_template, redirect, request, session
import secrets

app.config["SECRET_KEY"] = secrets.token_urlsafe(16)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/map')
def map():
    if "MODE" in session:
        return render_template('map.html', mode = session["MODE"])
    else:
        return render_template('map.html', mode="default")

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
