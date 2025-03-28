const words = ['seat', 'pen', 'broad', 'vapor', 'ocean', 'red', 'plate', 'late', 'that', 'ring', 'swim', 'shown', 'path', 'law', 'list', 'heard', 'block', 'two', 'pupil', 'were', 'lot', 'pay', 'would', 'tired', 'dull', 'mud', 'sky', 'grew', 'hard', 'ill', 'null', 'frame', 'sport', 'did', 'many', 'been', 'page', 'year', 'trail', 'earth', 'are', 'while', 'off', 'town', 'doing', 'size', 'steel', 'sale', 'swam', 'put', 'zero', 'week', 'mill', 'past', 'aside', 'her', 'cent', 'box', 'fuel', 'block', 'those', 'late', 'sun', 'map', 'silk', 'lady', 'meant', 'still', 'shine', 'range', 'range', 'loud', 'fox', 'gate', 'slide', 'each', 'nails', 'flag', 'exist', 'door', 'luck', 'down', 'press', 'drink', 'new', 'play', 'win', 'loss', 'strong']

function getPassword(){
    let length = document.getElementById('length').value
    if(length === ''){
        length = 8
    }
    const includeLowercase = document.getElementById('includeLowercase').checked
    const includeUppercase = document.getElementById('includeUppercase').checked
    const includeSymbols = document.getElementById('includeSymbols').checked
    const includeNumbers = document.getElementById('includeNumbers').checked

    let chars = ''
    if(includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz'
    if(includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(includeSymbols) chars += '!@#$%&'
    if(includeNumbers) chars += '1234567890'

    let password = ''
    for(let i = 0; i < length; i++){
        password += chars.charAt(Math.floor(Math.random()*chars.length))
    }
    document.getElementById('password').value = password
}

function randomNumber(l){
    return Math.floor(Math.random()*l)
}

function randword(){
    const number = randomNumber(words.length)
    return words[number]
}
