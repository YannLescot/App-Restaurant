import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../API/yelp'

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data)
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result){
        return null
    }

    return (
        <View>
            <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) =>{
                return (
                <Image style={styles.image} source={{uri: item}} />
                )
            }}
            />
            <Text>{result.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
    },

})

export default ResultsShowScreen;