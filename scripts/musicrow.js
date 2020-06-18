let jumpStopRecords = []
let chattenRecords = []
const polarRecords = []

const createFunkArtist = (artistName, artistAge) => {
    return {
        "artistName": artistName,
        "artistAge": artistAge,
        "musicGenre": "Funk",
        "recordingLabel": "JumpStop Records"
    }

}

const createRapArtist = (artistName, artistAge) => {
    return {
        "artistName": artistName,
        "artistAge": artistAge,
        "musicGenre": "Funk",
        "recordingLabel": "JumpStop Records"
    }

}

const createCountryArtist = (artistName, artistAge) => {
    return {
        "artistName": artistName,
        "artistAge": artistAge,
        "musicGenre": "Country",
        "recordingLabel": "Chatten Records"
    }

}

const createBluegrassArtist = (artistName, artistAge) => {
    return {
        "artistName": artistName,
        "artistAge": artistAge,
        "musicGenre": "Bluegrass",
        "recordingLabel": "Chatten Records"
    }

}

const createPopArtist = (artistName, artistAge) => {
    return {
    "artistName": artistName,
    "artistAge": artistAge,
    "musicGenre": "Pop",
    "recordingLabel": "Polar Records"
    }

}


chattenRecords.push(createCountryArtist("Bruce Atkins", 23))
polarRecords.push(createPopArtist("Jensen Brown", 20))
jumpStopRecords.push(createFunkArtist("Dre Funkz", 25))
jumpStopRecords.push(createRapArtist("Dusta Grimes", 21))
chattenRecords.push(createBluegrassArtist("Bartholomew Danielson", 23))
chattenRecords.push(createCountryArtist("Avilee Dallas", 19))
polarRecords.push(createPopArtist("Austin KinKaid", 22))
jumpStopRecords.push(createRapArtist("Loyoncé Branis", 27))

console.log(chattenRecords)
console.log(polarRecords)
console.log(jumpStopRecords)