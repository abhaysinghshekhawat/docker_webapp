from flask import Flask
from flask import render_template
from flask import request
import subprocess as sp


app = Flask("myapp")

@app.route('/')
def home():
    return render_template("test.html")

@app.route('/checkDocker', methods=['GET'])
def checkDocker():
    op = sp.getoutput("systemctl status docker")
    return "<pre> {} </pre>".format(op)


@app.route('/startDocker', methods=['GET'])
def startDocker():
    op = sp.getoutput("systemctl start docker")
    return "<pre> <h2>DOCKER SERVICES STARTED...</h2> </pre>".format(op)

@app.route('/stopDocker', methods=['GET'])
def stopDocker():
    op = sp.getoutput("systemctl stop docker")
    return "<pre> <h2>DOCKER SERVICES STOPPED..</h2> </pre>".format(op)

@app.route('/dockerInfo', methods=['GET'])
def dockerInfo():
    op =sp.getoutput("docker info")
    return "<pre> <b>{}</b> </pre>".format(op)

@app.route('/listContainer', methods=['GET'])
def listContainer():
    op =  sp.getoutput("docker ps")
    return "<pre> {} </pre>".format(op)

@app.route('/listAllContainer', methods=['GET'])
def listAllContainer():
    op =  sp.getoutput('docker ps -a')
    return "<pre> {} </pre>".format(op)

@app.route('/listImages', methods=['GET'])
def listImages():
    op = sp.getoutput("docker images")
    return "<pre> {} </pre>".format(op)

@app.route('/runDocker', methods=['GET'])
def runDocker():
    containerName = (request.args.get('containerName'))
    imageName = (request.args.get('imageName'))
    tagName = (request.args.get('tagName'))
    cmd = "docker run -dit --name={} {}:{}".format(containerName, imageName, tagName)
    op = sp.getoutput(cmd)
    return "<pre> CONTAINER STARTED WITH ID-> {} </pre>".format(op)


@app.route('/startContainer', methods=['GET'])
def startContainer():
    containerName = (request.args.get('containerName'))
    # containerId = (request.args.get('containerId'))
    cmd = "docker start {}".format(containerName)
    op =  sp.getoutput(cmd)
    return "<pre>Container <b>{}</b> Started..  </pre>".format(op)

@app.route('/stopContainer',  methods=['GET'])
def stopContainer():
    containerName = (request.args.get('containerName'))
    # containerId = (request.args.get('containerId'))
    cmd = "docker stop {}".format(containerName)
    op = sp.getoutput(cmd)
    return "<pre>Container {} Stopped... </pre>".format(op)

@app.route('/execDocker', methods=['GET'])
def execDocker():
    containerName = (request.args.get('containerName'))
    # containerId = (request.args.get('containerId'))
    cmdName = (request.args.get('cmdName'))
    cmd = "docker exec  {} {}".format(containerName, cmdName)
    op = sp.getoutput(cmd)
    return "<pre> {} </pre>".format(op)

@app.route('/pullImage', methods=['GET'])
def pullImage():
    imageName = (request.args.get('imageName'))
    tagName = (request.args.get('tagName'))
    cmd = "docker pull {}:{}".format(imageName, tagName)
    op = sp.getoutput(cmd)
    return "<pre> {} </pre>".format(op)

@app.route('/removeImage', methods=['GET'])
def removeImage():
    imageId = (request.args.get('imageId'))
    cmd = "docker rmi -f {}".format(imageId)
    op = sp.getoutput(cmd)
    return "<pre> {} </pre>".format(op)

@app.route('/removeContainer', methods=['GET'])
def removeContainer():
    containerName = (request.args.get('containerName'))
    # containerId = (request.args.get('containerId'))
    cmd = "docker rm -f {}".format(containerName)
    op = sp.getoutput(cmd)
    return "<pre>Container {} removed </pre>".format(op)




app.run(host='0.0.0.0', port=5000, debug=True)
