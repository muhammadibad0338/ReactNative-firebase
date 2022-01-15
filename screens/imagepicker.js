import React from "react";
import { View, Text, Button } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


function ImagePicker() {
    const openCamera = () => {
        let options = {
            includeBase64: true,
            mediaType: 'photo'
        }
        launchCamera(options, (res) => {
            console.log(res)
        })
    }
    const openGallary = () => {
        let options = {
            includeBase64: true,
            mediaType: 'photo'
        }
        launchImageLibrary(options, (res) => {
            console.log(res)
        })
    }
    return <>
        <View>
            <Button title="open Camera" onPress={openCamera} />
            <Button title="open Gallery" onPress={openGallary} />
        </View>
    </>
}
export default ImagePicker