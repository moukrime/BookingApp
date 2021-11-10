import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Button, SearchBar, Rating} from 'react-native-elements';
import {data} from '@core/mocks';

export default function Home() {
  const [search, setSearch] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flex: 1, marginHorizontal: 20}}>
          <View style={styles.header}>
            <Text style={styles.header__title}>Discover</Text>
            <Button
              icon={{
                name: 'apps',
                type: 'material-community',
                color: '#444c55',
              }}
              type="clear"
            />
          </View>
          <SearchBar
            placeholder="Search your location"
            placeholderTextColor="#444c55"
            onChangeText={text => setSearch(text)}
            value={search}
            searchIcon={{
              type: 'font-awsome',
              name: 'search',
              color: '#444c55',
              size: 26,
              style: {
                marginLeft: 6,
                marginRight: 8,
              },
            }}
            containerStyle={styles.searchBar__container}
            inputContainerStyle={{
              backgroundColor: '#f2f2f2',
              borderRadius: 10,
            }}
            inputStyle={styles.searchBar__input}
          />
          <View style={styles.items__container}>
            {data.map((item, index) => (
              <View style={{marginBottom: 20}} key={index}>
                <Image
                  source={item.image}
                  style={{
                    width: Dimensions.get('window').width / 3 - 20,
                    height: 150,
                    borderRadius: 10,
                  }}
                />
                <Text style={styles.items__title}>{item.title}</Text>
                <Text style={styles.items__count}>{item.count}</Text>
              </View>
            ))}
          </View>

          <View style={styles.featured__header}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#444c55',
              }}>
              Featured
            </Text>
            <Button
              icon={{
                name: 'arrow-forward-ios',
                type: 'MaterialIcons',
                color: '#a0a1a5',
                size: 18,
              }}
              type="clear"
              iconRight
              title="View All"
              titleStyle={{
                fontSize: 14,
                fontWeight: 'bold',
                color: '#a0a1a5',
              }}
            />
          </View>
          <View style={styles.featured__container}>
            <Image
              source={require('@assets/images/resorts.jpg')}
              style={{
                width: 90,
                height: 100,
                borderRadius: 10,
                margin: 10,
              }}
            />
            <View style={styles.featured__col}>
              <View>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: '#444c55'}}>
                  Arabian Resort
                </Text>
                <Text style={{fontSize: 14, color: '#a0a1a5', marginTop: 4}}>
                  Al Thumamah, Riyadh
                </Text>
                <Rating
                  readonly
                  startingValue={5}
                  imageSize={18}
                  style={{
                    marginTop: 10,
                    alignItems: 'flex-start',
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#444c55',
                }}>
                $250
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header__title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444c55',
  },
  searchBar__container: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
  },
  searchBar__input: {
    color: '#444c55',
    paddingLeft: 0,
    marginLeft: 0,
  },
  items__container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  items__title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444c55',
    marginTop: 10,
  },
  items__count: {
    fontSize: 14,
    color: '#a0a1a5',
    fontWeight: '500',
    marginTop: 5,
  },
  featured__header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  featured__container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featured__col: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 20,
    marginTop: 20,
  },
});
