import React, { useState } from "react";
import { View, Button, Text, StatusBar, ScrollView, StyleSheet } from "react-native";

export default function App() {
  const [hasil, setHasil] = useState("Pilih Siswa untuk Melihat Raport");

  const cekRaport = (NAMA, IPA, IPS, MTK, BINDO) => {
    const total = IPA + IPS + MTK + BINDO;
    const rata2 = total / 4;
    const status = rata2 > 75 ? "LULUS" : "TIDAK LULUS";
    setHasil(`
    ★ RAPOT SISWA ★
      
      Nama Siswa : ${NAMA}
      Nilai Rapot :
      IPA : ${IPA}
      IPS : ${IPS}
      MTK : ${MTK}
      B.INDO : ${BINDO}
      ---------------------------
      TOTAL : ${total}
      RATA-RATA : ${rata2}
      STATUS : ${status}
    `);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rapot Siswa Tahun Ajaran 2024/2025</Text>
      <ScrollView style={styles.resultBox}>
        <Text style={styles.resultText}>{hasil}</Text>
      </ScrollView>

      <View style={styles.buttonRow}>
        <Button title="Rapot Budi" onPress={() => cekRaport("Ahmad Budi Suryanto", 78, 67, 56, 98)} />
        <Button title="Rapot Rayhan" onPress={() => cekRaport("Rayhan Rizky Fadlillilah", 90, 85, 90, 85)} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Rapot Sudais" onPress={() => cekRaport("Abdurahman Asudais", 90, 75, 90, 85)} />
        <Button title="Rapot Wawan" onPress={() => cekRaport("Wawan", 90, 89, 90, 75)} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Rapot Banii" onPress={() => cekRaport("Muhamad Sahbani", 90, 80, 90, 90)} />
        <Button title="Rapot Lalaa" onPress={() => cekRaport("Siti Saladah", 90, 89, 90, 88)} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Rapot Salman" onPress={() => cekRaport("Salman Rizky", 90, 80, 90, 85)} />
        <Button title="Rapot Aepz" onPress={() => cekRaport("Aepz Rojak", 90, 89, 90, 88)} />
      </View>

      <Button title="Reset" color="red" onPress={() => setHasil("Pilih Siswa untuk Melihat Raport")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#e0f7fa',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00796b',
    marginVertical: 10,
  },
  resultBox: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
    maxHeight: 250,
  },
  resultText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#004d40',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
