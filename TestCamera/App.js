/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import { RNCamera } from 'react-native-camera';


type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
      super(props);
      this.state = {
        cameraVisible: false,
      }
  }

  toggleCamera() {
    // console.log('openCamera');
    this.setState({cameraVisible: true});
  }

  closeCamera() {
    this.setState({cameraVisible: false});
  }

  takePicture() {
  this.camera.capture()
  .then(function(data) {
    console.log(data.path);
  })
 .catch(err => console.error("error: " + err));
}

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flexDirection: 'row', justifyContent: 'center',}}>
          <TouchableOpacity
              onPress={() => this.takePicture.bind(this)}
              style = {styles.capture}
          >
              <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});
