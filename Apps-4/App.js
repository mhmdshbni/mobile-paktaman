import React from 'react';
import {View,Text,ScrollView,Button,StatusBar} from 'react-native';
export default App=()=>{

const cekRapot = (NAMA,IPA,IPS,MTK,BIND)=>{
  const total = IPA+IPS+MTK+BIND;
  const rata2 = total/4;
  const status = (rata2>75)?"LULUS":"BELUM LULUS";
  alert(`
    RAPOT SISWA \n
        Nama Siswa : ${NAMA} \n
        Nilai Rapot : \n
        IPA : ${IPA} \n
        MTK : ${MTK} \n
        B.IND : ${BIND} \n
        ----------------- \n
        TOTAL : ${total} \n
        RATA : ${rata2} \n
        STATUS : ${status} \n`
  )
}

  return(
    <ScrollView>
    <View style={{flex:1, paddingTop:StatusBar.currentHeight,gap:10,backgroundColor:'#blue'}}>

    <Text style={{marginLeft:10,fontSize:20,fontWeight:'bold'}}>Rapot Siswa</Text>

    <Button title='Rapot Budi'
      onPress={()=>(cekRapot("Budi Sudirman", 80, 85, 90, 255, 63, "Lulus"))}
      />
    <Button title='Rapot Adit'
      onPress={()=>(cekRapot("Adit Subroto", 75, 85, 85, 235, 47, "Lulus"))}
      />
    <Button title='Rapot Rendi'
      onPress={()=>(cekRapot("Adit Subroto", 75, 85, 85, 235, 47, "Lulus"))}
      />

    </View>
    </ScrollView>
  );
}