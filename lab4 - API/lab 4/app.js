class App{
    constructor(){
        this.getLocation();
        this.lat;
        this.lng;
        this.warm = true;
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
                document.querySelector("#temp").innerHTML = "cold";
                document.querySelector("#message").innerHTML = "warm up with a ";
                this.warm = false;
                this.getMeal();
            }
            else{
                document.querySelector("#temp").innerHTML = "hot";
                document.querySelector("#message").innerHTML = "cool down with a ";
                this.warm = true;
                this.getMeal();
            }
        }).catch(err => {
            console.log(err);
        })
    }

    getMeal(){

        let recipe;

        if(this.warm == false){
          recipe = "Beefy Beer Stew";
        }
        else{
          recipe = "Greek Salad Wrap";
        }

        let url2 = `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${recipe}`;
        fetch(url2).then(response => {
            return response.json();
        }).then(data => {
            document.querySelector("#dish").innerHTML = data.results[0].title;
            document.querySelector("#grid-item3").src = "img/" + data.results[0].title + ".jpg";
            document.querySelector("#ingredients").innerHTML = data.results[0].ingredients;
        }).catch(err => {
            console.log(err);
        })
    }

    errorLocation(err){
        console.log(err);
    }
}

let app = new App();