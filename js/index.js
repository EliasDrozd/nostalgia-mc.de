// Elemente auswählen
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const arrowIcon = document.querySelector('.arrow-icon');

// Changelog-Container ausblenden (zu Beginn)
const changelogContainers = document.querySelectorAll('.changelog-container');
changelogContainers.forEach(container => {
    container.style.display = 'none';
});

// Event Listener für Klick auf den Button
dropdownButton.addEventListener('click', () => {
    const isOpen = dropdownMenu.style.display === 'block';

    // Menü anzeigen/verstecken
    dropdownMenu.style.display = isOpen ? 'none' : 'block';

    // Pfeil rotieren
    arrowIcon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
});

// Changelog anzeigen und Dropdown schließen
const changelogLinks = document.querySelectorAll('.dropdown-menu a');
changelogLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const changelogId = link.getAttribute('data-changelog');
        
        // Alle Changelog-Container ausblenden
        changelogContainers.forEach(container => container.style.display = 'none');
        
        // Den ausgewählten Changelog anzeigen
        const selectedChangelog = document.getElementById(changelogId);
        if (selectedChangelog) {
            selectedChangelog.style.display = 'block';
        }

        // Dropdown-Menü schließen
        dropdownMenu.style.display = 'none';

        // Pfeil zurücksetzen
        arrowIcon.style.transform = 'rotate(0deg)';
    });
});

/* Image Gallery*/

// Allice Map
let currentIndexAllice = 0;
const imagesAllice = [
    '/images/Skywars/allice_1.png',
    '/images/Skywars/allice_2.png',
    '/images/Skywars/allice_3.png',
    '/images/Skywars/allice_4.png',
    '/images/Skywars/allice_5.png'
];

function changeImageAllice(imageSrc) {
    const mainImage = document.getElementById('mainImageAllice');
    mainImage.src = imageSrc; // Setze das Hauptbild auf die Quelle des angeklickten Thumbnails
}

// Desert Map
let currentIndexDesert = 0;
const imagesDesert = [
    '/images/Bedwars/Desert_1.png',
    '/images/Bedwars/Desert_2.png',
    '/images/Bedwars/Desert_3.png'
];

function changeImageDesert(imageSrc) {
    const mainImage = document.getElementById('mainImageDesert');
    mainImage.src = imageSrc; // Setze das Hauptbild auf die Quelle des angeklickten Thumbnails
}