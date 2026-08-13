//This file is an emulation of the non-functional commented-out script in index.html
//"https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

export const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export const submitAPI = function (formData) {
    const chance = Math.random();
    if (chance < 0.5) {
        return true;
    } else {
        return false;
    }
};