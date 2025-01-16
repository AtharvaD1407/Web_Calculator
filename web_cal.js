const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

<<<<<<< HEAD
function deleteDisplay() {
    display.value = display.value.slice(0, -1);
}

=======
>>>>>>> e8f7092ce496010397af404fb7674e3d2e3a4134
function calculate() {
    try {
        let result = eval(display.value);
        
        result = Math.round(result * 1000) / 1000; 
        
        display.value = result;
        
        display.value = eval(display.value);
<<<<<<< HEAD
    }
    catch (error){
        display.value = "Error"
    }

}

=======
      

        display.scrollLeft = display.scrollWidth;
    } catch (error) {
        display.value = "Error";
    }

}
>>>>>>> e8f7092ce496010397af404fb7674e3d2e3a4134
