import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { DateTime } from 'luxon';


const JobItem = ({ item }) => {
    return (
        <View style={styles.main} key={item.key}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.applicantsRequirement}><Text style={styles.point}>Applicants Requirement:</Text> {item.applicantsRequirement}</Text>
            <Text style={styles.companyInfo}><Text style={styles.point}>Commpany Info:</Text> {item.companyInfo}</Text>
            <Text style={styles.createdAt}><Text style={styles.point}>Posted On:</Text> {DateTime.fromMillis(item.createdAt).toFormat('dd LLL yyyy, hh:mm a')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 10,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 6
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    description: {
        fontSize: 16,
        color: '#333',
        marginVertical: 5,
    },
    point: {
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    applicantsRequirement: {
        marginVertical: 5,
        color: '#333'
    },
    companyInfo: {
        marginVertical: 5,
    },

    createdAt: {
        color: '#333',
        marginVertical: 5,
    },

})

export default JobItem