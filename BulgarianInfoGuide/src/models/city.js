import {get, post, update} from './requester';

function loadCities(callback) {
    // Request cities from db
    get('appdata', 'cities', 'kinvey')
        .then(callback);
}

function loadCityDetails(cityId, onCitySuccess) {
    get('appdata', 'cities/' + cityId, 'kinvey')
        .then(onCitySuccess);
}

function loadCityWonders(cityName, callback){
    get('appdata', cityName, 'kinvey')
        .then(callback);
}


function edit(cityName, cityId, name, description, imageUrl, callback) {
    let cityWonderData = {
        name: name,
        description: description,
        image: imageUrl

    };
    update('appdata', cityName.toLowerCase() + cityId, cityWonderData, 'kinvey')
        .then(()=>callback(true));
}

function create(cityName, name, description, imageUrl, callback) {
    let cityWondersData = {
        name: name,
        description: description,
        image: imageUrl
    };
    post('appdata', cityName, cityWondersData, 'kinvey')
        .then(()=>callback(true));
}

export {loadCities, loadCityDetails, loadCityWonders, edit, create}


