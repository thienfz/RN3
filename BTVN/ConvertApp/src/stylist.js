import {
    StyleSheet,
    Dimensions
} from 'react-native';
export default stylist = StyleSheet.create({
    textinput:{
        height: 40,
        backgroundColor:'white',
    },
    button:{
        height: 50,
        margin:5
    },
    flatlist:{
        flex: 0.5,
    },
    fullscreen: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex:1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    chooseButton: {
        height: 100,
        marginTop: 5,
        opacity: 0.7,
        backgroundColor: 'cyan', 
        borderRadius: 20, 
        shadowRadius: 100,
    }
})