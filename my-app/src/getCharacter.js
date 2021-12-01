import { fetchData } from './fetch.js';

function characterDetails(url) {
    return new Promise((resolve) => {
        fetchData(url)
            .then((data) => {
                const promises = Object.values(data.results).map((item) => fetchData(item.url));
                return Promise.all(promises)
                    .then((d) => {
                        resolve(
                            d.map((el) => ({
                                name: el.name,
                                height: el.height / 10, // In meters
                                weight: el.weight / 10, // in KG
                            })),
                        );
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    });
}

function getSingleCharacter(array, characterName) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (characterName === `${array[i].name}`) {
            result.push(array[i]);
        }
    }
    return result;
}

export { characterDetails, getSingleCharacter };
