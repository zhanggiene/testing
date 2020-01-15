const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

var file;
var fileURL;
      var summitButton=document.getElementById('uploadButton');
      //summitButton.style.visibility='hidden'; // hide the submit button
      var config = {
    apiKey: "AIzaSyB-ppxnmmh9N7Yh9Hvd4Dv654XCZxAwFdY",
    authDomain: "test-165e8.firebaseapp.com",
    databaseURL: "https://test-165e8.firebaseio.com",
    projectId: "test-165e8",
    storageBucket: "test-165e8.appspot.com",
    messagingSenderId: "24442279561",
    appId: "1:24442279561:web:60e21c29414ab066279858",
    measurementId: "G-Z48JHZJXX3"
};
      firebase.initializeApp(config);







selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    console.log(selected.innerHTML,"i am selected")
  });
});

searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};



 
    
      
var uploader = document.getElementById('uploader');
var fileButton =         document.getElementById('fileButton');
fileButton.addEventListener('change', function(e){
file = e.target.files[0];
summitButton.style.visibility='visible';
})

function uploadFile()
{
  var fileName=file.name;
var storageRef = firebase.storage().ref('/resources'+fileName);
var task = storageRef.put(file);
task.on('state_changed', function progress(snapshot) {
  var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
  uploader.value = percentage;

}, function error(err) {


},function complete() {
  console.log("ok it is done")
  uploader.value=0;
  document.querySelector('.alert').style.display = 'block';
  task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
fileURL=downloadURL
summitButton.style.visibility='hidden'; 



// u need to put the below code below as it takes a while to get new url
//info to be stored in fairebase $$$$$$$$$$################
var message=document.getElementById('message').value;
var courseIndex=selected.innerHTML;
console.log(fileURL);

var reference=firebase.database().ref('learningMaterial')

  var courseKey=reference.child(courseIndex).push()  // $$$$$$$$$$ it will create a child if it does not exist
  console.log(fileURL);
      courseKey.set({
      message:message,
      downloadLocation:fileURL
        

      });






});

// Hide alert after 3 seconds
setTimeout(function(){
document.querySelector('.alert').style.display = 'none';
},3000);



// Clear form
//document.getElementById('fileButton').reset();
document.getElementById("fileButton").value = "";
document.getElementById('message').value="";
//upload other info to dataBase



});
}



/*


  /*newMessageRef.on("value",function(snapshot){
      snapshot.forEach( function(childSnapshot)
      {
          var data=childSnapshot.val();
          console.log(data)
      })
          
      });
      */


  function AddIndex()
  {
    var newIndex=document.getElementById("inPutIndex").value;
    if (newIndex==""|| newIndex==" ")
    {
      alert("must type in index number");
      return false;
    }
    else
    {

      var reference = firebase.database().ref('learningMaterial')
      var testing=reference.child(newIndex).push()  // $$$$$$$$$$ it will create a child if it does not exist

      testing.set({
        name: newIndex

      })
      /*var newMessageRef = reference.push();
      newMessageRef.set({
       name:newIndex
      });*/
    }



  }