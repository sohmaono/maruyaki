import Picture from "./picture";
import { View,Text, StyleSheet, FlatList,SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PictureMap({navigation}){
    const uri="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6ab478d4431b4f3fb1dcb2f576a67467"

    const [data,setData]=useState()

    useEffect(()=>{const fetchData=async function(){
        try{const result=await axios.get(uri)
        setData(result.data.articles)
        console.log(data)
        }catch(error){
            console.error(error)
        }}
        
        fetchData()
    },[])

    // console.log(data[0])

    return(
        data && data.length ?
        <SafeAreaView>
            <FlatList
            data={data}
            renderItem={({item})=>(<Picture data={item} navigation={navigation}/>)}
            keyExtractor={(n,i)=>i.toString()}/>
         </SafeAreaView>
        :
        <Text>Loading</Text>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"row"
    }
})