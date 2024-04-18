/*
Pokud pečete podle anglických receptů, často se po váš požaduje rozehřát troubu na uvedenou teplotu. Pokud si ovšem neuvědomíte,
že Američané používají pro měření teploty stupně Fahrenheita namísto Celsia, bude vás na konci pečení čekat nemilé překvapení.

Nastudujte si na České Wikipedii jak se převádějí stupně Fahrenheita na stupně Celsia a vytvořte webovou stránku, která takový převod provede.
Vaše stránka se zeptá uživatele teplotu ve stupních Fahrenheita a pomocí document.body.innerHTML vypíše její ekvivalent ve stupních Celsia.

°C = 5/9 * (°F-32).
C/(°F-32) = 5/9
1/(°F-32) = (5/9)/C
(°F-32) = C/(5/9)
F = (C/(5/9)) + 32

*/

const C = prompt("Kolik °C chceš převést?")
const F = (C / (5 / 9)) + 32

document.body.innerHTML = "<h1>" + C + " °C = " + F + " °F</h1>"
