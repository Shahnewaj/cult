import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

const Wrapper = (props) => {
    const { loading } = props;
    return (
        <View style={{ flex: 1 }}>
            {loading ? <View
                style={
                    [
                        StyleSheet.absoluteFill,
                        {
                            zIndex: 99,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#61616185',
                        },
                    ]
                }>
                < ActivityIndicator size={'large'} color="#0c6964" />
                <Text style={{ color: '#0c6964', fontWeight: '700', marginTop: 7, fontSize: 19 }}>Please wait</Text>
            </View>
                :
                <View>{props.children}</View>
            }
        </View>
    )
}

export default Wrapper