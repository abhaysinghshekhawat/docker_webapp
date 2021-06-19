

function lw()
      {
        

        document.getElementById("cnt").style.backgroundImage = "url('https://i.pinimg.com/originals/f9/83/4d/f9834dc9df9a0939965d1de09d3e43e5.jpg')";
        document.getElementById("cnt").style.backgroundAttachment = "fixed";
        document.getElementById("navbar").style.display = "flex";
       
      }

      function lw2()
      {
        document.getElementById("card-cnt").style.display = "none";
        document.getElementById("navbar").style.display = "flex";

      }

      function home()
      {
        document.getElementById("card-cnt").style.display = "flex";
        document.getElementById("navbar").style.display = "none";
      }
      function drop(){

        document.getElementById("drop").style.display = "flex";
      }
      function out(){

          document.getElementById("drop").style.display = "none";
          
          
      }


function checkDocker() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `/checkDocker`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("").innerHTML = output;
    }
}

function startDocker() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `/startDocker`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("").innerHTML = output;
    }
}

function stopDocker() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `/stopDocker`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("").innerHTML = output;
    }
}

function dockerInfo() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `/dockerInfo`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("").innerHTML = output;
    }
}

function listContainer() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `/listContainer`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("").innerHTML = output;
    }
}

function listAllContainer() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `/listAllContainer`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("").innerHTML = output;
    }
}

function listImages() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `/listImages`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML = output;
    }
}

function runDocker() {
    var xhr = new XMLHttpRequest();
    var containerName = document.getElementsByName("containerName")[0].value;
    var imageName = document.getElementsByName("imageName")[0].value;
    var tagName = document.getElementsByName("tagName")[0].value;
    xhr.open("GET", `/runDocker?containerName=${containerName}&imageName=${imageName}&tagName=${tagName}`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("").innerHTML = output;
    }
}

function startContainer() {
    var xhr = new XMLHttpRequest();
    var containerName = document.getElementsByName("containerName")[0].value;
    // var containerId = document.getElementsByName("containerId")[0].value;
    xhr.open("GET", `/startContainer?containerName=${containerName}`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("").innerHTML = output;
    }
}

function stopContainer() {
    var xhr = new XMLHttpRequest();
    var containerName = document.getElementsByName("containerName")[0].value;
    // var containerId = document.getElementsByName("containerId")[0].value;
    xhr.open("GET", `/stopContainer?containerName=${imageName}`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("").innerHTML = output;
    }
}

function execDocker() {
    var xhr = new XMLHttpRequest();
    var containerName = document.getElementsByName("containerName")[0].value;
    var cmdName = document.getElementsByName("cmdName")[0].value;
    // var containerId = document.getElementsByName("containerId")[0].value;
    xhr.open("GET", `/execDocker?containerName=${containerName}&cmdName=${cmdName}`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("").innerHTML = output;
     }
}

function pullImage() {
    var xhr = new XMLHttpRequest();
    var imageName = document.getElementsByName("imageName")[0].value;
    var tagName = document.getElementsByName("tagname")[0].value;
    // var containerId = document.getElementsByName("containerId")[0].value;
    xhr.open("GET", `/pullImage?imageName=${imageName}&tagname=${tagName}`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("").innerHTML = output;
     }
}

function removeImage() {
    var xhr = new XMLHttpRequest();
    var imageId = document.getElementsByName("imageId")[0].value;
    xhr.open("GET", `/removeImage?imageId=${imageId}`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("").innerHTML = output;
    }
}

function removeContainer() {
    var xhr = new XMLHttpRequest();
    var containerName = document.getElementsByName("containerName")[0].value;
    // var containerId = document.getElementsByName("containerId")[0].value;
    xhr.open("GET", `/removeContainer?containerName=${containerName}`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("").innerHTML = output;
    }
}

