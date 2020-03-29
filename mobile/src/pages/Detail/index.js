import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Linking, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import styles from './styles'
import logoImg from '../../assets/logo.png'

export default function Details() {

  const navigation = useNavigation()

  const message = 'teste mensagem'

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'teste:teste',
      recipients: ['josewso55@gmail.com'],
      body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=5511974221186&text=${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>
        
        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>APAD</Text>
        
        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>12</Text>

        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
          <Text style={styles.heroDescription}>Entre em contato:</Text>
          
          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
              <Text style={styles.actionText}>WhatsApp</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.action} onPress={sendMail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>

      </View>
    </View>
  )
}