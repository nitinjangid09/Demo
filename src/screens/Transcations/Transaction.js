import React, { useState } from 'react';
import { View, Text, TextInput, SectionList, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const transactions = [
  {
    id: '1',
    operator: 'Airtel',
    txnId: 'RECL-6778395',
    mobileNumber: '6350580877',
    date: '6 June 2019',
    time: '8:58 pm',
    amount: '₹399',
    status: 'Success',
  },
  {
    id: '2',
    operator: 'Airtel',
    txnId: 'RECL-6778395',
    mobileNumber: '6350580877',
    date: '6 June 2019',
    time: '8:48 pm',
    amount: '₹245',
    status: 'Failed',
  },
  {
    id: '3',
    operator: 'Airtel',
    txnId: 'RECL-6778395',
    mobileNumber: '6350580877',
    date: '4 May 2019',
    time: '6:58 pm',
    amount: '₹399',
    status: 'Success',
  },
  {
    id: '4',
    operator: 'Airtel',
    txnId: 'RECL-6778395',
    mobileNumber: '6350580877',
    date: '4 May 2019',
    time: '6:58 pm',
    amount: '₹399',
    status: 'Success',
  },
  {
    id: '5',
    operator: 'Airtel',
    txnId: 'RECL-6778395',
    mobileNumber: '6350580877',
    date: '4 May 2019',
    time: '6:58 pm',
    amount: '₹399',
    status: 'Success',
  },
  {
    id: '6',
    operator: 'Airtel',
    txnId: 'RECL-6778395',
    mobileNumber: '6350580877',
    date: '4 May 2019',
    time: '6:58 pm',
    amount: '₹399',
    status: 'Success',
  },
  {
    id: '7',
    operator: 'Airtel',
    txnId: 'RECL-6778395',
    mobileNumber: '6350580877',
    date: '4 May 2019',
    time: '6:58 pm',
    amount: '₹399',
    status: 'Success',
  },
  {
    id: '8',
    operator: 'Airtel',
    txnId: 'RECL-6778395',
    mobileNumber: '6350580877',
    date: '4 May 2019',
    time: '6:58 pm',
    amount: '₹399',
    status: 'Success',
  },
  {
    id: '9',
    operator: 'Airtel',
    txnId: 'RECL-6778395',
    mobileNumber: '6350580877',
    date: '4 May 2019',
    time: '6:58 pm',
    amount: '₹399',
    status: 'Success',
  },
  {
    id: '10',
    operator: 'Airtel',
    txnId: 'RECL-6778395',
    mobileNumber: '6350580877',
    date: '4 May 2019',
    time: '6:58 pm',
    amount: '₹399',
    status: 'Success',
  },
];

const groupTransactionsByDate = (transactions) => {
  const grouped = transactions.reduce((acc, transaction) => {
    const dateGroup = acc.find((group) => group.title === transaction.date);
    if (dateGroup) {
      dateGroup.data.push(transaction);
    } else {
      acc.push({
        title: transaction.date,
        data: [transaction],
      });
    }
    return acc;
  }, []);
  return grouped;
};

const TransactionScreen = () => {
  const [searchDate, setSearchDate] = useState('');

  const filteredTransactions = groupTransactionsByDate(
    transactions.filter((transaction) => transaction.date.includes(searchDate))
  );

  const renderTransaction = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.details}>
        <Text style={styles.title}>{item.operator}</Text>
        <Text style={styles.account}>{item.txnId}</Text>
        <Text style={styles.account}>{item.mobileNumber}</Text>
        <Text style={styles.dateTime}>{item.time}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text
          style={[
            styles.status,
            { color: item.status === 'Success' ? 'green' : 'red' },
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  const renderHeader = ({ section: { title } }) => (
    <Text style={styles.dateHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <Image
            style={styles.searchIcon}
            source={require('../../assets/Icons/search.png')}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by Date"
            value={searchDate}
            onChangeText={setSearchDate}
          />
        </View>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../assets/Icons/filter.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../assets/Icons/download.png')}
          />
        </TouchableOpacity>
      </View>
      <SectionList
        sections={filteredTransactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
        renderSectionHeader={renderHeader}
      />
    </View>
  );
};

export default TransactionScreen;