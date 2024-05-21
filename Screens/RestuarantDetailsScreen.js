import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';

// --------- Component Imports ---------------
import { COLORS } from '../Constants/colors.js'
import RestuarantDetails from '../Components/restuarantDetails.js'
import ListItem from '../Components/foodList.js'


const HomeScreen = ({ navigation }) => {

    const [listItem, setListItem] = useState([
        {
            title: 'Masala Dosa',
            description: 'Masala dosa is a dish of South India. It is a type of dosa originating in the town of Udupi, Karnataka.',
            timeTaken: '10 min',
            image: 'data:image/jpeg;base64,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',
        },
        {
            title: 'Masala Dosa',
            description: 'Masala dosa is a dish of South India. It is a type of dosa originating in the town of Udupi, Karnataka.',
            timeTaken: '10 min',
            image: 'data:image/jpeg;base64,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'
        },
    ])

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <RestuarantDetails navigation={navigation} />
                <Text style={styles.headText}>Food Items</Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={listItem}
                        renderItem={({ item }) =>
                            <ListItem
                                title={item.title}
                                description={item.description}
                                timeTaken={item.timeTaken}
                                image={item.image}
                                item={item}
                                navigation={navigation}
                            />}
                        keyExtractor={item => item.id}
                        numColumns={1}
                        columnWrapperStyle={styles.columnWrapperStyle}
                    />
                </View>

            </View>
            <TouchableOpacity style={{
                backgroundColor: COLORS.primColor3, height: 70, justifyContent: 'space-between',
                alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16
            }} onPress={() => navigation.navigate('CartScreen')}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: COLORS.primaryColor, fontSize: 16 }}>1 Item</Text>
                    <Text style={{ color: COLORS.primaryColor, fontSize: 16 }}>₹ 250</Text>
                </View>
                <Text style={{ color: COLORS.primaryColor, fontSize: 26, fontWeight: 'bold' }}>View Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryColor,
        paddingHorizontal: 16
    },
    headText: {
        fontSize: 14,
        color: COLORS.borderColor,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingTop: 10
    },

});

export default HomeScreen;