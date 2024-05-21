import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// --------- Component Imports ---------------
import { COLORS } from '../Constants/colors.js'

const listItem = ({ title, navigation, description, timeTaken, image, item, cart }) => {

    return (
        <TouchableOpacity style={styles.item} >

            <View style={{ flex: 1, marginRight: 10 }}>
                {!cart
                    ?
                    <View style={styles.categoryView}>
                        <MaterialCommunityIcons name="circle" color={'green'} size={12} />
                        <Text style={[styles.category]}>Veg</Text>

                    </View> : null}

                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                {!cart
                    ?
                    <View style={styles.categoryView}>
                        <Text style={styles.category}>5</Text>
                        <MaterialCommunityIcons name="star" color={COLORS.colorYellow} size={12} />
                    </View>
                    : null}
                <Text style={{ fontSize: 14, color: COLORS.borderColor }} numberOfLines={1}>₹ 110</Text>

                <Text style={styles.author} numberOfLines={2}>{description}</Text>
            </View>
            <View>
                <Image
                    source={{ uri: image }}
                    style={styles.bookView}
                />
                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                    <View style={{ height: 25, width: 25, backgroundColor: COLORS.primColor3, alignItems: 'center', justifyContent: 'center', borderRadius: 2 }}>
                        <MaterialCommunityIcons name="minus" color={COLORS.primaryColor} size={15} />
                    </View>
                    <Text style={{ color: COLORS.borderColor, fontSize: 14, fontWeight: 'bold' }}>2</Text>
                    <View style={{ height: 25, width: 25, backgroundColor: COLORS.primColor3, alignItems: 'center', justifyContent: 'center', borderRadius: 2 }}>
                        <MaterialCommunityIcons name="plus" color={COLORS.primaryColor} size={15} />
                    </View>
                </View>

            </View>



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
        flexDirection: 'row',
        marginBottom:2
    },
    bookView: {
        width: 100,
        height: 100,
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
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderTopRightRadius: 5
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
    },
    category: {
        color: COLORS.borderColor,
        fontSize: 12,
        marginRight: 5
    },
    categoryView: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default listItem;