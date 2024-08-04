const officeQuotes = {

    michaelQuotes: [
        'I love inside jokes. I\'d love to be a part of one someday.',
        'I\'m not superstitious, but I am a little stitious.',
        'I am running away from my responsibilities, and it feels good.'
    ],
    
    dwightQuotes: [
        'Identity theft is not a joke, Jim!',
        'If I were buying my coffin, I would get one with thicker walls so you couldn’t hear the other dead people',
        'I Don\'t Need Them. I Have Superior Genes. And Superior Brainpower.'
    ],
    
    kevinQuotes: [
        'I just want to lie on the beach and eat hot dogs. That\'s all I\'ve ever wanted.',
        'Me think, why waste time say lot word when few word do trick.',
        'I want to be wined and dined and sixty-nined.'
    ]
}

const randomNumber = (num) => {
    return Math.floor(Math.random() * num)
}

let personalQuote = []

for (let prop in officeQuotes) {
    let options = randomNumber(officeQuotes[prop].length)

    switch (prop) {
        case 'michaelQuotes':
            personalQuote.push(`Michael would say, "${officeQuotes[prop][options]}"`)
            break
        case 'dwightQuotes':
            personalQuote.push(`Dwight would say, "${officeQuotes[prop][options]}"`)
            break
        case 'kevinQuotes': 
            personalQuote.push(`Kevin would say, "${officeQuotes[prop][options]}"`)
            break
        default:
            personalQuote.push('no quote for you')
    }
}

const format = (quote) => {
    const formatted = personalQuote.join('\n')
    console.log(formatted)
}

format(personalQuote)