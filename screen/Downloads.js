import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { translate } from '../languages/utils';
import { useSpring, animated } from 'react-spring';

const AnimatedText = animated(Text);

const Downloads = () => {

    const propsAnimatedText = useSpring({
        to: {
            opacity: 1, fontSize: 24
        },
        from: {
            opacity: 0, fontSize: 0
        },
        config: { duration: 3000 }
    });
    return (
        <View style={styles.container}>
            <AnimatedText style={propsAnimatedText}>
                {translate("Downloads under construction")}
            </AnimatedText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Downloads;