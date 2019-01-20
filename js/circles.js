var appCircle = new Vue({
    el: '#appCircle',
    data: {
        result: 0,
        number: 0,
        tempNumber: 0,
        rightCount: 0,
        tryCount: 0,
        colorStyle: "black",
        disabledAnswer: true,
        circle128: false,
        circle64: false,
        circle32: false,
        circle16: false,
        circle8: false,
        circle4: false,
        circle2: false,
        circle1: false
    },
    methods: {
        newNumber: function () {
            this.colorStyle = "black";
            this.disabledAnswer = false;
            this.rightCounter = 0;
            this.tempNumber = 0;
            this.number = 0;
            this.result = 0;
            this.circle128 = false;
            this.circle64 = false;
            this.circle32 = false;
            this.circle16 = false;
            this.circle8 = false;
            this.circle4 = false;
            this.circle2 = false;
            this.circle1 = false;
            this.number = randomInteger(1, 255);
            this.tempNumber = this.number;
        },
        radioCircle128: function() { if (this.circle128 === true) {this.result += 128; } if  (this.circle128 === false) {this.result -= 128;} console.log(this.result);},
        radioCircle64: function(){if (this.circle64 === true) { this.result += 64;} if  (this.circle64 === false) { this.result -= 64;} console.log(this.result)},
        radioCircle32: function(){if (this.circle32 === true) { this.result += 32;} if  (this.circle32 === false) { this.result -= 32;} console.log(this.result)},
        radioCircle16: function(){if (this.circle16 === true) { this.result += 16;} if  (this.circle16 === false) { this.result -= 16;} console.log(this.result)},
        radioCircle8: function(){if (this.circle8 === true) { this.result += 8;} if  (this.circle8 === false) { this.result -= 8;} console.log(this.result)},
        radioCircle4: function(){if (this.circle4 === true) { this.result += 4;} if  (this.circle4 === false) { this.result -= 4;} console.log(this.result)},
        radioCircle2: function(){if (this.circle2 === true) { this.result += 2;} if  (this.circle2 === false) { this.result -= 2;} console.log(this.result)},
        radioCircle1: function(){if (this.circle1 === true) { this.result += 1;} if  (this.circle1 === false) { this.result -= 1;} console.log(this.result)},

        answerCircle: function () {
            if (this.result === this.tempNumber) {
                this.colorStyle = "#4CAF50";
                this.number = ":)";
                this.disabledAnswer = true;
                this.rightCount++;
            }
            else {
                this.colorStyle = "#ff3366";
                this.number = ":(";
            }

        }
    }
});
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}