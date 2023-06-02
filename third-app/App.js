import PictureMap from "./components/picture-page/picture-map";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./components/picture-page/details";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SecondPage from "./components/picture-page/second-page";

const Stack=createNativeStackNavigator()

const Tab=createBottomTabNavigator()

export default function App(){
  
const Articles=()=><Stack.Navigator>
        <Stack.Screen component={PictureMap} name={"PictureMap"} options={{headerShown:false}}/>
        <Stack.Screen component={Detail} name={"Detail"} options={{headerShown:false}}/>
      </Stack.Navigator>

  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen component={Articles} name="Article"/>
        <Tab.Screen component={SecondPage} name="Second Page"/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}