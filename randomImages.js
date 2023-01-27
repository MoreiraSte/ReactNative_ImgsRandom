import { StyleSheet, View,TouchableOpacity,Image} from 'react-native';
import React, {useState} from "react";
import icon from "./imgs/pochita_icon.png"


export default function RandomImgPage() {

    const [exibir,setExibir] = useState('')

    
    const call = (exibir) => {
       exibir = setExibir = true
    }

  return (
    <View style={styles.container}>

                {
                    exibir? <Image  source={{uri:'https://picsum.photos/200/300'}} /> : null
                }

                    <View>


                    
                    </View>
       
                <TouchableOpacity
                   style={{width:150,height:150,marginLeft:"30%",marginTop:"50px"}}
                    onPress={()=>call()}
                >
                    <img alt="fb" src={icon}/>
                    
                </TouchableOpacity>

               


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ECB390',
    alignItems: 'center',
    justifyContent: 'center',
    display:"block"
  },
 
  
 
});
