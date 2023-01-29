export async function getAllGames() {
    try {
        const response = await fetch("http://localhost:3000/games");
        return await response.json();
    } catch (error) {
        console.error(error);
    } 
}

export async function getGameByName(name) {
    try {
        const response = await fetch('http://localhost:3000/games/name/'+ name);
        return await response.json();
    } catch (error) {
        return [];
    } 
}

export async function getGameByGenre(genre) {
    try {
        const response = await fetch('http://localhost:3000/games/genre/'+ genre);
        return await response.json();
    } catch (error) {
        return [];
    } 
}

export async function getGameByPlatform(platform) {
    try {
        const response = await fetch('http://localhost:3000/games/platform/'+ platform);
        return await response.json();
    } catch (error) {
        return [];
    } 
}