const storage = {
    CITIES: 'favouriteCities',
    LAST_CITY: 'lastCity',
    addOrRemoveCity: function(city){
        let list = this.getCities();
        list = !this.checkCity(city) ? [...list, city] :
            list.filter(item => item !== city);
        this._stringifyCities(list)
    },
    getCities: function(){
        let cities = localStorage.getItem(this.CITIES);
        if(!cities){
            this._stringifyCities([]);
        }
        return JSON.parse(cities);
    },
    setLastCity: function(city){
        localStorage.setItem(this.LAST_CITY, city)
    },
    getLastCity: function(){
        return localStorage.getItem(this.LAST_CITY);
        // let cities = this.getCities();
        // return cities.length > 0 ? cities[cities.length - 1] : '';

    },
    checkCity: function(city){
        let cities = this.getCities();
        return cities.length > 1 ? cities.includes(city) : false;
    },
    _stringifyCities: function(cities){
        let citiesJSON = JSON.stringify(cities);
        localStorage.setItem(this.CITIES, citiesJSON);
    },
}

function createCity(cityName){
    let city = document.createElement('li');
    city.className = 'favourites__city';
    city.textContent = cityName;

    let remove = document.createElement('div');
    remove.className = 'favourites__remove'

    city.append(remove);
    return city;
}

export {storage, createCity}