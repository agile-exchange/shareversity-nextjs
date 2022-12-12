import { TypePredicateKind } from "typescript";

// create a function that capitalizes the first letter of every word in a string except for the words "in" and "of"
export function titleCase(str) {
  
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (word === "in" || word === "of" || word === "the") {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join(" ");
}

// create a function that checks if that a string is less than 100 characters long and returns only the first 100 characters if not
export function headlineLength(str) {
  return str.length > 100 ? str.substring(0, 100) + "..." : str;
}

export function validateStringNotEmpty(str) {
  if (str.trim().length === 0) {
    return 'Invalid input - must not be empty';
  }
  return "true";
}

export function validateApplicationLink(link){
  if(!link.startsWith("http")){
    return 'Invalid input - must be a valid http link';
  }
  return "true";
}

export function validateCompensation(comp){
  var numPattern = /^[0-9\-]+$/;

  const result = numPattern.test(comp);

  if(!(result || comp.includes("$") || comp.includes(","))){
    return "Invalid number input";
  }
  return "true";
}

export function validateFormData(input) {
  var val = validateStringNotEmpty(input.jobName);
  if(val!="true"){
    return val;
  }
  val = validateStringNotEmpty(input.description);
  if(val!="true"){
    return val;
  }
  val = validateStringNotEmpty(input.category);
  if(val!="true"){
    return val;
  }
  return "true";
}

export function validateEduEmailAccount(email){
  if(!email.includes("edu")){
    return false;
  }
  return true;
}

export function validateEmail(email){
  if(String(email).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )==null){
      return false;
    }
    return true;
};

export function verifyPassword(password) {  
  //check empty password field  
  if(password == "") {  
     return "Password cant be empty"; 
  }  
   
 //minimum password length validation  
  if(password.length < 6) {    
     return "Password length must be atleast 8 characters";  
  }  
  
//maximum length of password validation  
  if(password.length > 15) {  
     return "Password length must not exceed 15 characters";  
  } 

  return "Password is correct";  
} 

export function validateSchedule(comp){
  let matchPattern =comp.match(/\d+/g);
  if(!matchPattern){
    return "Invalid Schedule, must contain number";
  }

  return "Valid Schedule entered";
}

export function validateLocation(location){
  var result = /\d/.test(location);
  if(result){
    return "Invalid Location, must contain valid Location not number";
  }
  return "Valid Location";
}

export function validateApplicationDeadline(deadline){
  var currDate = new Date();

  const myArray = deadline.split("-");

  if(myArray[0] < currDate.getFullYear() ||
        myArray[1] < currDate.getMonth() ||
        myArray[2] < currDate.getDate()) {
    return "Invalid Application deadline, deadline can't before todays date";
  }
  return "Valid Application Deadline";
}

//validateDuration

export function validateDuration(duration){
  if(duration<30){
    return "Please enter a valid input, duration can't be less than a month";
  }
  return "Duration is valid";
}

export function validateLoginEmail(email) {
  if(email.trim().length === 0) {
      return "Email cant be empty"; 
  }  
  return "true";
}


export function validateLoginPassword(password) {
  if(password.trim().length === 0) {
    return "Password cant be empty"; 
  }  
  return "true";
}