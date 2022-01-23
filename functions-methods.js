// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(emailaddress) {

    const indexOfApenstaartje = emailaddress.indexOf('@');

    const domain = emailaddress.substring(indexOfApenstaartje + 1);

    return domain;
}

const domain1 = getEmailDomain("n.eeken@novi-education.nl")
const domain2 = getEmailDomain("t.mellink@novi.nl")
const domain3 = getEmailDomain("a.wiersma@outlook.com")

console.log(domain1);
console.log(domain2);
console.log(domain3);

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(email) {

    switch (getEmailDomain(email)) {
        case "novi-education.nl":
            return "Student";
        case "novi.nl":
            return "Medewerker";
        default:
            return "Extern";
    }
}

const check1 = typeOfEmail("n.eeken@novi-education.nl");
const check2 = typeOfEmail("t.mellink@novi.nl");
const check3 = typeOfEmail("novi.nlaapjesk@outlook.com");
const check4 = typeOfEmail("a.wiersma@outlook.com")

console.log(check1);
console.log(check2);
console.log(check3);
console.log(check4);

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(emailAdress) {
    const containsMonkeyTail = emailAdress.includes('@');
    const containsComma = emailAdress.includes(',');
    const indexLastDot = emailAdress.lastIndexOf('.');
    const lastCharNotDot = indexLastDot !== emailAdress.length - 1;

    if (containsMonkeyTail && !containsComma && lastCharNotDot) {
        return true;
    } else {
        return false;
    }
}

const email1 = checkEmailValidity("n.eeken@novi.nl");
const email2 = checkEmailValidity("tessmellink@novi.nl");
const email3 = checkEmailValidity("n.eekenanovi.nl");
const email4 = checkEmailValidity("n.eeken@novinl.");
const email5 = checkEmailValidity("tessmellink@novi,nl");

console.log(email1, email2, email3, email4, email5);