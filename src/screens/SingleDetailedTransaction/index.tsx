import {useRoute} from '@react-navigation/native';
import {Image, ScrollView, Text, View} from 'react-native';
import {props} from './types';
import {styles} from './styles';
import {DummyExpensesList, DummyIncomeList} from '../../assets/dummy';
import ImageIconComponent from '../../components/imageIconComponent';
import {getCategoryImage, getTypeImage} from '../../util/ImagePicker';
import {formatDetailedTransaction} from '../../util/formatedNumber';
import {CurrencyEnum} from '../../constants/CurrencyEnum';
import {transformDate} from '../../util/sortDates';
import SingleOption from '../../components/singleOption';
const options = [
  {
    name: 'ტრანზაქციის გამეორება',
    url: 'https://img.icons8.com/?size=100&id=83204&format=png&color=000000',
  },
  {
    name: 'ავტომატური \n გადარიცხვები',
    url: 'https://img.icons8.com/?size=100&id=23&format=png&color=000000',
  },
  {
    name: 'შაბლონად შენახვა',
    url: 'https://img.icons8.com/?size=100&id=18765&format=png&color=000000',
  },
  {
    name: 'ჩამოტვირთე ქვითარი',
    url: 'https://img.icons8.com/?size=100&id=aO3W9kKC9PMv&format=png&color=000000',
  },
];

const SingleDetailedTransaction = () => {
  const {params} = useRoute<props>();
  const {id} = params;
  const mergedTransactions = [...DummyIncomeList, ...DummyExpensesList];
  const transaction = mergedTransactions.find(t => t.id === id);
  if (!transaction) {
    return (
      <View style={styles.container}>
        <Text>Transaction not found</Text>
      </View>
    );
  }
  const typeImage = getTypeImage(transaction?.type);
  const categoryImage = getCategoryImage(transaction?.category);

  const amountColor =
    transaction?.type === 'გადარიცხვები'
      ? {color: '#d31110'}
      : {color: '#2eac5a'};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headersView}>
        <View style={styles.amountAndIconView}>
          <ImageIconComponent imageuri={categoryImage} />
          <View style={styles.amountView}>
            <Text style={styles.name}>{transaction?.reciever}</Text>
            <Text style={[styles.amount, amountColor]}>
              {formatDetailedTransaction(transaction?.value, CurrencyEnum.GEL)}
            </Text>
            <Text style={styles.date}>{transformDate(transaction?.date)}</Text>
          </View>
        </View>
        <View style={styles.typesAndIconView}>
          <ImageIconComponent imageuri={typeImage} />
          <View style={styles.typesView}>
            <Text style={styles.type}>{transaction?.type}</Text>
            <Text style={styles.payType}>{transaction?.payType}</Text>
          </View>
        </View>
      </View>
      <View style={styles.options}>
        {options.map((item, index) => (
          <SingleOption key={index} item={item} />
        ))}
      </View>
      <View style={styles.listView}>
        <Text style={styles.mainHeader}>საიდან</Text>
        <View style={styles.innerView}>
          <Text style={styles.tagHeaders}>გამომგზავნი</Text>
          <Text style={styles.data}>{transaction?.senderName}</Text>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.tagHeaders}>ანგარიში</Text>
          <Text style={styles.data}>{transaction?.senderAcc}</Text>
        </View>
        <View style={styles.innerViewWithIcon}>
          <View>
            <Text style={styles.tagHeaders}>ბანკი</Text>
            <Text style={styles.data}>{transaction?.senderBank}</Text>
          </View>
          <ImageIconComponent imageuri="https://img.icons8.com/?size=100&id=77055&format=png&color=000000" />
        </View>
      </View>
      <View style={styles.listView2}>
        <Text style={styles.mainHeader}>სად</Text>
        <View style={styles.innerView}>
          <Text style={styles.tagHeaders}>მიმღები</Text>
          <Text style={styles.data}>{transaction?.reciever}</Text>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.tagHeaders}>ანგარიში</Text>
          <Text style={styles.data}>{transaction?.recieverAcc}</Text>
        </View>
        <View style={styles.innerViewWithIcon}>
          <View>
            <Text style={styles.tagHeaders}>ბანკი</Text>
            <Text style={styles.data}>{transaction?.recieverBank}</Text>
          </View>
          <ImageIconComponent imageuri="https://img.icons8.com/?size=100&id=77055&format=png&color=000000" />
        </View>
      </View>
      <View style={styles.listView2}>
        <Text style={styles.mainHeader}>დეტალები</Text>
        <View style={styles.innerView}>
          <Text style={styles.tagHeaders}>გადახდის ტიპი</Text>
          <Text style={styles.data}>{transaction?.payType}</Text>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.tagHeaders}>თანხა</Text>
          <Text style={styles.data}>
            {formatDetailedTransaction(transaction?.value, CurrencyEnum.GEL)}
          </Text>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.tagHeaders}>აღწერა</Text>
          <Text style={styles.data}>{transaction?.description}</Text>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.tagHeaders}>თარიღი</Text>
          <Text style={styles.data}>{transformDate(transaction?.date)}</Text>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.tagHeaders}>დოკუმენტის ნომერი</Text>
          <Text style={styles.data}>{transaction?.docNumber}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleDetailedTransaction;
