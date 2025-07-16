import React, { useCallback, useState } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { PESDK } from 'react-native-photoeditorsdk';
// import configuration from './Editor';

export function HomePage(): React.ReactElement {
  const [imageURI, setImageURI] = useState<string | null>(null)

  const pickImage = useCallback(() => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.didCancel || response.errorCode) return
      const uri = response.assets && response.assets[0]?.uri
      if (uri) {
        PESDK.openEditor(uri)
          .then(result => {
            console.log('Edited image saved to:', result.image)
            setImageURI(result.image)
          })
          .catch(error => {
            console.error('PhotoEditorModal error:', error)
          })
      }
    })
  }, [])
  
  return (
    <View style={styles.container}>
      <Button title="Pick from Gallery" onPress={pickImage} />
      <View style={styles.spacer} />
      {imageURI && (
        <Image source={{ uri: imageURI }} style={styles.preview} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  spacer: {
    height: 12,
  },
  preview: {
    width: 200,
    height: 200,
    marginTop: 20,
    resizeMode: 'contain',
  },
})