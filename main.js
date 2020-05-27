const { rastro } = require('rastrojs');

console.log('  888888          888    888       d8888  ')
console.log('    "88b          888    888      d8P888  ')
console.log('     888          888    888     d8P 888  ')
console.log('     888  .d88b.  888888 888888 d8P  888  ')
console.log('     888 d88""88b 888    888   d88   888  ')
console.log('     888 888  888 888    888   8888888888 ')
console.log('     88P Y88..88P Y88b.  Y88b.       888  ')
console.log('     888  "Y88P"   "Y888  "Y888      888  ')
console.log('   .d88P                                  ')
console.log(' .d88P"                                   ')
console.log('888P"                                     ')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

aux = 0
key = 'OJ303036665BR'

async function example() {
    
    var track = await rastro.track(key);
    if(track[0].isInvalid){
        track = await rastro.track(key);
        aux++
        console.log('deu ruim'+aux)
        example()
        
        
    } else {
        if(track[0].tracks.length > 3) {
            console.log(track[0].tracks)
            console.log('asd')
        } else {
            example()
        }
    }

};



example()


