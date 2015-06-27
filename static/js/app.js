/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/


function display(elems, visible) {
    
    console.log("[display] Les 3 : ", elems, visible);
    
    for (var i = 0; i < elems.length; ++i) {
        var item = elems[i];  
        if ( visible ) {
            item.classList.remove("cvDisable");
        } else {
            item.classList.add("cvDisable");
        }
    }
}

var checkedRadioPro = false;
var checkedRadioForma = false;
var checkedRadioSup = false;

function toggleCv() {
    
    console.log("[toggleCv] Les 3 : ", checkedRadioPro, checkedRadioForma, checkedRadioSup);

    var elemAll = document.getElementsByClassName('cvItem');
    if ( !checkedRadioPro && !checkedRadioForma && !checkedRadioSup ) {
        display(elemAll, true);
    } else {
        display(elemAll, false);
        if ( checkedRadioPro ) {
            var elemPros = document.getElementsByClassName('pro');
            display(elemPros, true);
        }
        if ( checkedRadioForma ) {
            var elemFormas = document.getElementsByClassName('forma');
            display(elemFormas, true);
        }
        if ( checkedRadioSup ) {
            var elemSups = document.getElementsByClassName('sup');
            display(elemSups, true);
        }
    }
}	

function toggleChrono(checkedChrono) {

    var toSort = document.getElementById('listXp').children;
    toSort = Array.prototype.slice.call(toSort, 0);

    var elemToHide = document.getElementsByClassName('cvChronoToHide');
    var elemToShow = document.getElementsByClassName('cvChronoToShow');
    
    if ( !checkedChrono ) {
        toggleCv();

        toSort.sort(function(a, b) {
            var aord = +a.id.split('-')[1];
            var bord = +b.id.split('-')[1];
            // two elements never have the same ID hence this is sufficient:
            return (aord > bord) ? 1 : -1;
        });
        for (var i = 0; i < elemToHide.length; ++i) {
            var item = elemToHide[i];  
            item.classList.remove("cvDisable");
        }
        for (var i = 0; i < elemToShow.length; ++i) {
            var item = elemToShow[i];  
            item.classList.add("cvDisable");
        }
    } else {

        var elemAll = document.getElementsByClassName('cvItem');
        display(elemAll, true);

        toSort.sort(function(a, b) {
            var aord = +a.id.split('-')[2];
            var bord = +b.id.split('-')[2];
            // two elements never have the same ID hence this is sufficient:
            return (aord > bord) ? 1 : -1;
        });
        for (var i = 0; i < elemToHide.length; ++i) {
            var item = elemToHide[i];  
            item.classList.add("cvDisable");
        }
        for (var i = 0; i < elemToShow.length; ++i) {
            var item = elemToShow[i];  
            item.classList.remove("cvDisable");
        }
    }

    var parent = document.getElementById('listXp');
    parent.innerHTML = "";

    // var idType = toSort[i].;
    for(var i = 0, l = toSort.length; i < l; i++) {
        parent.appendChild(toSort[i]);
    }
}

(function(document) {
    'use strict';

    // Grab a reference to our auto-binding template
    // and give it some initial binding values
    // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
    var app = document.querySelector('#app');

    // See https://github.com/Polymer/polymer/issues/1381
    window.addEventListener('WebComponentsReady', function() {
        // imports are loaded and elements have been registered
    });

    // See https://github.com/Polymer/polymer/issues/1381
    window.addEventListener('iron-change', function(e) {
        // imports are loaded and elements have been registered
        console.log("iron-change", e);
        var buttonId = e.srcElement.id;
        if ( buttonId == "checkboxSort" ) {
            toggleChrono(e.srcElement.checked);
        } else if ( buttonId == "radioPro" ) {
            checkedRadioPro = e.srcElement.checked;
            toggleCv();
        } else if ( buttonId == "radioForma" ) {
            checkedRadioForma = e.srcElement.checked;
            toggleCv();
        } else if ( buttonId == "radioSup" ) {
            checkedRadioSup = e.srcElement.checked;
            toggleCv();
        }
    });
    
    

    // custom transformation: scale header's title
    addEventListener('paper-header-transform', function(e) {
        var titleStyle = document.querySelector('.title').style;
        var d = e.detail;
        var m = d.height - d.condensedHeight;
        var scale = Math.max(0.75, (m - d.y) / (m / 0.25)  + 0.75);
        titleStyle.transform = titleStyle.webkitTransform = 'scale(' + scale + ') translateZ(0)';
    });

})(document);
