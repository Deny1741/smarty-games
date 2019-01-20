var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        statePlusOne: true,
        number: 0,
        sum: 0,
        answer: '',
        exampleCounter: 0,
        speed: 1,
        lengthExample: 7,
        numberFor: 100,
        averageSpeed: 0,
        averageLengthExample: 0,
        speedCounter: 0,
        exampleLengthCounter: 0,
        disabledAnswer: true,
        disabledExample: false,
        statistic: '',
        tryCounter: 0,
        colorStyle: "black"
    },
    methods: {
        newExample: function () {
            this.colorStyle = "black";
            if (this.speed < 0) this.speed = this.speed*(-1);
            if (this.lengthExample < 0) this.lengthExample = this.lengthExample*(-1);
            if (this.lengthExample == 0) this.lengthExample = this.lengthExample + 7;
            this.answer = '';
            this.sum = 0;
            this.rightCounter = 0;
            this.statePlusOne = true;
            // this.disabledExample = true;
            this.disabledAnswer = false;

            this.timeLine();
        },

        answerO: function () {
            if (this.answer == this.sum) {
                this.colorStyle = "#4CAF50";
                this.number = ":)";
                this.exampleCounter++;
                this.disabledExample = false;
                this.disabledAnswer = true;
                this.speedCounter = Number(this.speedCounter) + Number(this.speed);
                this.exampleLengthCounter = Number(this.exampleLengthCounter) + Number(this.lengthExample);
                this.averageSpeed = (this.speedCounter/this.exampleCounter).toFixed(1);
                this.averageLengthExample = (this.exampleLengthCounter/this.exampleCounter).toFixed(1);
                this.statistic = "ур: 3;   ~интервал: " + this.averageSpeed + ";    ~длина: " +  this.averageLengthExample;
            }
            else {
                this.colorStyle = "#ff3366";
                this.number = ":(";
                this.tryCounter++;
                if (this.tryCounter === 3) {
                    this.disabledAnswer = true;
                }
            }

            //   this.statePlusOne = true;
        },

        timeLine: function () {
            if (this.statePlusOne === true) {
                this.disabledExample = true;
                this.disabledAnswer = true;
                this.counter++;
                this.number = -this.sum + randomInteger(0, this.numberFor - this.sum);
                this.sum += this.number;
                setTimeout(this.timeLine, this.speed*1000);
            }
            if (this.counter == this.lengthExample) {
                this.statePlusOne = false;
                this.counter = 0;
                this.disabledExample = false;
                this.disabledAnswer = false;
            }
        }
    },
});

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}