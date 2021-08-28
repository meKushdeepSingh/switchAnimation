import { Platform } from "react-native";

export const sounds = {
    soundDay: Platform.OS === 'android' ? 'sound_day' : 'soundDay',
    soundNight: Platform.OS === 'android' ? 'sound_night' : 'soundNight',
}