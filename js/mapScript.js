/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let customIcon = L.icon({
    iconUrl: 'assets/koffie.png', // Verander dit naar het pad van je nieuwe icoon
    iconSize: [50, 50], // Pas de grootte van het icoon aan
    iconAnchor: [16, 32], // Pas de positie van het anker aan
    popupAnchor: [0, -32] // Pas de positie van het popupanker aan
});

// bepaal de rechthoek rondom het gebouw van AP
let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
// kleur de rechthoek in met de rode AP-kleur
L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);
// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let apMarker = L.marker([51.23009, 4.41616], { icon: customIcon }).addTo(map);
apMarker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();