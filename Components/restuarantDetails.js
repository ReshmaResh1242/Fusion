import React from 'react';
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// --------- Component Imports ---------------
import { COLORS } from '../Constants/colors.js'

const header = ({ search, setSearch, navigation }) => {

    return (
        <View style={styles.container}>
             <View style={{ flexDirection: 'row',justifyContent:'flex-end',marginVertical:10 }}>
                <View style={styles.categoryView2}>
                    <MaterialCommunityIcons name="heart-outline" color={COLORS.borderColor} size={25} />
                </View>
                <View style={styles.categoryView2}>
                    <MaterialCommunityIcons name="share" color={COLORS.borderColor} size={25} />
                </View>
                <View style={styles.categoryView2}>
                    <MaterialCommunityIcons name="star-outline" color={COLORS.borderColor} size={25} />
                </View>
            </View>
            <Text style={{ color: COLORS.borderColor, fontSize: 20, fontWeight: 'bold',textAlign:'center',marginTop:10 }}>Paradise Hotel</Text>
            <View style={{ flexDirection: 'row',justifyContent:'space-around',marginTop:20 }}>
                <View style={styles.categoryView}>
                    <Text style={styles.category}>5</Text>
                    <MaterialCommunityIcons name="star" color={COLORS.colorYellow} size={12} />
                </View>
                <View style={styles.categoryView}>
                    <Text style={styles.category}>5 min</Text>
                    <MaterialCommunityIcons name="timer" color={COLORS.borderColor} size={12} />
                </View>
                <View style={styles.categoryView}>
                    <Text style={styles.category}>Veg</Text>
                    <MaterialCommunityIcons name="circle" color={'green'} size={12} />
                </View>
            </View>
            <Text style={{ color: COLORS.borderColor, fontSize: 14, textAlign:'center',marginTop:20 }}>Masala dosa is a dish of South India. It is a type of dosa originating in the town of Udupi, Karnataka.</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
    },
    category: { 
        color: COLORS.borderColor, 
        fontSize: 12, 
        marginRight:5
    },
    categoryView: { 
        flexDirection: 'row', 
        backgroundColor: COLORS.secondaryColor, 
        padding: 8, 
        borderRadius: 5, 
        alignItems: 'center' 
    },
    categoryView2: { 
        flexDirection: 'row', 
        alignItems: 'center' ,
        paddingHorizontal:10
    }
});

export default header;