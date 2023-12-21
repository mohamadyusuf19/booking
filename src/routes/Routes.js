import React from 'react';
import {StyleSheet, LogBox, Image, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TicketDetail from '../container/ticket/ticketDetail/TicketDetail';
import SelectDate from '../container/walkIn/selectDate/SelectDate';
import SelectTicket from '../container/walkIn/selectTicket/SelectTicket';
import Booking from '../container/booking/Booking';
import Event from '../container/event/Event';
import Friends from '../container/friends/Friends';
import Profile from '../container/profile/Profile';

const moonIcon = 'https://cdn-icons-png.flaticon.com/512/606/606807.png';
const starIcon = 'https://cdn-icons-png.flaticon.com/512/9582/9582013.png';
const friendsIcon = 'https://cdn-icons-png.flaticon.com/512/171/171561.png';
const accountIcon =
  'https://icon-library.com/images/avatar-png-icon/avatar-png-icon-0.jpg';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  '`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.',
  '`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.',
]);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#EF9533',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}>
      <Tab.Screen
        name="Nightlife"
        component={Booking}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={{
                uri: moonIcon,
              }}
              style={{...styles.icon, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Event"
        component={Event}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={{
                uri: starIcon,
              }}
              style={{...styles.icon, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={{
                uri: friendsIcon,
              }}
              style={{...styles.icon, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={{
                uri: accountIcon,
              }}
              style={{...styles.icon, tintColor: color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="#1e1e1e" />
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={({route}) => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="TicketDetail" component={TicketDetail} />
        <Stack.Screen name="WalkinDate" component={SelectDate} />
        <Stack.Screen name="WalkinTicket" component={SelectTicket} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
  },
});

export default Routes;
