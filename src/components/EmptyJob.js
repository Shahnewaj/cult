import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const EmptyJob = ({ details }) => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>{details}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: '#10837d',
        fontWeight: 'bold',
        margin: 40
    }
})

export default EmptyJob