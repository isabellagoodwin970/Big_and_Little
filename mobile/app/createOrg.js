import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import StyledButton from '@components/StyledButton';

export default function NewOrganizationScreen() {
    const [orgName, setOrgName] = useState('');
    const [orgCategory, setOrgCategory] = useState('');
    const [orgDescription, setOrgDescription] = useState('');
    const [qrValue, setQrValue] = useState('');

  // Handle form submission
    const handleCreateOrganization = () => {
    if (!orgName || !orgCategory || !orgDescription) {
        Alert.alert('Please fill out all fields.');
        return;
    }

    // For the sake of this example, we’ll create a QR code value
    const uniqueOrgID = `${orgName.replace(/\s+/g, '-').toLowerCase()}-id`; // Create a unique ID based on org name
    setQrValue(`https://example.com/organization/${uniqueOrgID}`);

    // You can perform other actions like saving the organization data to a database here

    Alert.alert('Organization Created', 'Your organization has been created successfully!');
    };

    return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Create New Organization</Text>

        <TextInput
            style={styles.input}
            placeholder="Organization Name"
            value={orgName}
            onChangeText={setOrgName}
        />
        <TextInput
            style={styles.input}
            placeholder="Organization Category"
            value={orgCategory}
            onChangeText={setOrgCategory}
        />
        <TextInput
            style={styles.input}
            placeholder="Organization Description"
            value={orgDescription}
            onChangeText={setOrgDescription}
        />
        <Pressable>
            <StyledButton text="Create Organization" onClick={handleCreateOrganization} />
        </Pressable>
        

        {qrValue ? (
            <View style={styles.qrCodeContainer}>
            <Text style={styles.qrTitle}>Organization QR Code</Text>
            <QRCode value={qrValue} size={200} />
            <Text style={styles.qrText}>Scan this QR code to view the organization</Text>
            </View>
        ) : null}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 15,
    },
        qrCodeContainer: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    qrTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    qrText: {
        fontSize: 14,
        color: 'gray',
        marginTop: 10,
    },
});
