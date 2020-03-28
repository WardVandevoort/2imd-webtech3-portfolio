class App{
    constructor(){
        this.getLocation();
        this.lat;
        this.lng;
    }

    getLocation(){
        navigator.geolocation.getCurrentPosition(
            this.gotLocation.bind(this), 
            this.errorLocation.bind(this)
            );
    }

    gotLocation(result){
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;
        this.getWeather();
    }

    getWeather(){
        
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3b180513c654dce28a81ff7e98882b74/${this.lat},${this.lng}?units=si`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            document.querySelector("#temp").innerHTML = data.currently.temperature;
            if(data.currently.temperature < 15){
                document.querySelector("#grid-item2").src = "img/leffe-card.png";
                document.querySelector("#beer").innerHTML = "Leffe";
                document.querySelector(".grid-container").style.backgroundImage = "url('img/leffebg.jpg')";
            }
            else{
                document.querySelector("#grid-item2").src = "img/hoegaarden-card.png";
                document.querySelector("#beer").innerHTML = "Hoegaarden";
            }
        }).catch(err => {
            console.log(err);
        })
    }

    errorLocation(err){
        console.log(err);
    }
}

let app = new App();