const cityUrl = "http://localhost:9800/location";


const getCity = async() => {
    let response = await fetch(cityUrl,{method:'GET'})
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option') //<option></option>
        let text = document.createTextNode(item.state) // Delhi
        element.appendChild(text) //<option>Delhi</option>
        element.value = item.state_id //<option value="1">Delhi</option>
        document.getElementById('city').appendChild(element)
        //<select><option value="1">Delhi</option></select>
    })
}