import { useState } from "react";
import {Button, View,Image } from "react-native";
export default function App() {
    const [image,setImage]=useState()
    function ShowImage(){
        return <View style={{ width: 300, height: 300 }}>
        <Image source={image} />
      </View>
    }

    async function imageHandler() {
        if (!image) {
          return;
        }
    
        const formData = new FormData();
        const name = id;
        formData.append("file", {
          name,
          type: "image/jpeg",
          uri: image,
        });
        // formData.append( "img", {
        //   name,
        //   type: "image/jpeg",
        //   uri: image,
        // });
        
        try {
          const response = await axios.post(
            "http://627e-104-199-124-234.ngrok.io/predict",
            formData,
            {
              "file": {
                "content-type": "multipart/form-data",
              },
            }
          );
          console.log('done');
          console.log(response.data);
          setImage(response.data.image)
        }
        catch(e){
            console.log('error')
            return;
        }
    }

    return (
      <>
        <StatusBar style="light" />
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        {image ? <ShowImage /> :<Button onPress={imageHandler}>사진찍기</Button>}
        </View>

      </>
    );
  }