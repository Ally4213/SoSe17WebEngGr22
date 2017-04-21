/*
  TODO
 Implementieren Sie die folgenden Funktionen um die SVG-Grafiken der Geräte anzuzeigen und verändern.

 Hinweise zur Implementierung:
 - Verwenden Sie das SVG-Plugin für jQuery, welches bereits für Sie eingebunden ist (Referenz: http://keith-wood.name/svg.html)
 - Sie dürfen das Bild bei jedem Funktionenaufruf neu laden und Ihre Veränderungen vornehmen;
 Tipp: Durch Überschreiben der OnLoad Funktion von svg.load() können Sie die Grafik noch bevor diese zum ersten Mal angezeigt wird verändern
 - In allen bereit gestellten SVG-Grafiken sind alle für Sie relevanten Stellen mit Labels markiert.
 - Da Ihre Grafiken nur beim Laden der Übersichtsseite neu gezeichnet werden müssen, bietet es ich an die draw_image Funktionen nach dem vollständigen Laden dieser Seite auszuführen.
 Rufen Sie dazu mit draw_image(id, src, min, max, current, values) die zugrunde liegende und hier definierte Funktione auf.
 */


function drawThermometer(id, src, min, max, current, values) {
  /* TODO
   Passen Sie die Höhe des Temperaturstandes entsprechend dem aktuellen Wert an.
   Beachten Sie weiters, dass auch die Beschriftung des Thermometers (max, min Temperatur) angepasst werden soll.
   */
	console.log("called drawThermometer");
	console.log(id +", "+ src +", "+ min +", "+ max +", "+ current +", "+ values);
}


function drawBulb(id, src, min, max, current, values) {
  // TODO
	console.log("called drawBulb");
	console.log(id +", "+ src +", "+ min +", "+ max +", "+ current +", "+ values);
}

function drawCam(id, src, min, max, current, values) {
  /* TODO
    Verändern Sie die Darstellung der Webcam entsprechend den Vorgaben aus der Angabe.
    Dabei soll jedoch nicht nur einfach die Farbe der Elemente verändert werden, sondern es soll eine Kopie der zu verändernden Elemente erstellt
     und anschließend die aktuellen durch die angepassten Kopien ersetzt werden.
   */
	console.log("called drawCam");
	console.log(id +", "+ src +", "+ min +", "+ max +", "+ current +", "+ values);
	if(current ===0){
		console.log("currently the camera is off");
		$("#circle8").css({ fill: "#000000" });
	}
	else{
		$("#circle8").css('fill','#000000');
	}
}

function drawShutter(id, src, min, max, current, values) {
  // TODO
	console.log("called drawShutter");
	console.log(id +", "+ src +", "+ min +", "+ max +", "+ current +", "+ values);
}

function ChangeSvg(img, selector, newstyle) {
// IDEE> IMG PER ID SUCHEN, DANN STYLE AENDERN UND DANN NEUES SVG ANZEIGEN...
	//SOLLTE DER CODE HIER MACHEN / nur STYLE NOCH NICHT NUR ID UND CLASS WIRD GETAUSCHT.
	//TODO> SVG-BILD BRAUCHT EINE EINDEUTIGE ID!!!!


        var $img = $(img);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

}
