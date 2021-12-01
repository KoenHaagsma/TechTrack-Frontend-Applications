import { fetchData } from './fetch.js';

// Refactor:
function characterDetails(url) {
    // const newArray = [];
    // const promises = [];
    return new Promise((resolve) => {
        fetchData(url)
            .then((data) => {
                const promises = Object.values(data.results).map((item) => fetchData(item.url));
                // for (const item of keys) {
                //     const p = fetchData(data.results[item].url).then((el) => {
                //         const single = {
                //             name: el.name,
                //             height: el.height / 10, // In meters
                //             weight: el.weight / 10, // in KG
                //         };
                //         // newArray.push(single);
                //         return single
                //     });
                //     promises.push(p);
                // }
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
