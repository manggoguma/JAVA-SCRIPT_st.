function fetchEgg(chicken) {

    return Promise.resolve(`${chicken} => 🥚`);
    
    }
    
    function fryEgg(egg) {
    
    return Promise.resolve(`${egg} => 🍳`);
    
    }
    
    function getChicken() {
    
    return Promise.reject(new Error('can not find 🐓'));
    
    }
    
    
    
    async function fetchChicken() {
    
    const fetch = await fetchEgg();
    
    const fry = await fryEgg();
    
    const get = await getChicken();
    
    return [fetch, fry, get];
    
    }
    
    
    
    fetchChicken()
    
    .then((chicken) => console.log(chicken))
    
    .catch((error) => console.log(error));