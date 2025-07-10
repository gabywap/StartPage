// GetStarted - A simple responsive Startpage
// Author: MrAlpha786 (github.con/MrAlpha786)

// Username
//document.getElementById("username").innerHTML = userName;

// Searchbar
const searchEngines = {
    Google: "https://www.google.com/search?q=",
    DuckDuckGo: "https://duckduckgo.com/?q=",
    Bing: "https://www.bing.com/search?q=",
    Yahoo: "https://search.yahoo.com/search?p="
};
const searchField = document.getElementById("search-field");
const clearFieldButton = document.getElementById("clear-field");


if (!Object.keys(searchEngines).includes(searchEngine)) {
    searchEngine = "Google"
}

var searchUrl = searchEngines[searchEngine];

searchField.placeholder = "Keresés " + searchEngine + "...";

// Check searchbar for keystrokes
searchField.addEventListener("keyup", function(event) {

    // If there is some text in searchbar, display clear-field button
    if (searchField.value != "") {
        clearFieldButton.style.visibility = "visible";
    } else {
        clearFieldButton.style.visibility = "hidden";
    }

    // If last keystroke was "Enter" treat it as search-button is clicked
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search-button").click();

    }
});

// Clear text and keep searchbar in focus
function clearField() {
    searchField.value = "";
    clearFieldButton.style.visibility = "hidden";
    searchField.focus()
}

// Search query
function search() {
    if (searchField.value != "") {
        var val = searchField.value;
        window.open(searchUrl + val, "_self");
    }
    clearField();
}


// Show Scrollbar on scrolling
window.addEventListener('scroll', function showScrollbar(e) {
	//console.log(e.target);
	if(e.target!='#document'){
		if (e.target.classList.contains("visible-scrollbar") === false) {
			e.target.classList.add("visible-scrollbar");
			// Hide Scrollbar after 1.5s
			setTimeout(hideScrollbar, 1500, e);
		}
	}
}, true);

// Hide Scrollbar
function hideScrollbar(e) {
    e.target.classList.remove("visible-scrollbar");
}

// Check if dark-mode is enabled
if(localStorage.getItem('darkMode') == 'enabled'){
    document.body.classList.toggle("dark-mode");
}

// Toggle dark-mode of body
function toggleMode() {
    document.body.classList.toggle("dark-mode");

    // Save mode preference to local storage
    // It will keep dark-mode persistant across browser  sessions
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem('darkMode', 'enabled');
    }else{
        localStorage.setItem('darkMode', 'disabled');
    }
}

//tabok és tartalom
var tabs     = document.getElementById('tab-container');
var contents = document.getElementById('content-container');

for (let i = 0; i < cards.length; i++) {
    if (i == 0) tabs.innerHTML += '<div class="tab active" data-tab="tab-' + i + '">' + cards[i].name + '</div>';
    else tabs.innerHTML += '<div class="tab" data-tab="tab-' + i + '">' + cards[i].name + '</div>';

    if (i == 0) contents.innerHTML += '<div class="content active" data-tab="tab-' + i + '"></div>';
    else contents.innerHTML += '<div class="content" data-tab="tab-' + i + '"></div>';
}

var content = document.querySelectorAll('.content'); // csak egyszer!

for (let i = 0; i < cards.length; i++) {
    var sites = Object.keys(cards[i].bookmarks);

    for (let j = 0; j < sites.length; j++) {
        let siteName = sites[j];
        let siteUrl = 'http://' + cards[i].bookmarks[siteName];

        var a_link = document.createElement('a');
        a_link.innerHTML = siteName;
        a_link.href = '#';
        a_link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(siteUrl); // új fülön
        });

        content[i].appendChild(a_link);
    }
}

// tabváltás események (változatlanul hagyhatod)
var tab = document.querySelectorAll('.tab');
for (let i = 0; i < cards.length; i++) {
    tab[i].addEventListener('mouseenter', function () {
        for (let j = 0; j < tab.length; j++) {
            tab[j].classList.remove('active');
        }
        tab[i].classList.add('active');
        for (let j = 0; j < content.length; j++) {
            content[j].classList.remove('active');
        }
        content[i].classList.add('active');
    });
}
const searchEngineSelect = document.getElementById("searchEngineSelect");

searchEngineSelect.addEventListener("change", function() {
    searchEngine = this.value;
    searchUrl = searchEngines[searchEngine];
    searchField.placeholder = "Keresés " + searchEngine + "...";
});


function loadWeather() {
    if (!navigator.geolocation) {
        document.getElementById('weather').innerText = "A helymeghatározás nem támogatott.";
        return;
    }

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Lekérjük a város nevét az OpenStreetMap Nominatim API-val
        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`)
            .then(res => res.json())
            .then(locationData => {
                const city = locationData.address.city || locationData.address.town || locationData.address.village || "Ismeretlen hely";
                
                // Ezután lekérjük az időjárást az Open-Meteo API-val
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
                    .then(response => response.json())
                    .then(data => {
                        const weather = data.current_weather;
                        const temp = weather.temperature;
                        const wind = weather.windspeed;
                        document.getElementById('weather').innerText = `${city}: 🌡 ${temp}°C | 💨 ${wind} km/h`;
                    })
                    .catch(() => {
                        document.getElementById('weather').innerText = "Nem sikerült betölteni az időjárást.";
                    });
            })
            .catch(() => {
                // Ha nem sikerül várost lekérni, csak az időjárást jelenítjük meg
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
                    .then(response => response.json())
                    .then(data => {
                        const weather = data.current_weather;
                        const temp = weather.temperature;
                        const wind = weather.windspeed;
                        document.getElementById('weather').innerText = `🌡 ${temp}°C | 💨 ${wind} km/h`;
                    })
                    .catch(() => {
                        document.getElementById('weather').innerText = "Nem sikerült betölteni az időjárást.";
                    });
            });
    }

    function error() {
        document.getElementById('weather').innerText = "Engedélyezd a helymeghatározást!";
    }
}

loadWeather();


function loadHirstartRSS(rssPath, maxItems, elementId) {
  const rssUrl = encodeURIComponent(`https://www.hirstart.hu/site/publicrss.php?pos=top&pid=8${rssPath}`);
  const endpoint = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

  fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById(elementId);
      list.innerHTML = "";

      data.items.slice(0, maxItems).forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
        list.appendChild(li);
      });
    })
    .catch(err => {
      console.error("RSS betöltési hiba:", err);
      document.getElementById(elementId).innerHTML =
        "<li>Hírek betöltése nem sikerült.</li>";
    });
}

// Top hírek + Sport
loadHirstartRSS('hirek/rss', 8, 'rss-list-index');
loadHirstartRSS('sport/rss', 5, 'rss-list-sport');



