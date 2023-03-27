function calculatorEvent(){

    this.mainEvent = document.querySelector('.main-calc');
    this.mainEvent.addEventListener('click', function(e){

        (new calculatorShow(e));
        (new calculatorCompute(e));
        (new calculatorCancel(e));
        (new calculatorReset(e));
    });
    
}

function calculatorShow(e) {

    this.show = function(){

        this.check = function (){

            if(e.target.getAttribute('value')){

                return true;
            }

            return false;
        };

        this.display = function (){

            this.targetValue = e.target.getAttribute('value') || "";

            this.inputValue = document.querySelector("input[name='calc']");
            this.inputValue.value += this.targetValue;
        };

        this.check() ? this.display() : "";

    }();

}


function calculatorCompute(e){

    this.check = function(){

        if(e.target.getAttribute('submit')){

            return true;
        }

        return false;
    };

    this.compute = function(){

        this.inputValue = document.querySelector("input[name='calc']");
        this.expression = new String(this.inputValue.value);
        this.inputValue.value = eval(this.expression.toString());
    };

    this.check() ? this.compute() : "";
}


function calculatorCancel(e){

    this.check = function(){

        if(e.target.getAttribute('cancel')){

            return true;
        }

        return false;
    };

    this.cancel = function(){

        this.inputValue = document.querySelector("input[name='calc']");
        this.expression = new String(this.inputValue.value);
        this.inputValue.value = this.expression.slice(0, -1);
    };

    this.check() ? this.cancel() : "";
}

function calculatorReset(e){

    this.check = function(){

        if(e.target.getAttribute("reset")){

            return true;
        }

        return false;
    };

    this.reset = function(){

        this.inputValue = document.querySelector("input[name='calc']");
        this.inputValue.value = "";
    };

    this.check() ? this.reset() : "";
}

new calculatorEvent();

