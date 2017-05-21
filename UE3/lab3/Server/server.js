/*jslint node: true */
/*jslint esversion: 6*/
/*jslint eqeqeq: true */

var express = require('express');
var app = express();
var fs = require("fs");
var expressWs = require('express-ws')(app);
var http = require('http');

var simulation = require('./simulation.js');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var cors = require('cors');
var uuid = require('uuid');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//JSON DEVICE ARRAY
var devicelist;

//JSON USERDATA
var jsonuser;


app.get('/', function(req, res){
    res.send('Bitte verwende /api/*');
});


//AUTHENTICATE USER
 app.post('/authenticate', function (req, res) {
     var name = jsonuser.username;
     var pass = jsonuser.password;


     if(req.body.username != name){

         res.json({ success: false, message: 'Authentication failed. User not found.' });

     } else {
         if (req.body.password != pass) {

             res.json({ success: false, message: 'Authentication failed. Wrong password.' });

         } else {
             var secretKey = uuid.v4();
             var claims = {
                 sub: name,
                 iss: 'smarthome'
             }

             var token = jwt.sign(claims,secretKey);

             console.log("token: " + token);
             res.json({
                 success: true,
                 message: 'Enjoy your token!',
                 token: token
             });

         }
     }




 });



//LISTE ALLER DEVICES ANFORDERN
app.get('/devices', function(req, res){

    console.log('liste aller devices anfordern');
    res.json(devicelist.devices[0]);

});


//DEVICE HINZUFÜGEN
app.post('/device/add', function (req, res) {
    console.log('devices hinzufügen');

    var newdevice = req.body;

    devicelist['devices'].push(newdevice);

    res.json(newdevice);
});

//DEVICE LÖSCHEN
app.delete('/device/delete/:_id', function (req, res) {

    var req_id = req.params._id;



    var array_id = null;
    for(var i = 0; i < devicelist.devices.length; i++){
        if(devicelist.devices[i].id == req_id){
            array_id = i;
            devicelist.devices.splice(array_id, 1);
            break;
        }
    }
    console.log('device löschen. id: ' + req_id);
    res.json(devicelist.devices[array_id]);



    console.log(devicelist.devices)
});


//DEVICE BEARBEITEN
app.put('/device/edit/:_id', function (req, res) {

    var req_id = req.params._id;

    console.log('device bearbeiten. id: ' + req_id);

    var array_id = null;
    for(var i = 0; i < devicelist.devices.length; i++){
        if(devicelist.devices[i].id == req_id){
            array_id = i;
            devicelist.devices.splice(array_id, 1, req.body);
            break;
        }
    }


    res.json(req.body);
    console.log(devicelist.devices)
});




//TODO Implementieren Sie hier Ihre REST-Schnittstelle
/* Ermöglichen Sie wie in der Angabe beschrieben folgende Funktionen:
 *  Abrufen aller Geräte als Liste
 *  Hinzufügen eines neuen Gerätes
 *  Löschen eines vorhandenen Gerätes
 *  Bearbeiten eines vorhandenen Gerätes (Verändern des Gerätezustandes und Anpassen des Anzeigenamens)
 *  Log-in und Log-out des Benutzers
 *  Ändern des Passworts
 *  Abrufen des Serverstatus (Startdatum, fehlgeschlagene Log-ins).
 *
 *  BITTE BEACHTEN!
 *      Verwenden Sie dabei passende Bezeichnungen für die einzelnen Funktionen.
 *      Achten Sie bei Ihrer Implementierung auch darauf, dass der Zugriff nur nach einem erfolgreichem Log-In erlaubt sein soll.
 *      Vergessen Sie auch nicht, dass jeder Client mit aktiver Verbindung über alle Aktionen via Websocket zu informieren ist.
 *      Bei der Anlage neuer Geräte wird eine neue ID benötigt. Verwenden Sie dafür eine uuid (https://www.npmjs.com/package/uuid, Bibliothek ist bereits eingebunden).
 */

app.post("/updateCurrent", function (req, res) {
    "use strict";
    //TODO Vervollständigen Sie diese Funktion, welche den aktuellen Wert eines Gerätes ändern soll
    /*
     * Damit die Daten korrekt in die Simulation übernommen werden können, verwenden Sie bitte die nachfolgende Funktion.
     *      simulation.updatedDeviceValue(device, control_unit, Number(new_value));
     * Diese Funktion verändert gleichzeitig auch den aktuellen Wert des Gerätes, Sie müssen diese daher nur mit den korrekten Werten aufrufen.
     */
});


function readUser() {
    "use strict";
    //TODO Lesen Sie die Benutzerdaten aus dem login.config File ein.

    //login.config in json formatiert
    fs.readFile('./resources/login.config', 'utf8', function(err, data) {
        if (err) throw err;


        var user = JSON.parse(data);
        console.log('user auslesen');
        console.log(user);

    });

}

function readDevices() {
    "use strict";
    //TODO Lesen Sie die Gerätedaten aus der devices.json Datei ein.
    /*
     * Damit die Simulation korrekt funktioniert, müssen Sie diese mit nachfolgender Funktion starten
     *      simulation.simulateSmartHome(devices.devices, refreshConnected);
     * Der zweite Parameter ist dabei eine callback-Funktion, welche zum Updaten aller verbundenen Clients dienen soll.

     */

     fs.readFile('./resources/devices.json', 'utf8', function(err, data) {
        if (err) throw err;

             console.log('devices abrufen');
             var devices = JSON.parse(data);
             devicelist = devices;

             simulation.simulateSmartHome(devices.devices, refreshConnected);
    });

    function refreshConnected() {
        "use strict";
        //TODO Übermitteln Sie jedem verbundenen Client die aktuellen Gerätedaten über das Websocket
        /*
         * Jedem Client mit aktiver Verbindung zum Websocket sollen die aktuellen Daten der Geräte übermittelt werden.
         * Dabei soll jeder Client die aktuellen Werte aller Steuerungselemente von allen Geräte erhalten.
         * Stellen Sie jedoch auch sicher, dass nur Clients die eingeloggt sind entsprechende Daten erhalten.
         *
         * Bitte beachten Sie, dass diese Funktion von der Simulation genutzt wird um periodisch die simulierten Daten an alle Clients zu übertragen.
         */


        console.log('CALLBACK............');

    }







}





var server = app.listen(8081, function () {
    "use strict";
    readUser();
    readDevices();

    var host = server.address().address;
    var port = server.address().port;
    console.log("Big Smart Home Server listening at http://%s:%s", host, port);
});

