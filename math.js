function square(a) {
        return a * a;
}

const findMax = (arr) => {
        if (!arr || arr.length <= 0) {
                return null;
        }
        return Math.max(...arr);
};

const MathJS = {
        square,
        findMax,
};

module.exports = MathJS;
