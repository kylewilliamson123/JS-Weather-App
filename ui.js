class UI {
    constructor() {
      this.uiContainer = document.getElementById("content");
      this.city;
      this.defaultCity = "London";
    }
  
    populateUI(data) {
      
  
      this.uiContainer.innerHTML = `
          
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h5 class="card-title">${data.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}<br>
                  Heat index: ${data.main.feels_like}<br>
                  Wind speed: ${data.wind.speed}<br>
                  Wind Direction:${data.wind.deg}</h6>
                  <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
                  
              </div>
          </div>
          
          `;
    }

}