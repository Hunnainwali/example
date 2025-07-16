import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { HomePage } from './Home'
import type { Routes } from './Routes'

const Stack = createNativeStackNavigator<Routes>()

export function App(): React.ReactElement | null {

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={styles.root}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            statusBarStyle: 'dark',
            animationTypeForReplace: 'push',
          }}
          initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
