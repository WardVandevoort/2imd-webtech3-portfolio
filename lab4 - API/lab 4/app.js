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
                /*document.querySelector("#grid-item1").src = "img/leffe-card.png";
                document.querySelector("#beer").innerHTML = "Leffe";
                document.querySelector(".grid-container").style.backgroundImage = "url('img/leffebg.jpg')";
                document.querySelector("#paragraph").style.color = " #be9c56";*/
                document.querySelector("#temp").innerHTML = "Cold";
                this.warm = false;
                this.getMeal();
            }
            else{
                /*document.querySelector("#grid-item1").src = "img/hoegaarden-card.png";
                document.querySelector("#beer").innerHTML = "Hoegaarden";
                document.querySelector(".grid-container").style.backgroundImage = "url('img/hoegaardenbg.jpg')";
                document.querySelector("#paragraph").style.color = "#0D155A";*/
                document.querySelector("#temp").innerHTML = "Hot";
                this.warm = true;
                this.getMeal();
            }
        }).catch(err => {
            console.log(err);
        })
    }

    getMeal(){

        let recipe;

        if(this.warm == true){
          recipe = "Beefy Beer Stew";
        }
        else{
          recipe = "Greek Salad Wrap";
        }

        let url2 = `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${recipe}`;
        fetch(url2).then(response => {
            return response.json();
        }).then(data => {
            console.log()
            //document.querySelector("#temp").innerHTML = data.results[0].title;
             /*document.querySelector("#grid-item1").src = "img/hoegaarden-card.png";
                document.querySelector("#beer").innerHTML = "Hoegaarden";
                document.querySelector(".grid-container").style.backgroundImage = "url('img/hoegaardenbg.jpg')";
                document.querySelector("#paragraph").style.color = "#0D155A";*/
        }).catch(err => {
            console.log(err);
        })
    }

    errorLocation(err){
        console.log(err);
    }
}

let app = new App();