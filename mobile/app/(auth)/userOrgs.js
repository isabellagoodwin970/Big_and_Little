import React from 'react';

import { Image, View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import StyledButton from '@components/StyledButton';
import ProfilePicture from '@components/ProfilePicture';

export default function joinOrganizations() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.profile}>
        {/*<Image style={styles.profilePic} source={{uri: "https://static-00.iconduck.com/assets.00/figma-logo-icon-1404x2048-8gfy4r91.png"}}/>*/}
        <ProfilePicture 
          style={styles.profilePic}
          src="https://static-00.iconduck.com/assets.00/figma-logo-icon-1404x2048-8gfy4r91.png"
          width = {30}
          height = {30}        
        />
        <Text style={styles.profileName}>Albert Gator</Text>
      </View>
      
      <View style={styles.form}>
        <Text style={styles.title}>My Organizations:</Text>
        <View style={styles.bottom}>
          <Text style={styles.orgNames}>Organization Name</Text>
          <View style={styles.orgLogo}>
            <Image style={styles.orgLogoPic} source={{uri: "https://static-00.iconduck.com/assets.00/figma-logo-icon-1404x2048-8gfy4r91.png"}}/>
            <Text style={styles.orgName}>Organization: ABC</Text>
            <Text style={styles.orgDescriptionText}>Category: Non-Profit</Text>
            <Text style={styles.orgDescriptionText}>Matching ends in # days</Text>
          </View>
          <View style={styles.buttonRow}>
            <Pressable style ={styles.button}>
              <StyledButton text="Big" />
            </Pressable>
            <Pressable style={styles.button}>
              <StyledButton text="Little" />
            </Pressable>
          </View>
          
          <Pressable style={styles.profileButton} >
            // on click go to create profile
            <StyledButton text="Create Profile"/>
          </Pressable>

        </View>
      </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      fontFamily: 'Inter',
    },
    form: {
      flex: 1,
      borderTopWidth: 1,
      borderTopColor: 'lightgrey',
      borderRadius: 4,
      padding: 10,
      gap: 20,
      fontSize: 16
    },
    bottom: {
      height: '50%',
      borderTopWidth: 1,
      borderTopColor: 'lightgrey',
      borderRadius: 4,
      padding: 10,
      gap: 30,
      fontSize: 50
    },
    profile: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 5,
        marginBottom: 7.5
    },
    profilePic: {
      width: 30,
      height:30,
      borderRadius: 15,
      marginLeft: 10,
      marginRight: 10
    },
    profileName: {
      fontWeight: 'bold',
      fontSize: 17,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 25,
      marginBottom: 0
    },
    orgNames: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 0
    },
    orgLogo: {
      alignItems: 'center',
      marginBottom: 0,
      textAlign: 'center'
    },
    orgLogoPic: {
      width: '98%',
      height: 350,
      backgroundColor: 'lightgray',
      marginBottom: 5,
      alignSelf: 'center',
      marginTop: 0
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent:'space-around',
      marginBottom: 0
    },
    button: {
      width: '47%'
    },
    orgName: {
      fontSize: 13,
      color:'lightgrey',
      alignSelf: 'flex-start',
      marginBottom: 0,
      textAlign: 'left',
      fontWeight: 'bold'
    },
    orgDescriptionText: {
      fontSize: 17,
      color: 'black',
      alignSelf: 'flex-start',
      textAlign: 'left',
      fontWeight: 'bold'
    }

    
});