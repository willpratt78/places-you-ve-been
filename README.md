```javascript
Describe: locationList()

Test: "It should create an object"
code: let list = new LocationList();
console.log(locationList)
Expected Output: {}

Describe: LocationInfo()

Test: "It should create a location object"
code: let local = new LocationInfo("Tucson","Usa","winter","2022","Old Pueblo");
Expected Output: {city: Tucson, country:"Usa", season: winter, year:2022, landmark: Old Pueblo}

Describe: locationList.prototype.addLocation()

Test: "it should add a locationInfo object to our locationList object"
code: 
let list = new LocationList() 
let local = new LocationInfo("Tucson","Usa","winter","2022","Old Pueblo");
list.addLocation(local);
Expected Output= {{city: Tucson, country:"Usa", season: winter, year:2022, landmark: Old Pueblo}}

Describe: locationList.prototype.assignId()

Test: "it should assign an Id to a locationList object"
code: const list = new LocationList() 
const local = new LocationInfo("Tucson","Usa","winter","2022","Old Pueblo");
list.addLocation(local);
Expected Output= {{city: Tucson, country:"Usa", season: winter, year:2022, landmark: Old Pueblo, id=1}}

Describe: locationList.prototype.findLocation()

Test: "it should find a locationInfo object by Id"
code: const list = new LocationList() 
const local = new LocationInfo("Tucson","Usa","winter","2022","Old Pueblo");
list.addLocation(local);
list.findLocation(1);
Expected Output= {city: Tucson, country:"Usa", season: winter, year:2022, landmark: Old Pueblo, id=1}

Describe: locationList.prototype.deleteLocation()

Test: "it should find and delete a locationInfo object by Id"
code: const list = new LocationList() 
const local = new LocationInfo("Tucson","Usa","winter","2022","Old Pueblo");
list.addLocation(local);
list.deleteLocation(1);
Expected Output= {}
```

