// this is needed for safeareaview on android

import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});

// style={GlobalStyles.droidSafeArea}