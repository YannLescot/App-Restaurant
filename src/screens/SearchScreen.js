import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [searchAPI, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter( result => {
            return result.price === price;
        })
    }

    return (
        //Il est possible d'englober plusieurs éléments dans un tag vide pour éviter les erreurs que pourraient causer le fait de wrap ces éléments
        //une view. Ici, le tag vide aura les mêmes propriétés qu'une vue en flex, mais aura moins de chances de déconner.
        <>
            <SearchBar term={term}
            onTermChange={(newTerm) => setTerm(newTerm)} //On peux condenser comme ci-dessous mais vu que j'ai pas compris pourquoi, je le fait pas
            onTermSubmit={() => searchAPI(term)} // de base c'est {() => searchAPI()} mais on peut condenser 
        />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView showsVerticalScrollIndicator={false}>
            <ResultsList  results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList  results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultsList  results={filterResultsByPrice('$$$')} title="Big Spender" />
            <ResultsList  results={filterResultsByPrice('$$$$')} title="Insane" />
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen;