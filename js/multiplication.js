var app = new Vue({
    el: '#app',
    data: {
        number1For: 100,
        number2For: 100,
        number1: 0,
        number2: 0,
        disabledAnswer: true,
        disabledExample: false,
        tryCounter: 0,
        rightCounter: 0,
        colorStyle: "black",
        answer: ""
    },
    methods: {
        newExample: function () {
            this.tryCounter = 0;
            this.answer = "";
            this.colorStyle = "black";
            this.statePlusOne = true;
            this.disabledAnswer = false;
            this.number1 = randomInteger(1, this.number1For);
            this.number2 = randomInteger(1, this.number2For);
            console.log(this.number1*this.number2);


        },

        answerO: function () {
            if (this.number1*this.number2 == this.answer) {
                this.colorStyle = "#4CAF50";
                this.rightCounter++;
                this.disabledExample = false;
                this.disabledAnswer = true;
            }
            else {
                this.colorStyle = "#ff3366";
                this.tryCounter++;
                if (this.tryCounter === 3) {
                    this.disabledAnswer = true;
                }
            }

            //   this.statePlusOne = true;
        },
    },
});

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}