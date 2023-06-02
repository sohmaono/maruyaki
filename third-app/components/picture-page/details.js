import { Image, StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";

export default function Detail({route}){
    const obj = route.params
    return(
        <View style={styles.container}>
            {/* <Image source={{uri:obj.contentObj.urlToImage}} style={styles.pic}/>
            <Text>{obj.contentObj.title}</Text> */}
            <WebView source={{uri:obj.contentObj.url}}/>
            {/* <Text>{obj.contentObj.url}</Text> */}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    pic:{
        width:300,
        height:300,
        alignSelf:"center",
    }
})