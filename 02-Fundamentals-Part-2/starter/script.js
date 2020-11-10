printForecast = function (arr) {
    let s = "";
    for (let i = 0; i < arr.length; i++) {
        s += `...${arr[i]}oC in ${i + 1}days`;
    }
    console.log(s);
}


let arr1 = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];

printForecast(arr1);
printForecast(arr2);


const mark = {
    fullName: "Mark",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        let bmi = this.mass / (this.height ** 2);
        this.bmi = bmi;
        return bmi;
    }
}

const john = {
    fullName: "Mark",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        let bmi = this.mass / (this.height ** 2);
        this.bmi = bmi;
        return bmi;
    }
}

let markBMI = mark.calcBMI();
let johnBMI = john.calcBMI();
let s = markBMI > johnBMI ? `${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})` : `${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`;
console.log(s);