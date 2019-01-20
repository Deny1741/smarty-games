var appCircle = new Vue({
    el: '#appGuess',
    data: {
        numberFor: 128,
        number: 0,
        labelInfo: "Новое число",
        answer: '',
        textArea: '',
        tryCounter: 0,
        disabledAnswer: true,
        colorStyle: "black"

    },
    methods: {
        newNumber: function () {
            this.colorStyle =  "black";
            this.disabledAnswer = false;
            this.labelInfo = "Я загадал";
            this.number = randomInteger(1, this.numberFor);
            this.textArea = "";
            this.tryCounter = 0;
            console.log(this.number);
        },

        myAnswer: function () {
            if (this.answer == this.number) {
                this.colorStyle = "#4CAF50";
                this.labelInfo = "Верно!";
                this.tryCounter++;
                this.textArea = this.textArea + this.answer + "    " +  "Правильно"
            }
            if (this.answer > this.number) {
                this.colorStyle = "#008CBA";
                this.labelInfo = "Меньше";
                this.textArea = this.textArea + this.answer + "   " + this.labelInfo + '\n';
                this.tryCounter++;
            }

            if (this.answer < this.number) {
                this.colorStyle = "#ff3366";
                this.labelInfo = "Больше";
                this.textArea = this.textArea + this.answer + "   " + this.labelInfo + '\n';
                this.tryCounter++;
            }

            this.answer = "";
        }
    }
});
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}