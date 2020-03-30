import {useState, useEffect} from 'react'
import yelp from '../API/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchAPI = async searchTerm => {
    try{
        const response = await yelp.get('/search', {
            params: {
                limit:50,
                term: searchTerm,
                location: 'san jose'
            }
        })
        setResults(response.data.businesses)
    } catch(err){
        setErrorMessage('Oups, ça marche pas')
    }
    }

    useEffect(() => {
        searchAPI('pasta');
    }, []); 

    return [searchAPI, results, errorMessage]
};