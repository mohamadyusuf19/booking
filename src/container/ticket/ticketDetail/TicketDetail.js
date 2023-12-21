import {
  Dimensions,
  FlatList,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

import {getFirstWord} from '../../../utils/function';
import BackIcon from '../../../components/atoms/BackIcon';
import {textColor} from '../../../styles/globalStyles';
import {TicketDetailLogic} from './TicketDetail.logic';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const height = Dimensions.get('window').height;

const TicketDetail = ({navigation}) => {
  const {
    ref,
    selectedEvent,
    setSelectedEvent,
    setSelectedDates,
    availableOffers,
  } = TicketDetailLogic();

  const renderItem = ({item}) => (
    <Pressable
      onPress={() => {
        setSelectedEvent(item);
        ref.current.scrollTo({y: 0});
      }}>
      <Image source={{uri: item.banner}} style={styles.banner} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <ScrollView ref={ref}>
        <View style={styles.wrapBanner}>
          <ImageBackground
            source={{uri: selectedEvent.banner}}
            style={styles.detailBanner}>
            <View style={styles.wrapBackIcon}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.wrapTitle}>
          <View style={styles.logo}>
            <Text style={styles.textLogo}>
              {getFirstWord(selectedEvent.name).toUpperCase()}
            </Text>
          </View>
          <View style={styles.title}>
            <MaskedView
              style={styles.maskedView}
              maskElement={
                <View style={styles.maskWrapper}>
                  <Text style={styles.name}>
                    {selectedEvent.name.toUpperCase()}
                  </Text>
                </View>
              }>
              <View
                style={{flex: 1, height: '100%', backgroundColor: '#A060FA'}}
              />
              <View
                style={{flex: 1, height: '100%', backgroundColor: '#b635e2'}}
              />
              <View
                style={{flex: 1, height: '100%', backgroundColor: '#C800CC'}}
              />
              <View
                style={{flex: 1, height: '100%', backgroundColor: '#C800CC'}}
              />
            </MaskedView>
            <Text style={styles.time}>
              <Text style={styles.textOpen}>Open Now </Text>|{' '}
              {selectedEvent.time}
            </Text>
            <View style={styles.wrapAddress}>
              <Text style={styles.address}>{selectedEvent.place}</Text>
              <Text style={styles.address}>5 km</Text>
            </View>
          </View>
          <View style={styles.wrapRating}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/9715/9715468.png',
              }}
              style={styles.icon}
            />
            <Text style={styles.rating}>{selectedEvent.rating}</Text>
          </View>
        </View>
        <View style={styles.wrapFacilities}>
          <Text style={styles.ourFacilities}>Our Facilities</Text>
          {selectedEvent.facilities.map((facility, idx) => (
            <View style={styles.row} key={idx}>
              <Text style={styles.titleFacilities}>{facility.title}</Text>
              <Text style={styles.descFacilities}>{facility.desc}</Text>
            </View>
          ))}
        </View>
        <View style={styles.wrapOffer}>
          <View style={styles.wrapTitleOffers}>
            <Text style={styles.textAvailable}>Available offers</Text>
            <Text style={styles.seeAll}>See all offers</Text>
          </View>
          <FlatList
            data={availableOffers}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            horizontal
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable
          style={styles.buttonLeft}
          onPress={() => {
            navigation.push('WalkinDate');
            setSelectedDates({});
          }}>
          <Text style={styles.textButton}>Walk in Ticket</Text>
        </Pressable>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.push('WalkinDate');
            setSelectedDates({});
          }}>
          <LinearGradient
            colors={['#A060FA', '#C800CC']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            style={styles.buttonRight}>
            <Text style={styles.textButton}>Booking Table</Text>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default TicketDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
  },
  wrapBanner: {
    height: height * 0.3,
    width: '100%',
  },
  detailBanner: {
    height: height * 0.3,
    width: '100%',
  },
  wrapTitle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 0.5,
    width: '100%',
  },
  logo: {
    height: 80,
    width: '25%',
    borderRadius: 5,
    marginHorizontal: 12,
    backgroundColor: '#303030',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    fontSize: 18,
    color: textColor,
  },
  title: {
    width: '50%',
  },
  name: {
    fontSize: 22,
    color: '#000',
  },
  time: {
    fontSize: 16,
    color: textColor,
  },
  textOpen: {
    fontSize: 16,
    color: 'green',
  },
  wrapAddress: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  address: {
    fontSize: 14,
    color: textColor,
  },
  wrapRating: {
    width: '22%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rating: {
    color: textColor,
  },
  wrapFacilities: {
    padding: 12,
  },
  ourFacilities: {
    fontSize: 18,
    color: textColor,
    marginVertical: 12,
  },
  row: {
    marginBottom: 35,
  },
  titleFacilities: {
    fontSize: 16,
    color: textColor,
    marginBottom: 5,
  },
  descFacilities: {
    fontSize: 13,
    color: textColor,
  },
  wrapOffer: {
    paddingLeft: 12,
    marginBottom: 100,
  },
  wrapTitleOffers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 12,
    marginBottom: 12,
  },
  textAvailable: {
    fontWeight: 'bold',
    fontSize: 20,
    color: textColor,
  },
  seeAll: {
    fontSize: 16,
    color: textColor,
  },
  banner: {
    height: height * 0.3,
    width: 300,
    marginRight: 20,
    borderRadius: 5,
  },
  footer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
  },
  buttonLeft: {
    height: 70,
    width: '50%',
    backgroundColor: '#181818',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRight: {
    height: 70,
    width: '50%',
    // backgroundColor: '#b634e1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 18,
    color: textColor,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  wrapBackIcon: {
    padding: 20,
  },
  maskedView: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
  },
  maskWrapper: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  mask: {
    fontSize: 60,
    color: 'black',
    fontWeight: 'bold',
  },
});
