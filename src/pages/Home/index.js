import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '340,90',
    date: '19/01/2024',
    type: 0,
  },
  {
    id: 2,
    label: 'Boleto conta energia',
    value: '500,00',
    date: '23/01/2024',
    type: 0,
  },
  {
    id: 3,
    label: 'Pix recebido',
    value: '200,00',
    date: '23/01/2024',
    type: 1,
  },
  {
    id: 4,
    label: 'Pix recebido',
    value: '1.000',
    date: '15/01/2024',
    type: 1,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Keventon Gonçalves" />
      <Balance saldo="14.000" gastos="-1.759" />
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticarScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 32,
    marginStart: 16,
    marginEnd: 16,
  },
  list: {
    marginTop: 16,
    marginStart: 16,
    marginEnd: 16,
  },
});
