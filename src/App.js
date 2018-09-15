import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from './icons'
import { Button } from 'react-native-elements'

Icons.load()

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title='BUTTON' />

        <Button
          raised
          icon={{name: 'cached'}}
          title='BUTTON WITH ICON' />

        <Button
          large
          rightIcon={{name: 'code'}}
          title='LARGE WITH RIGHT ICON' />

        <Button
          large 
          icon={{name: 'envira', type: 'font-awesome'}}
          title='LARGE WITH ICON TYPE' />

        <Button
          large
          icon={{name: 'squirrel', type: 'octicon'}}
          title='OCTICON' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
