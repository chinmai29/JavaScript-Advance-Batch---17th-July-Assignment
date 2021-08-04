//Create a nested array object called operatingSystem and add below key and values
//Name - Ubuntu , version - 18.4 , license - open source


const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};
const values = Object.values(operatingSystem);
console.log(values);

// output -> [ 'Ubuntu', 18.04, 'Open Source' ]