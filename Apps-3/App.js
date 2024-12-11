import React from 'react';
import {View,Text,Image,ScrollView} from 'react-native';

export default App=()=>{
  return(
    <ScrollView>
    <View style={{flex:1,gap:10,alignItems:'center'}}>
      <Text style={{marginTop:30,textAlign:'center',fontSize:20,fontWeight:'bold'}}>
        Ini Sekolahku
      </Text>

      <Text style={{textAlign:'justify',marginHorizontal:20}}> 
        Saya sekolah di SMK Negeri 4 Padalarang di jurusan PPLG (Rekayasa Perangkat Lunak Dan ). Saya duduk di bangku kelas 11.
      </Text>

      <Text style={{marginTop:30,textAlign:'center',fontSize:20,fontWeight:'bold'}}>
        Sejarah Mobile Legends
      </Text>

      <Image 
      style={{width:'90%',height:400,borderRadius:10}}
      source={{uri:'https://wallpaperset.com/w/full/c/6/4/235060.jpg'}}
      />

      <Text style={{textAlign:'justify',marginHorizontal:20}}> 
      Mobile Legends merupakan salah satu game MOBA yang paling banyak dimainkan oleh gamer Indonesia. Kepopuleran game ini sendiri tidak lepas dari fakta bahwa game tersebut ramah spesifikasi sehingga Smartphone kentang pun masih bisa memainkannya.
      Game ini sendiri pertama kali rilis di tahun 2016 lalu dan langsung menjelma sebagai salah satu game paling laris sampai saat ini. Khusus di Indonesia, ML pertama kali datang pada tanggal 11 Juli 2016 lalu. Ketika itu, peminat dari game ini langsung membludak terus meningkat sampai saat ini.
      Dalam sejarah, Mobile Legends berhasil memenangkan penghargaan Most Favorite Game of the Year pada gelaran Indonesia Gaming Awards 2019 lalu. Sampai saat ini, game tersebut masih terus mematangkan diri sebagai salah satu game MOBA populer.
      </Text>

    </View>
    </ScrollView>
  );
}