export const requestHeaders: HeadersInit = new Headers()
requestHeaders.set('x-rapidapi-host', process.env.API_HEADER || 'xxx')
requestHeaders.set('x-rapidapi-key', process.env.API_KEY || 'xxx')
