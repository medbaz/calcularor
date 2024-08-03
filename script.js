class Calculator {
  constructor(currentOperandText, previousOperandText) {
    this.currentOperandText = currentOperandText;
    this.previousOperandText = previousOperandText;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = "";
  }

  appendValue(number) {
    if (
      (number === "," && this.currentOperand === "") ||
      (number === "," && this.currentOperand.includes(","))
    ) {
      return;
    }
    this.currentOperand = this.currentOperand + number;
  }

 
  compute(number) {
    if (this.operation === "" ||  this.previousOperand === "" || this.currentOperand === "" ) { return;} 
    console.log(number);
    if (number === '=') {
    switch (this.operation) {
      case "+":
        this.currentOperand =
          parseFloat(this.currentOperand) + parseFloat(this.previousOperand);
        
        break;
      case "-":
        this.currentOperand =
          parseFloat(this.previousOperand) - parseFloat(this.currentOperand);
        
        break;
      case "/":
        this.currentOperand =
          parseFloat(this.previousOperand) / parseFloat(this.currentOperand);
        
        break;
      case "*":
        this.currentOperand =
          parseFloat(this.currentOperand) * parseFloat(this.previousOperand);
        
        break;

      default:
        break;
    }
      this.previousOperand = "";
      this.operation = "";
    }else{
       switch (this.operation) {
      
      case "+":
        this.previousOperand =
          parseFloat(this.currentOperand) + parseFloat(this.previousOperand);
        
        break;
      case "-":
        this.previousOperand =
          parseFloat(this.previousOperand) - parseFloat(this.currentOperand);
        
        break;
      case "/":
        this.previousOperand =
          parseFloat(this.previousOperand) / parseFloat(this.currentOperand);
        
        break;
      case "*":
        this.previousOperand =
          parseFloat(this.currentOperand) * parseFloat(this.previousOperand);
        
        break;

      default:
        break;
    }
    }
  }


 chooseOperation(MYoperation) {
    
    if (this.currentOperand === "") {
      return;
    }
    // console.log('this.operation');
    // console.log(this.operation);
    // console.log('this.previousOperand');
    // console.log(this.previousOperand);
   
    // console.log('this.previousOperand');
    // console.log(this.previousOperand);
    
    if (this.previousOperand !== '') {

      
    
    this.compute()
    // switch (this.operation) {
      
    //   case "+":
    //     this.previousOperand =
    //       parseFloat(this.currentOperand) + parseFloat(this.previousOperand);
        
    //     break;
    //   case "-":
    //     this.previousOperand =
    //       parseFloat(this.previousOperand) - parseFloat(this.currentOperand);
        
    //     break;
    //   case "/":
    //     this.previousOperand =
    //       parseFloat(this.previousOperand) / parseFloat(this.currentOperand);
        
    //     break;
    //   case "*":
    //     this.previousOperand =
    //       parseFloat(this.currentOperand) * parseFloat(this.previousOperand);
        
    //     break;

    //   default:
    //     break;
    // }
    this.operation = MYoperation;
    this.currentOperand = "";
  }
  else{
    this.previousOperand = this.currentOperand
    this.operation = MYoperation;
    this.currentOperand = "";
  }
    
  }

  delet() {
    console.log(this.currentOperand.toString());
    this.currentOperand = this.currentOperand.toString().slice(0,-1)
  }

  updateDisplay() {
    currentOperandText.innerHTML = this.currentOperand;
    previousOperandText.innerHTML = this.previousOperand + ` ${this.operation}`;
  }
}

const previousOperandText = document.querySelector(".PreviousOperand");
const currentOperandText = document.querySelector(".calculation");
const numbers = document.querySelectorAll("[data-number]");
const operations = document.querySelectorAll("[data-operation]");
const actions = document.querySelectorAll("[data-action]");
const equal = document.querySelector("[data-compute]");

console.log(previousOperandText.innerHTML);

const myCalculator = new Calculator(currentOperandText, previousOperandText);

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    myCalculator.appendValue(number.innerHTML);
    myCalculator.updateDisplay();
  });
});

operations.forEach((MYoperation) => {
  MYoperation.addEventListener("click", () => {
    myCalculator.chooseOperation(MYoperation.innerHTML);
    myCalculator.updateDisplay();
  });
});

equal.addEventListener("click", () => {
  myCalculator.compute(equal.innerHTML);
  myCalculator.updateDisplay();
});


actions.forEach(element => {
  element.addEventListener("click",()=>{
    if (element.innerHTML == 'AC') {
      myCalculator.clear()
      myCalculator.updateDisplay()
    }else{
      myCalculator.delet()
      myCalculator.updateDisplay()
    }
  })
});
