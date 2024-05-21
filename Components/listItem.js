import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// --------- Component Imports ---------------
import { COLORS } from '../Constants/colors.js'

const listItem = ({ title, navigation, description, timeTaken, image, item }) => {

    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('RestuarantDetailsScreen')}>
            <View style={{alignItems:'center'}}>
            <Image
                source={{ uri: image }}
                style={styles.bookView}
            />
            <View style={{position:'absolute',left:0,bottom:0}}>
             <View style={styles.startView}>
                <MaterialCommunityIcons name="timer" color={COLORS.borderColor} size={15} />
                <Text style={styles.starText}>{timeTaken}</Text>
            </View>
            </View>
            </View>
           
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <Text style={styles.author} numberOfLines={3}>{description}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        marginTop: 10,
        width: '100%',
        padding: 10,
        borderColor: COLORS.borderColor2,
        borderWidth: 0.2,
        borderRadius: 10,
        marginBottom:2
    },
    bookView: {
        width: '100%',
        height: 160,
        borderRadius: 10
    },
    title: {
        color: COLORS.borderColor,
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
    },
    startView: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal:10,
        backgroundColor:'white',
        borderTopRightRadius:5
    },
    starText: {
        color: COLORS.borderColor,
        fontSize: 12,
        paddingLeft: 2,
    },
    author: {
        color: COLORS.borderColor,
        fontSize: 12,
        paddingTop: 2,
    }
});

export default listItem;