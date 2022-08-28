import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
import JobItem from '../components/JobItem';
import EmptyJob from '../components/EmptyJob';
import Wrapper from '../components/Wrapper';

const JobListScreen = () => {
    const [loading, setLoading] = useState(true);
    const [jobList, setJobList] = useState([]);


    useEffect(() => {
        const subscriber = firestore()
            .collection('Jobs')
            .orderBy('createdAt', 'desc')
            .onSnapshot(querySnapshot => {
                const jobs = [];
                querySnapshot.forEach(documentSnapshot => {
                    jobs.push({
                        ...documentSnapshot.data(),
                        id: documentSnapshot.id,
                    });
                });
                setJobList(jobs);
                setLoading(false)
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);



    return (
        <Wrapper loading={loading}>
            <FlatList
                data={jobList}
                keyExtractor={item => item.id}
                ListEmptyComponent={<EmptyJob details='Nothing Found' />}
                renderItem={({ item }) => (
                    <JobItem item={item} />
                )}
            />

        </Wrapper>
    )
}

export default JobListScreen