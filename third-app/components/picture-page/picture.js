import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native"

export default function Picture({data,navigation}){
    console.log(data,"hello")
    return(
    <TouchableOpacity
     style={styles.container}
     onPress={()=>navigation.navigate("Detail",{contentObj:data})}>
        <Image
         style={styles.picStyle}
         source={{uri:data.urlToImage}}/>
        <Text
         numberOfLines={2}
         style={styles.text}>
            {data.title}
        </Text>
    </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        gap:"10",
        marginHorizontal:10,
        marginBottom:7
    },
    picStyle:{
        width:100,
        height:100
    },
    text:{
        fontSize:16,
        color:"gray",
        flex:1
    }
})