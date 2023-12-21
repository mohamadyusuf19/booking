import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useAtom} from 'jotai';

import {textColor} from '../../styles/globalStyles';
import {bookedListsAtom} from '../../store/booking.store';
import {formatNumberWithCommas, getFirstWord} from '../../utils/function';
import {BookingLogic} from './Booking.logic';

const PaidRoute = () => {
  const [bookedLists] = useAtom(bookedListsAtom);

  return (
    <View style={styles.contain}>
      <View style={{...styles.wrapRight, marginTop: 12}}>
        <View style={styles.wrapTypeRounded}>
          <Text style={styles.type}>Table Booking</Text>
        </View>
        <View style={styles.wrapTypeRounded}>
          <Text style={styles.type}>Walk in</Text>
        </View>
        <View style={styles.wrapTypeRounded}>
          <Text style={styles.type}>Group Walk in</Text>
        </View>
        <View style={styles.wrapTypeRounded}>
          <Text style={styles.type}>Auction</Text>
        </View>
      </View>
      <ScrollView
        style={{...styles.contain}}
        showsVerticalScrollIndicator={false}>
        {bookedLists.map((list, idx) => (
          <View style={styles.card} key={idx}>
            <View style={styles.rowHeader}>
              <Text style={styles.id}>ID : {list.id}</Text>
              <View style={styles.wrapRight}>
                <Text style={styles.price}>
                  NT${formatNumberWithCommas(list.price)}
                </Text>
                <View style={styles.wrapType}>
                  <Text style={styles.type}>{list.title}</Text>
                </View>
              </View>
            </View>
            <View style={styles.wrapContent}>
              <View style={styles.icon}>
                <Text style={styles.textIcon}>
                  {getFirstWord(list.name).toUpperCase()}
                </Text>
              </View>
              <View>
                <Text style={styles.contentTitle}>{list.name}</Text>
                <Text style={styles.contentDesc}>
                  {list.place}, {list.date}
                </Text>
                {list.friends.length > 0 ? (
                  <Text style={styles.invitePeople}>
                    {list.friends.length} people invited
                  </Text>
                ) : null}
                <View style={styles.contentFooter}>
                  <Text style={styles.status}>Paid</Text>
                  <Text style={styles.hosted}>hosted by {list.hosted}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
        <View style={{paddingBottom: 80}} />
      </ScrollView>
    </View>
  );
};

const UnpaidRoute = () => <View style={{flex: 1}} />;

const RequestedRoute = () => <View style={{flex: 1}} />;

const Booking = () => {
  const {layout, index, setIndex, routes} = BookingLogic();

  const renderScene = SceneMap({
    first: PaidRoute,
    second: UnpaidRoute,
    third: RequestedRoute,
    fourth: PaidRoute,
    fifth: PaidRoute,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.myBooking}>My Booking</Text>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            scrollEnabled
            indicatorStyle={{
              backgroundColor: '#673ab7',
            }}
            activeColor="#673ab7"
            inactiveColor="#fff"
            style={{backgroundColor: '#1e1e1e'}}
            renderLabel={({route, focused, color}) => (
              <Text style={{color, margin: 8}}>{route.title}</Text>
            )}
          />
        )}
      />
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 12,
  },
  contain: {
    flex: 1,
  },
  myBooking: {
    fontSize: 22,
    fontWeight: 'bold',
    color: textColor,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 15,
    color: textColor,
  },
  card: {
    backgroundColor: '#262626',
    borderRadius: 8,
    marginVertical: 12,
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 12,
  },
  id: {
    fontSize: 14,
    color: '#c1c1c1',
  },
  wrapRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    fontSize: 14,
    color: '#EF9533',
  },
  wrapType: {
    borderColor: textColor,
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  wrapTypeRounded: {
    borderColor: textColor,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  type: {
    fontSize: 14,
    color: textColor,
  },
  wrapContent: {
    flexDirection: 'row',
  },
  icon: {
    width: 80,
    height: 80,
    backgroundColor: '#2e2e2e',
    borderRadius: 8,
    marginHorizontal: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textIcon: {
    fontSize: 18,
    color: textColor,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: textColor,
  },
  contentDesc: {
    fontSize: 14,
    color: textColor,
  },
  invitePeople: {
    fontSize: 12,
    color: '#c1c1c1',
  },
  contentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  status: {
    color: '#519270',
  },
  hosted: {
    color: textColor,
  },
});
