import * as React from 'react';
import { Button, TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { User } from '../common/interfaces';
import { AppConfigActions, AuthActions } from '../common/store/actions';
import { AuthSelector, LoadingSelector } from '../common/store/selectors';
import { withRedux } from '../common/utils/ReduxConnect';
import navigation from '../components/navigation';

interface Props {
    children?: React.ReactNode;
    navigation: any;
    auth: any;
    postLogin: (params: User.LoginReqBody) => void;
}

const Login: React.FC<Props> = ({ navigation, auth, postLogin }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onFormSumbit = (e: any) => {
        e.preventDefault();
        postLogin({username: email, password: password});
        navigation.navigate('Root');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}> SCOOL</Text>
            <View style={styles.inputView} >
                <TextInput  
                value={email} 
                onChangeText={value => setEmail(value)}
                style={styles.inputText}
                placeholder="Tên đăng nhập..." 
                placeholderTextColor="#003f5c"/>
            </View>
            <View style={styles.inputView} >
                <TextInput  
                value={password} 
                onChangeText={value => setPassword(value)}
                style={styles.inputText}
                placeholder="Mật khẩu..." 
                placeholderTextColor="#003f5c"/>
            </View>
            <TouchableOpacity onPress={onFormSumbit} style={styles.loginBtn} >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
};

export default withRedux({
    component: Login,
    stateProps: (state: any) => ({
      auth: state.auth
    }),
    dispatchProps: ({
      postLogin: AuthActions.postLoginAsync
    })
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
      },
      inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"white"
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        marginTop:40,
        marginBottom:10,
        alignItems: 'center',        
        justifyContent: 'center',
      },
      loginText:{        
        color:"white",
      }
  });