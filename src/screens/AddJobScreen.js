import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from '@rneui/base';
import firestore from '@react-native-firebase/firestore';
import Wrapper from '../components/Wrapper';



const AddJobScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [applicantsRequirement, setApplicantsRequirement] = useState('');
    const [companyInfo, setCompanyInfo] = useState('');

    const handleSubmitJob = () => {
        if (!title || !description || !applicantsRequirement || !companyInfo) {
            return alert('One or more fields are required')
        }
        const job = {
            title,
            description,
            applicantsRequirement,
            companyInfo,
            createdAt: Date.now()
        }
        setLoading(true)
        firestore()
            .collection('Jobs')
            .add(job)
            .then((res) => {
                alert('Job Created Succesfully!')
                navigation.navigate('JobList')
                setTitle('')
                setDescription('')
                setApplicantsRequirement('')
                setCompanyInfo('')
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <Wrapper loading={loading}>
            <View style={styles.main}>
                <Input
                    placeholder="Enter Job Title"
                    value={title}
                    onChangeText={value => setTitle(value)}
                />
                <Input
                    placeholder="Enter Job Description"
                    value={description}
                    onChangeText={value => setDescription(value)}
                />
                <Input
                    placeholder="Enter Applicants info"
                    value={applicantsRequirement}
                    onChangeText={value => setApplicantsRequirement(value)}
                />
                <Input
                    placeholder="Enter Company Information"
                    value={companyInfo}
                    onChangeText={value => setCompanyInfo(value)}
                />
                <Button title="Add Job" onPress={handleSubmitJob} />
            </View>
        </Wrapper>

    )
}


const styles = StyleSheet.create({
    main: {
        padding: 20
    }
})

export default AddJobScreen;