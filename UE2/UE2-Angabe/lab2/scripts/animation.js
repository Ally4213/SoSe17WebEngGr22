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
	/*
	 Passen Sie die Höhe des Temperaturstandes entsprechend dem aktuellen Wert an.
	 Beachten Sie weiters, dass auch die Beschriftung des Thermometers (max, min Temperatur) angepasst werden soll.
	 */

	var range = max - min;
	var x = 283 / range;
	var cur = 323.58843 - (x * current);

	$("#" + id + " #path3680").attr("d", "M 323.577 408.949 V " + cur + " H 254.64 L 253.93289 406.35969 C 229.95989 418.59369 214.201 444.10305 214.201 472.81205 214.201 513.56405 247.356 546.71805 288.109 546.71805 328.862 546.71805 362.017 513.56405 362.017 472.81205 362.017 444.10405 345.552 421.18405 321.577 408.94905 Z M 318.681 482.906 C 308.363 482.906 299.995 474.539 299.995 464.22 299.995 453.901 308.352 445.534 318.681 445.534 328.999 445.534 337.365 453.901 337.365 464.22 337.365 474.539 328.999 482.906 318.681 482.906 Z");

	$("#" + id + " #tspan3817").text(min);

	$("#" + id + " #tspan3817-6").text(max);
	
	/*
	 * TODO
	 * Insert current value of thermometer on top;
	 */

}


function drawBulb(id, src, min, max, current, values) {
	if (current === 1) {
		$("#" + id + " path").css({
			fill : "#FFA500"
		});

	}
}

function drawCam(id, src, min, max, current, values) {
	/* 
	  Verändern Sie die Darstellung der Webcam entsprechend den Vorgaben aus der Angabe.
	  Dabei soll jedoch nicht nur einfach die Farbe der Elemente verändert werden, sondern es soll eine Kopie der zu verändernden Elemente erstellt
	   und anschließend die aktuellen durch die angepassten Kopien ersetzt werden.
	 */

	if (current === 0) {
		console.log("currently the camera is off");

		$("#" + id + " #circle8").css({
			fill : "#000000"
		});
		$("#" + id + " #path10").css({
			fill : "#FFFFFF"
		});
	}
}

function drawShutter(id, src, min, max, current, values) {
	switch (current) {
	case 0:

		$("#" + id + " #path4559-2").css({
			opacity : 0
		});
		$("#" + id + " #path4559-2-6").css({
			opacity : 0
		});
		$("#" + id + " #path4559-2-5").css({
			opacity : 0
		});

		break;

	case 1:


		$("#" + id + " #path4559-2").css({
			opacity : 1
		});
		$("#" + id + " #path4559-2-6").css({
			opacity : 0
		});
		$("#" + id + " #path4559-2-5").css({
			opacity : 0
		});

		break;

	case 2:

		$("#" + id + " #path4559-2").css({
			opacity : 1
		});
		$("#" + id + " #path4559-2-6").css({
			opacity : 1
		});
		$("#" + id + " #path4559-2-5").css({
			opacity : 1
		});


	}
}


function LoadSVGToDom() {
	jQuery('img.svg').each(function() {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');



		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG

			$img.replaceWith($svg);

		}, 'xml');

	});

}