

function lw2()
      { 
        
      document.getElementById("card-cnt").style.display = "none";
      document.getElementById("navbar").style.display = "flex";

      }

function home()
      {
        document.getElementById("card-cnt").style.display = "flex";
        document.getElementById("navbar").style.display = "none";
        document.getElementById("cnt-div").style.display = "none";
        document.getElementsByName("containerName")[0].value= "";
      }
function drop(){

        document.getElementById("drop").style.display = "flex";
      }
function out(){

          document.getElementById("drop").style.display = "none";
          
          
      }


function checkDocker() {
      document.getElementById("cnt-div").style.display = "inline-block";
      document.getElementById("card-cnt").style.display = "none";
      document.getElementById("navbar").style.display = "flex";
  
      var xhr = new XMLHttpRequest();
      xhr.open("GET", `/checkDocker`, true);
      xhr.send();
      xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("content").innerHTML = output;
      }
  }
  
function startDocker() {
      document.getElementById("cnt-div").style.display = "inline-block";
      document.getElementById("card-cnt").style.display = "none";
      document.getElementById("navbar").style.display = "flex";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/startDocker", true);
      xhr.send();
      xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("content").innerHTML = output;
      }
  }
  
function stopDocker() {
      document.getElementById("cnt-div").style.display = "inline-block";
      document.getElementById("card-cnt").style.display = "none";
      document.getElementById("navbar").style.display = "flex";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", `/stopDocker`, true);
      xhr.send();
      xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("content").innerHTML = output;
      }
  }
  
function dockerInfo() {
      document.getElementById("cnt-div").style.display = "inline-block";
      document.getElementById("card-cnt").style.display = "none";
      document.getElementById("navbar").style.display = "flex";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", `/dockerInfo`, true);
      xhr.send();
      xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("content").innerHTML = output;
      }
  }
  
function listContainer() {
      document.getElementById("cnt-div").style.display = "inline-block";
      document.getElementById("card-cnt").style.display = "none";
      document.getElementById("navbar").style.display = "flex";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", `/listContainer`, true);
      xhr.send();
      xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("content").innerHTML = output;
      }
  }
  
function listAllContainer() {
      document.getElementById("cnt-div").style.display = "inline-block";
      document.getElementById("card-cnt").style.display = "none";
      document.getElementById("navbar").style.display = "flex";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", `/listAllContainer`, true);
      xhr.send();
      xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("content").innerHTML = output;
      }
  }
  
function listImages() {
      document.getElementById("cnt-div").style.display = "inline-block";
      document.getElementById("card-cnt").style.display = "none";
      document.getElementById("navbar").style.display = "flex";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", `/listImages`, true);
      xhr.send();
      xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("content").innerHTML = output;
      }
  }
  
function runDocker() {
      document.getElementById("cnt-div").style.display = "inline-block";
      document.getElementById("card-cnt").style.display = "none";
      document.getElementById("navbar").style.display = "flex";

      var xhr = new XMLHttpRequest();
      var containerName = document.getElementById("cnt-name").value;
      var imageName = document.getElementById("in").value;
      var tagName = document.getElementById("tag").value;
      xhr.open("GET", `/runDocker?imageName=${imageName}&tagName=${tagName}&containerName=${containerName}`, true);
      xhr.send();
      xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("content").innerHTML = output;
      }
  }
  
function startContainer() {
      document.getElementById("cnt-div").style.display = "inline-block";
      document.getElementById("card-cnt").style.display = "none";
      document.getElementById("navbar").style.display = "flex";
      var xhr = new XMLHttpRequest();
      var containerName = document.getElementById("start-cnt").value;
      // var containerId = document.getElementsByName("containerId")[0].value;
      xhr.open("GET", `/startContainer?containerName=${containerName}`, true);
      xhr.send();
      xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("content").innerHTML = output;
      }
  }
  
function stopContainer() {
      document.getElementById("cnt-div").style.display = "inline-block";
      document.getElementById("card-cnt").style.display = "none";
      document.getElementById("navbar").style.display = "flex";
      var xhr = new XMLHttpRequest();
      var containerName = document.getElementById("stop-cnt").value;
      // var containerId = document.getElementsByName("containerId")[0].value;
      xhr.open("GET", `/stopContainer?containerName=${containerName}`, true);
      xhr.send();
      xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("content").innerHTML = output;
      }
  }

function removeContainer() {
    document.getElementById("cnt-div").style.display = "inline-block";
    document.getElementById("card-cnt").style.display = "none";
    document.getElementById("navbar").style.display = "flex";
    var xhr = new XMLHttpRequest();
    var containerName = document.getElementById("remove-cnt").value;
    // var containerId = document.getElementsByName("containerId")[0].value;
    xhr.open("GET", `/removeContainer?containerName=${containerName}`, true);
    xhr.send();
    xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("content").innerHTML = output;
    }
}



function execDocker()
{
  document.getElementById("cnt-div").style.display = "inline-block";
  document.getElementById("card-cnt").style.display = "none";
  document.getElementById("navbar").style.display = "flex";
  var xhr = new XMLHttpRequest();
  var cmdName = document.getElementById("cmdName").value;
  var cntName = document.getElementById("cntName").value;
  xhr.open("GET", `/execDocker?cmdName=${cmdName}&containerName=${cntName}`, true);
  xhr.send();
  xhr.onload = function() {
  var output = xhr.responseText;
  document.getElementById("content").innerHTML = output;
  }

}

