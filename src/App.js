import axios from "axios";
import {useState} from "react"
function App() {

const[deg,setdeg]=useState("23 Deg");
const[city,setcity]=useState("France");
const[desc,setdesc]=useState("Raining");
const[enteredvalue,setenteredvalue]=useState("");

function handleInput(event){
    setenteredvalue(event.target.value);
}

function getdata(){
    var weather =axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=ee949cc184264765ad2f53c854eb1a81`);

    weather.then(function(dalta){
       setdeg(dalta.data.main.temp);
       setcity(dalta.data.weather[0].main);
       setdesc(dalta.data.name);

    })
}

    return (<div>
        <div className="flex flex-row justify-center h-[100vh] items-center">
            <div style={{ backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)" }}
                className="p-2 rounded-md">
                <h2 className="font-medium">Hey! 🌥️</h2>
                <p className="text-xs">Do you want to know the weather report :)</p>
                <input onChange={handleInput}type="text" className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name?" />
                <br></br>
                <button onClick={getdata}className="bg-black text-white rounded-lg p-1 text-xs mt-2">Get Report ⚡</button>

                <p className="text-xs mt-2">Degree: {deg} | City: {city} | Weather: {desc}</p>
            </div>

        </div>

    </div>)
}

export default App;