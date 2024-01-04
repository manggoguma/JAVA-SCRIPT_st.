function fetchEgg(chicken) {
    return Promise.resolve(`${chicken}=>🥚`)
}

fetchEgg('🐔')
.then((egg)=>console.log(egg));

function fryEgg(egg) {
    return Promise.resolve(`${egg}=>🍳`)
}

function getChicken() {
    return Promise.resolve(`⭐=>🐔`);
}

getChicken()
.then((chicken) => {
    return fetchEgg(chicken);
})
.then((egg)=> fryEgg(egg))
.then((friedEgg)=> console.log(friedEgg));