const calculator = {
    display: document.querySelector("#display"),
    btns: document.querySelector("#buttons"),
    clear() {
        this.display.textContent = "";
    },
    add(num) {
        this.display.textContent += num;
    },
    calculate() {
        this.display.textContent = eval(this.display.textContent);
    },
    verifLastInput(num) {
        const displayArray = this.display.textContent.split(''); 
        const lastElementArray = displayArray[displayArray.length-1];
        if (lastElementArray === '+' || lastElementArray === '-' || lastElementArray === '*' || lastElementArray === '/') {
            displayArray[displayArray.length-1] = num;
            this.display.textContent = displayArray.join('');
        } else {
            this.display.textContent += num;
        }
        console.log(displayArray);
        console.log(num);
    }
};

calculator.btns.addEventListener("click", function(e) {
    if (e.target.matches("button")) {
        const key = e.target.textContent;

        if (!isNaN(key)) {
            calculator.add(key);
        } else if (key === "AC") {
            calculator.clear();
        } else if (key === "=") {
            calculator.calculate();
        } else if (key === "*") {
            calculator.verifLastInput(key);
        } else if (key === "/") {
            calculator.verifLastInput(key);
        } else if (key === "+") {
            calculator.verifLastInput(key);
        } else if (key === "-") {
            calculator.verifLastInput(key);
        } else {
            calculator.add(key);
        }
    }
});
