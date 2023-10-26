// 4.a. read the value of the input text box and add it to the string 
const input= document.querySelector(`#input`) 
const buttun= document.querySelector(`#button`);
const output = document.querySelector(`#output`);
buttun.addEventListener(`click`, getApi)


//    ”https://www.swapi.tech/api/people/?name=” så vi får en fullständig URI,

//   c. and print the information to the outputbox.
 function getApi(){
                                         //   b. använder URI:n som parameter till en fetch-request,
                                         //    use URL as a parameter to a fetch reques
     fetch( `https://www.swapi.tech/api/people/?name=skywalker`)
      .then(res => res.json())
      .then(data =>
     {
        console.log(data);
        const results = data.result[0];
        //const { name, height, mass, gender, hair_color } = results;
        const s=`name: ${results.properties.name}\nheight: ${results.height}\nmass: ${results.mass}\ngender: ${results.gender}\nhair Color: ${results.hair_color}`;
        output.textContent = s;
        console.log(s);
      })
      .catch(err => console.log(err))

     }
//data is a json object that contain all retrived information about the charactor 
// check the documentation or print it in console.log to see how the object is build ,pick out the height,gender,mass,color and use the to build an string 
//example:: let s = `Value 1: ${value1}, Value 2: ${value2}`;

//Add an eventlist that listen to the buttun and execute the above function above:
//btnjson.addEventListener(`click`,getApi);