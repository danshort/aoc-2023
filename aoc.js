/**
 * Returns an array of lines for the given `text`.
 *
 * @param {String} text
 *
 * @returns {String[]}
 */
exports.convertToLines = function(text) {  
    return text.split('\n')
}

exports.log = function(){
    console.log(arguments);
}