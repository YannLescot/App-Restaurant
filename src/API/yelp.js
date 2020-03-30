import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer NPo8BoG2GXs3sGXkdQZKlmq0DoRBO9fRPOnJpsXvjn1N_rgbmRQ4XQGKguwW6dNPjh5MoLSNup6TGZ65Y7AwngXcaCigPXY40X_XCWPYmfexLI887YKlHd6U_Nt9XnYx'
    }
})