import {Image, StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {textColor} from '../../../../../styles/globalStyles';
import Button from '../../../../../components/atoms/Button';
import {useAtom} from 'jotai';
import {
  selectedDatesAtom,
  selectedTicketAtom,
} from '../../../../../store/ticket.store';
import {selectedEventAtom} from '../../../../../store/event.store';
import moment from 'moment';
import {formatNumberWithCommas} from '../../../../../utils/function';

const OrderModal = ({onPay}) => {
  const [selectedTicket] = useAtom(selectedTicketAtom);
  const [selectedEvent] = useAtom(selectedEventAtom);
  const [selectedDates] = useAtom(selectedDatesAtom);

  return (
    <View style={styles.container}>
      <Text style={styles.order}>Order Detail</Text>
      <ScrollView style={styles.contain} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.wrapContent}>
            <Image source={{uri: selectedEvent.banner}} style={styles.icon} />
            <View>
              <Text style={{...styles.contentTitle, marginBottom: 12}}>
                {selectedEvent.name}
              </Text>
              <Text style={styles.contentPlace}>{selectedEvent.place}</Text>
            </View>
          </View>
          <View style={styles.contentFooter}>
            <View style={styles.row}>
              <Image
                source={{
                  uri: 'https://icon-library.com/images/avatar-png-icon/avatar-png-icon-0.jpg',
                }}
                style={styles.iconOrder}
              />
              <Text style={styles.hosted}>{selectedEvent.hosted}</Text>
            </View>
            <View style={styles.row}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/256/10034/10034521.png',
                }}
                style={styles.iconOrder}
              />
              <Text style={styles.date}>
                {moment(`${Object.keys(selectedDates)}`).format('ddd, DD MMM')}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.rowCard}>
            <Text style={styles.contentTitle}>Pay in full</Text>
            <Switch trackColor={{false: '#767577', true: '#A060FA'}} />
          </View>
          <Text style={styles.contentDesc}>
            Pay the minimum spend (NT$ 30,000) now and receive 5% off
          </Text>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.contentTitle}>Bill Detail</Text>
          </View>
          <View style={styles.rowCard}>
            <Text style={styles.contentDesc}>{selectedTicket.title}</Text>
            <Text style={styles.contentDesc}>
              NT$ {formatNumberWithCommas(selectedTicket.price)}
            </Text>
          </View>
          <View style={styles.rowCard}>
            <View>
              <Text style={styles.contentDesc}>Service Fee</Text>
              <Text style={styles.contentDesc}>5%</Text>
            </View>
            <Text style={styles.contentDesc}>
              NT$ {formatNumberWithCommas((selectedTicket.price * 5) / 100)}
            </Text>
          </View>
          <View style={styles.rowCard}>
            <Text style={styles.contentTitle}>Total</Text>
            <Text style={styles.contentTitle}>
              NT${' '}
              {formatNumberWithCommas(
                selectedTicket.price - (selectedTicket.price * 5) / 100,
              )}
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.contentTitle}>Payment Method</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.wrapRadio}>
              <View style={styles.radio} />
            </View>
            <Text style={styles.contentDesc}>VISA +64</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.rowCard}>
            <Text style={styles.contentTitle}>Split Bill</Text>
            <Switch trackColor={{false: '#767577', true: '#A060FA'}} />
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.contentTitle}>
              Apply promo to get special discount
            </Text>
          </View>
        </View>
        <Button text={'Pay'} onPress={onPay} />
        <View style={styles.spaceBottom} />
      </ScrollView>
    </View>
  );
};

export default OrderModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    padding: 12,
  },
  contain: {
    flex: 1,
  },
  spaceBottom: {
    marginBottom: 30,
  },
  order: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A060FA',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  rowCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 80,
    height: 80,
    backgroundColor: '#2e2e2e',
    borderRadius: 8,
    marginHorizontal: 12,
    marginBottom: 12,
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
  contentPlace: {
    fontSize: 14,
    color: 'gray',
  },
  price: {
    fontSize: 14,
    color: '#EF9533',
  },
  wrapContent: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    marginBottom: 8,
  },
  contentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hosted: {
    color: textColor,
  },
  date: {
    color: textColor,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapRadio: {
    borderColor: '#3CA6EC',
    borderWidth: 3,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginRight: 3,
  },
  iconOrder: {
    height: 16,
    width: 16,
    marginRight: 5,
    tintColor: '#5f7ddc',
  },
});
