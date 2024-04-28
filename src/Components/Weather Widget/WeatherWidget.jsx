import { useState, useEffect } from "react";

const WeatherWidget = () => {
    const [weather, setWeather] = useState(null);
    const apiKey = "e06cd9af4032a7ee6f5ce85c66698fe0";
    const [city, setCity] = useState("France");

    const handleCitySelection = e => {
        const res = e.target.value;
        setCity(res);
    }
    console.log(city);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(res => res.json())
            .then(data => setWeather(data))
            .catch(error => console.error("Error fetching weather data:", error));
    }, [city]);


    return (
        <div>
            <form onChange={handleCitySelection}>
                <label className="form-control lg:w-1/3 w-fit p-3 mx-auto mt-5">
                    <div className="label">
                        <span className="">Select Country Name</span>
                    </div>
                    <select className="select select-bordered" name="country" required>
                        <option selected>France</option>
                        <option>Italy</option>
                        <option>Spain</option>
                        <option>England</option>
                        <option>Netherlands</option>
                        <option>Switzerland</option>
                    </select>
                </label>
            </form>
            <div className="lg:w-1/2 w-fit mx-auto mt-10">
                <div className="hero bg-base-200 rounded-2xl">
                    <div className="hero-content flex-col ">
                        <h2 className="lg:text-3xl text-2xl">Weather in <span className="font-bold">{city}</span></h2>
                        {weather && (
                            <div className="flex flex-col">
                                <p className="text-xl">Temperature: {weather?.main?.temp}°C</p>
                                <p className="text-xl">Weather: {weather?.weather[0]?.description}</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WeatherWidget;