import React from 'react';
// import { StyleSheet, Switch, FlatList, Platform, TouchableOpacity, View } from "react-native";
// import { Block, Text, theme, Icon } from "galio-framework";
import { Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import materialTheme from '../constants/Theme';

// galio component
import { Block, Button, Input, NavBar, Text } from 'galio-framework';

const { height, width } = Dimensions.get('window');

class Login extends React.Component {
  state = {
    email: '-',
    password: '-',
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (
      <Block safe flex style={{ backgroundColor: materialTheme.COLORS.WHITE }}>
        <NavBar
          title="Sign In"
          onLeftPress={() => navigation.openDrawer()}
          style={Platform.OS === 'android' ? { marginTop: materialTheme.SIZES.BASE } : null}
        />
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          <Block flex center style={{ marginTop: materialTheme.SIZES.BASE * 1.875, marginBottom: height * 0.1 }}>
            <Text muted center size={materialTheme.SIZES.FONT * 0.875} style={{ paddingHorizontal: materialTheme.SIZES.BASE * 2.3 }}>
              This is the perfect place to write a short description
              of this step and even the next steps ahead
            </Text>
            <Block row center space="between" style={{ marginVertical: materialTheme.SIZES.BASE * 1.875 }}>
              <Block flex middle right>
                <Button
                  round
                  onlyIcon
                  iconSize={materialTheme.SIZES.BASE * 1.625}
                  icon="facebook"
                  iconFamily="FontAwesome"
                  color={materialTheme.COLORS.FACEBOOK}
                  shadowColor={materialTheme.COLORS.FACEBOOK}
                  iconColor={materialTheme.COLORS.WHITE}
                  style={styles.social}
                  onPress={() => Alert.alert('Not implemented')}
                />
              </Block>
              <Block flex middle center>
                <Button
                  round
                  onlyIcon
                  iconSize={materialTheme.SIZES.BASE * 1.625}
                  icon="twitter"
                  iconFamily="FontAwesome"
                  color={materialTheme.COLORS.TWITTER}
                  shadowColor={materialTheme.COLORS.TWITTER}
                  iconColor={materialTheme.COLORS.WHITE}
                  style={styles.social}
                  onPress={() => Alert.alert('Not implemented')}
                />
              </Block>
              <Block flex middle left>
                <Button
                  round
                  onlyIcon
                  iconSize={materialTheme.SIZES.BASE * 1.625}
                  icon="dribbble"
                  iconFamily="FontAwesome"
                  color={materialTheme.COLORS.DRIBBBLE}
                  shadowColor={materialTheme.COLORS.DRIBBBLE}
                  iconColor={materialTheme.COLORS.WHITE}
                  style={styles.social}
                  onPress={() => Alert.alert('Not implemented')}
                />
              </Block>
            </Block>
            <Text muted center size={materialTheme.SIZES.FONT * 0.875}>
              or be classical
            </Text>
          </Block>

          <Block flex={2} center space="evenly">
            <Block flex={2}>
              <Input
                rounded
                type="email-address"
                placeholder="Email"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('email', text)}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Password"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('password', text)}
              />
              <Text
                color={materialTheme.COLORS.ERROR}
                size={materialTheme.SIZES.FONT * 0.75}
                onPress={() => Alert.alert('Not implemented')}
                style={{ alignSelf: 'flex-end', lineHeight: materialTheme.SIZES.FONT * 2 }}
              >
                Forgot your password?
              </Text>
            </Block>
            <Block flex middle>
              <Button
                round
                color="error"
                onPress={() => Alert.alert(
                  'Sign in action',
                  `Email: ${email}
Password: ${password}`,
                )}
              >
                Sign in
              </Button>
              <Button color="transparent" shadowless onPress={() => navigation.navigate('Register')}>
                <Text center color={materialTheme.COLORS.ERROR} size={materialTheme.SIZES.FONT * 0.75}>
                  {"Don't have an account? Sign Up"}
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: materialTheme.SIZES.BASE * 0.3,
    paddingHorizontal: materialTheme.SIZES.BASE,
    backgroundColor: materialTheme.COLORS.WHITE,
  },
  social: {
    width: materialTheme.SIZES.BASE * 3.5,
    height: materialTheme.SIZES.BASE * 3.5,
    borderRadius: materialTheme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

export default Login;
