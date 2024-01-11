import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {MotiView, MotiText, AnimatePresence} from 'moti'

export default function Movements({data}) {

  const [showValue, setShowValue] = useState(false)

 return (
   <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
    <Text style={styles.date}>{data.date}</Text>
    <View style={styles.content}>
      <Text style={styles.label}>{data.label}</Text>
      
      {showValue ? (
        <AnimatePresence exitBeforeEnter>
            <MotiText
             style={data.type === 1 ? styles.value : styles.expenses}
             from={{
              translateX: 100,
             }}
             animate={{
              translateX: 0,
             }}
             transition={{
              type:"timing",
              duration: 500
             }}
             >
            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
            </MotiText>
        </AnimatePresence>
      ) : (
        <AnimatePresence exitBeforeEnter>
          <MotiView
           style={styles.skeleton}
           from={{
            opacity: 0
           }}
           animate={{
            opacity: 1
           }}
           transition={{
            type:"timing"
           }}
           />
        </AnimatePresence>
      )}

    </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dadada'
  },
  date:{
    color: '#dadada',
    fontWeight: 'bold'
  },
  content:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 9
  },
  label:{
    fontWeight: 'bold',
    fontSize: 16
  },
   value:{
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold'
   },
   expenses: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold'
   },
   skeleton:{
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: '#dadada',
    borderRadius: 16
   }
})