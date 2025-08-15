//Declare all parameters needed for the working of the api
const parameters = {
	access_key: "e25e90b2234c7a326500203fa84f818d",
	query: "kribi",
	units: "m"
}
	fetch(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&query=${parameters.query}&units=${parameters.units}`)
		.then(res => res.json())
		.then(data =>{
			if (data.success === false ){ // if and else is important to show all specific error we can have
			console.log(`Error ${data.error.code}: ${data.error.info}`)
			}else{
					const {current, location, request } = data;
					// location is the keyword to use inorder to have the name of the city
					console.log("A",location.name + " nous sommme le",location.localtime
		)
			}
	});		

				//Not yet available

		// const weather = (location, unit, callback)=>{
		// 	const url = `http://api.weatherstack.com/current?access_key=e25e90b2234c7a326500203fa84f818d&query=${encodeURIComponent(location)}
		// 	&units=${unit}`

		// 	fetch(url);
			
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		if(data.success === false){
		// 			callback(`Impossible de renvoyer vos informations.Error ${data.error.code}: ${data.error.info}`)

		// 		}else{
		// 			const {current, location, request } = data;
		// 			console.log("A",location.name + " nous sommme le",location.localtime);
		// 		}
		// 	});

		// }