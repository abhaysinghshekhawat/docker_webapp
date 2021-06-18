from flask import Flask,render_template,request
from flask.json import jsonify

app = Flask("myapp")

@app.route('/')
def home():
    return render_template("form.html")

@app.route('/test')
def get():
    return "get successfull"

@app.route('/test' , methods=["POST"])
def post():
    return "post successfull"


app.run(debug=True)