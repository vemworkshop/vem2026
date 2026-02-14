var map = L.map("map").setView([-8.1317639,-34.9039249], 17) // Set the view to London, zoom level 13

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 25,
    attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

L.marker([-8.1317639,-34.9039249])
    .addTo(map)
    .bindPopup(
        "Mar Hotel Recife"
    )
