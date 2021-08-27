import { transform } from '@babel/core'
import React, { useState, useEffect, useRef } from 'react'
import {
    Animated,
    Image,
    ImageBackground,
    TouchableOpacity,
    View
} from 'react-native'
import { images } from './constant/images'

export const SwitchScreen = () => {

    // ****** Hooks Functions ****** //

    const fadeAnim = useRef(new Animated.Value(0)).current

    const [switchValue, setSwitchValue] = useState(false)

    // ****** Main Functions ****** //

    const onChnageSwitch = value => () => {
        const binary = value ? 1 : 0
        Animated.timing(
            fadeAnim,
            {
                toValue: binary,
                duration: 1000,
            }
        ).start();
        setSwitchValue(value)
    }

    return (
        <Animated.View style={{
            flex: 1,
            backgroundColor: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['#fff', '#00000090']
            }),
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TouchableOpacity
                onPress={onChnageSwitch(!switchValue)}
                activeOpacity={.8}
                style={{
                    height: 70,
                    width: 180,
                    borderRadius: 35,
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}>
                <Animated.Image style={{
                    height: '100%',
                    width: '100%',
                    opacity: fadeAnim,
                    position: 'absolute',
                    zIndex: 1,
                }}
                    resizeMode={'repeat'}
                    source={images.icNight} />
                <Animated.Image style={{
                    height: '100%',
                    width: '100%',
                }}
                    resizeMode={'repeat'}
                    source={images.icDay} />
                <Animated.Image
                    style={{
                        height: 60,
                        width: 60,
                        resizeMode: 'contain',
                        marginHorizontal: '2%',
                        position: 'absolute',
                        zIndex: 2,
                        left: fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 110],
                        }),
                        transform: [
                            {
                                rotate: fadeAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '360deg']
                                })
                            }
                        ],
                    }}
                    source={switchValue ? images.icMoon : images.icSun}
                />
            </TouchableOpacity>
        </Animated.View>
    )
}