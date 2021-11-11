import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {Button, AirbnbRating, Icon} from 'react-native-elements';

const ReservationDetails = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <ImageBackground
      source={item.image}
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
      }}>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          <Button
            type="clear"
            icon={{
              name: 'arrow-back-ios',
              type: 'MaterialIcons',
              color: '#fff',
              size: 24,
            }}
            buttonStyle={{
              justifyContent: 'flex-start',
            }}
            onPress={() => navigation.goBack()}
          />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Icon
              raised
              name="heart"
              type="font-awesome"
              color="#f50"
              size={18}
              onPress={() => console.log('hello')}
            />
            <Icon
              raised
              name="search"
              type="font-awesome"
              color="#000"
              size={18}
              onPress={() => console.log('hello')}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 'auto',
            marginBottom: 40,
            marginHorizontal: 20,
          }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.location}>{item.location}</Text>
          <AirbnbRating
            defaultRating={5}
            isDisabled={true}
            count={5}
            size={18}
            showRating={false}
            starContainerStyle={{
              position: 'absolute',
              left: 0,
            }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ReservationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
});
