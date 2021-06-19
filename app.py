from flask import Flask
from flask import render_template
from flask import request
import subprocess as sp


app = Flask("myapp")

@app.route('/')
def home():
    return render_template("form.html")

@app.route('/checkDocker', methods=['GET'])
def checkDocker():
    return sp.getoutput("systemctl status docker")

@app.route('/startDocker', methods=['GET'])
def startDocker():
    return sp.getoutput("systemctl start docker")

@app.route('/stopDocker', methods=['GET'])
def stopDocker():
    return sp.getoutput("systemctl stop docker")

@app.route('/dockerInfo', methods=['GET'])
def dockerInfo():
    return sp.getoutput("docker info")

@app.route('/listContainer', methods=['GET'])
def listContainer():
    return sp.getoutput("docker ps")

@app.route('/listAllContainer', methods=['GET'])
def listAllContainer():
    return sp.getoutput('docker ps -a')

@app.route('/listImages', methods=['GET'])
def listImages():
    return sp.getoutput("docker images")

@app.route('/runDocker', methods=['GET'])
def runDocker():
    containerName = (request.args.get('containerName'))
    imageName = (request.args.get('imageName'))
    tagName = (request.args.get('tagName'))
    cmd = "docker run -dit --name={} {}:{}".format(containerName, imageName, tagName)
    return sp.getoutput(cmd)

@app.route('/startContainer', methods=['GET'])
def startContainer():
    containerName = (request.args.get('containerName'))
    # containerId = (request.args.get('containerId'))
    cmd = "docker start {}".format(containerName)
    return sp.getoutput(cmd)

@app.route('/stopContainer',  methods=['GET'])
def stopContainer():
    containerName = (request.args.get('containerName'))
    # containerId = (request.args.get('containerId'))
    cmd = "docker stop {}".format(containerName)
    return sp.getoutput(cmd)

@app.route('/execDocker', methods=['GET'])
def execDocker():
    containerName = (request.args.get('containerName'))
    # containerId = (request.args.get('containerId'))
    cmdName = (request.args.get('cmdName'))
    cmd = "docker exec -dit {} {}".format(containerName, cmdName)
    return sp.getoutput(cmd)  

@app.route('/pullImage', methods=['GET'])
def pullImage():
    imageName = (request.args.get('imageName'))
    tagName = (request.args.get('tagName'))
    cmd = "docker pull {}:{}".format(imageName, tagName)
    return sp.getoutput(cmd)

@app.route('/removeImage', methods=['GET'])
def removeImage():
    imageId = (request.args.get('imageId'))
    cmd = "docker rmi -f {}".format(imageId)
    return sp.getoutput(cmd)

@app.route('/removeContainer', methods=['GET'])
def removeContainer():
    containerName = (request.args.get('containerName'))
    # containerId = (request.args.get('containerId'))
    cmd = "docker rm -f {}".format(containerName)
    return sp.getoutput(cmd)

app.run(host='0.0.0.0', port=5000, debug=True)
