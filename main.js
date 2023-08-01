console.log("main.js connected");

// activate evenlistener using forcus and forcus on events within a form
const assignedUserInput = document.body.querySelector("#assigned-user");

const getEquipmentCategories = async() =>{
    
}
const handleFormInputFocus = () => {
  console.log("focus occurred"); 
  
  getEquipmentCategories ();
};


assignedUserInput.addEventListener("focus", handleFormInputFocus);



// create an empty array to store input data
var data = [];

//Declare input data
function submitForm() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;

  var input3 = document.getElementById("input3").value;

  console.log("Input 1:" + input1);
  console.log("Input 2:" + input2);
  console.log("Input 3:" + input3)
}
