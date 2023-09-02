
export async function fetchCars() {

    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

    const headers = {
		'X-RapidAPI-Key': 'f96f7c0c68mshf786b709cb78bddp159017jsn017b3d3f4507',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch(url, {
        headers: headers
    });

    const result = await response.json();
    return result;
}