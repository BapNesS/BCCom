var app = document.querySelector('#app');
app.route = 'accueil';

// Define routes
page('/BCCom/', accueil);
page('/BCCom/demo_page.html', accueil);
page('/BCCom/cv', cv);
page('/BCCom/realisations', realisations);
page({ hashbang: true });

function accueil() {
    app.route = 'accueil';
}

function cv() {
    app.route = 'cv';
}

function realisations() {
    app.route = 'realisations';
}

window.addEventListener('WebComponentsReady', function(e) {

    var headerPanel = document.querySelector('[main]');
    var pages = document.querySelector('iron-pages');

    pages.addEventListener('iron-selection', function(e) {
        // Only handle the event once
        if (e.detail && e.detail.isSelected) {
            headerPanel.scroller.scrollTop = 0;
        }

    });

});