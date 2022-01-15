import React, { useEffect, useState } from "react";
import { View,Text } from "react-native";
import database from '@react-native-firebase/database';

const reference = database().ref('/users/');

function Dashboard(){
    const [users,setUsers] = useState([])
    useEffect(()=>{
        setUsers([])
        reference.on('child_added',(data)=>{
            // console.log(data.val())
            users.push(data.val())
            setUsers([...users])
        })
    },[])
    return<>
        <View>
            <Text>Dashboard</Text>
            {users.map((e,i)=><View key={i}>
                <Text>{e.name}</Text>
            </View>)}
        </View>
    </>
}
export default Dashboard