//Create function to calculate calories using BMR
function calorieCalculator (){
  var bmr = 0;
  var gender;
  var weight;
  var height;
  var age; 
  var activityLevel = 0;
  var caloriesCalculated = 0;
  var addCalculation = "Yes";
  var factor;
  var numOfCalculations = 0;
 
  
  //Prompt user for input within while loop
  while (addCalculation === "Yes") {  
    gender = prompt("Please enter \"Male\" or \"Female\".");
    weight = Number(prompt("Please enter your weight in pounds."));
    height = Number(prompt("Please enter you height in inches."));
    age = Number(prompt("Please enter your age."));
    activityLevel = prompt("Please enter you level of activty as \"Sedentary\", \"Moderate\", or \"Active\".");
    addCalculation = prompt("Would you like to add another calculation? Yes or No?");
    
    //calculate the bmr based on gender
    if (gender === "Female") {
      bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    } else if (gender === "Male") {
      bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    }
    
    //create switch for activity level
    switch (activityLevel) {
      case "Sedentary":
        factor = 1.2;
        break;
      case "Moderate":
        factor = 1.5;
        break;
      case "Active":
        factor = 1.8;
        break;
      default:
        document.write("Invalid activity level, please try again." + "\n");    
    }
    
    //Calculate calories and increment calculations  
    caloriesCalculated = (bmr * factor).toFixed(2);
    numOfCalculations++ 
      
    //Create display statements 
    document.write('<pre>');  
    document.write(numOfCalculations + ". Your daily calorie expenditure is  " + caloriesCalculated + "." + "\n\n");
    document.write("\n");

      
    //End while loop
    if (addCalculation !== "Yes") {
      document.write("Thank you!");
          
    }
  }
}

//call the function to run the program
calorieCalculator();