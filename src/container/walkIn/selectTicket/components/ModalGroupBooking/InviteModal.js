import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {textColor} from '../../../../../styles/globalStyles';
import Button from '../../../../../components/atoms/Button';
import {friendsAtom} from '../../../../../store/ticket.store';
import {useAtom} from 'jotai';
import BackIcon from '../../../../../components/atoms/BackIcon';

const FriendsRoute = ({onBooking}) => {
  const [friends, setFriends] = useAtom(friendsAtom);

  const onInvite = idx => {
    const filterData = friends.map((friend, id) =>
      id === idx
        ? {
            ...friend,
            isInvited: !friend.isInvited,
          }
        : friend,
    );
    setFriends(filterData);
  };

  return (
    <View style={styles.contain}>
      <ScrollView
        style={{...styles.contain}}
        showsVerticalScrollIndicator={false}>
        {friends.map((friend, idx) => (
          <View style={styles.rowInvite} key={idx}>
            <View style={styles.wrapLeft}>
              <Image source={{uri: friend.avatar}} style={styles.avatar} />
              <View>
                <Text style={styles.textName}>{friend.name}</Text>
                <Text style={styles.textUsername}>{friend.username}</Text>
              </View>
            </View>
            <View style={styles.wrapRight}>
              {friend.isInvited ? (
                <View style={styles.buttonInvited}>
                  <Text style={styles.textInvited}>Invited</Text>
                </View>
              ) : (
                <Pressable
                  style={styles.buttonInvite}
                  onPress={() => onInvite(idx)}>
                  <Text style={styles.textInvite}>Invite</Text>
                </Pressable>
              )}
            </View>
          </View>
        ))}
        <View style={{paddingBottom: 80}} />
      </ScrollView>
      <View style={styles.footer}>
        <Button text={'Book now'} onPress={onBooking} />
      </View>
    </View>
  );
};

const SquadRoute = () => <View style={{flex: 1}} />;

const InvitationRoute = () => <View style={{flex: 1}} />;

const InviteModal = ({onBooking, onBack}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Friends'},
    {key: 'second', title: 'Squad'},
    {key: 'third', title: 'Invitation'},
  ]);

  const renderScene = SceneMap({
    first: () => <FriendsRoute onBooking={onBooking} />,
    second: SquadRoute,
    third: InvitationRoute,
  });

  return (
    <View style={styles.container}>
      <View style={styles.wrapInvite}>
        <BackIcon onPress={onBack} />
        <Text style={styles.invite}>Invite friends</Text>
        <View />
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: '#673ab7'}}
            activeColor="#673ab7"
            style={{backgroundColor: '#262626'}}
            renderLabel={({route, focused, color}) => (
              <Text style={{color, margin: 8}}>{route.title}</Text>
            )}
          />
        )}
      />
    </View>
  );
};

export default InviteModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    padding: 12,
  },
  contain: {
    flex: 1,
  },
  wrapInvite: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  invite: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff9800',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 15,
    color: textColor,
  },
  desc: {
    fontSize: 16,
    color: textColor,
    textAlign: 'center',
    marginBottom: 12,
  },
  rowInvite: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  wrapLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textName: {
    fontSize: 18,
    color: textColor,
  },
  textUsername: {
    fontSize: 16,
    color: '#c1c1c1',
  },
  buttonInvite: {
    backgroundColor: '#313131',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInvite: {
    color: textColor,
  },
  buttonInvited: {
    backgroundColor: '#a85ef5',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInvited: {
    color: textColor,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    padding: 12,
    backgroundColor: '#262626',
    width: '100%',
  },
});
