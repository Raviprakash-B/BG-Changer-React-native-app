import React, {useState} from "react";
import {
Text,
StyleSheet,
View,                               //its almost like div in Html
TouchableOpacity,
StatusBar,                  //almost like Button
} from "react-native";

const App = () =>{        //App name imported from index.js
//const randomColor = 'rgb(32, 0, 126)'            //State Variables
const [randomColor, setRandomColor] = useState("rgb(32, 0, 126)");     //set random color is not defined it is method, thatz the beauty about the use state which is already declared and defined  
  
const changeBG = () => {
  let color = "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";

  setRandomColor(color);                      //calling color
};
return (
  <>
      <StatusBar backgroundColor={randomColor} />
     <View style={[styles.container,{backgroundColor: randomColor}]}>        
    <TouchableOpacity onPress = {changeBG}>
     <Text style={styles.text}>TapMe</Text>
     </TouchableOpacity>
    </View>
  </>
);
};

export default App;



const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center", 
  },

text:{

    fontSize:30,                         
    backgroundColor: "#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:40,
    color: "#FFFFFF",
    borderRadius:15,
    textTransform: "uppercase",
}
});

