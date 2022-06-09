const API_KEY = 'e7a11df02151175c2b20f723cc8545ec'
const API_BASE = 'https://api.themoviedb.org/3'


export const tmdbAuth = `&language=pt-BR&api_key=${API_KEY}`

export const searchPatern = async (endpoint: string) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();

    return json
}
