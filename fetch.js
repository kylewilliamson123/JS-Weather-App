class Fetch {
    async getCurrent(input) {
        const api = '73d46cd13b272768a99e3af6e4a4e00a';

        

        let response = await fetch (
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api}&units=imperial`
            );
        
        let data = await response.json();

        console.log(data);
        return data;

       }
       
}