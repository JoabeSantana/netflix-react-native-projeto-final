import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { translate } from '../languages/utils';

export default class Camera extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={(ref) => {
                        this.camera = ref;
                    }}
                    captureAudio={false}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.front}
                    androidCameraPermissionOptions={{
                        title: translate('Permission to use the camera'),
                        message: translate('Permission to use the camera is needed'),
                        buttonPositive: 'Ok',
                        buttonNegative: translate('Cancel'),
                    }}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={this.takePicture.bind(this)}
                        style={styles.capture}>
                        <Text>{translate('Take Picture')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            this.props.navigation.navigate(
                'More',
                {
                    image: data.uri,
                    name: this.props.route.params.name,
                    icon: null
                }
            )
        };
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 100,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,

    }
})