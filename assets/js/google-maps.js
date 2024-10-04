function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -7.488765911086714, lng: 112.43405752824161};

    // Membuat peta
    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    // Marker untuk lokasi
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Mojokerto, East Java' // Judul Lokasi
    });

    // Mengatur tautan untuk membuka Google Maps
    var openMapsLink = document.getElementById('open-maps');
    if (openMapsLink) {
        openMapsLink.href = `https://www.google.com/maps/@${myLatLng.lat},${myLatLng.lng},17z`;
    } else {
        console.error("Element with ID 'open-maps' not found");
    }
    
}

// Inisialisasi peta ketika halaman selesai dimuat
window.onload = initMap;

