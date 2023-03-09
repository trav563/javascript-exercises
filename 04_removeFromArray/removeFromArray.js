const removeFromArray = function(num, ...args) {
    const array = []

    num.forEach((item) => {
        if (!args.includes(item)) {
            array.push(item);
          }
        
    });

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
