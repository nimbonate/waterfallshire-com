//                              //
// Some random handy functions! //
//                              //

// First letter is uppercase
export function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// First Letter Of Every Word In A String Is Uppercase
export function ucFirstLetterEachWord(string) {
    return string.split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

// UC on first letters, combine words (no space)
export function PascalCase(string) {
    return string.split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join('');
}

// Generate random ID
export function genId(length) {
    var result           = "";
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

// Date and Time //
export function readTimestamp(timestamp) {
    const dateObject = new Date(timestamp.seconds*1000);
    let dd = dateObject.getDate();
    let mm = dateObject.getMonth() + 1; // January is 0!
    const yyyy = dateObject.getFullYear();
    let hrs = dateObject.getHours();
    let mins = dateObject.getMinutes();

    if (dd < 10) {
        dd = `0${dd}`;
    }
    if (mm < 10) {
        mm = `0${mm}`;
    }
    if (hrs < 10) {
        hrs = `0${hrs}`;
    }
    if (mins < 10) {
        mins = `0${mins}`;
    }
    const date = `${mm}/${dd}/${yyyy}`;
    const time = `${hrs}:${mins}`;

    return {
        time,
        date
    };
}