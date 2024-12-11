import React from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import { Headerku ,Cardku, Cardku1, Cardku2, Cardku3, Cardku4, Cardku5, Cardku6, Cardku7, Cardku8, Cardku9, Cardku10, Cardku11, Cardku12, Cardku13, Cardku14, Cardku15, Cardku16, Cardku17, Cardku18, Cardku19} from './custom';

export default App = () => {
  return (
    <View style={{paddingTop:StatusBar.currentHeight}}>
      <Headerku />
      <ScrollView>
      <Cardku nama="Samsudin" hp="085798141286"/>
      <Cardku1 nama="Samuel" hp="085776549912"/>
      <Cardku2 nama="Andre" hp="085766431236"/>
      <Cardku3 nama="Fauzan" hp="0812546787654"/>
      <Cardku4 nama="Kenzii" hp="087645673212"/>
      <Cardku5 nama="Putri" hp="085765432123"/>
      <Cardku6 nama="Denii" hp="085766443423"/>
      <Cardku7 nama="Opal" hp="085765479112"/>
      <Cardku8 nama="Zizan" hp="085782234165"/>
      <Cardku9 nama="Firly" hp="085765124212"/>
      <Cardku10 nama="Elsa" hp="085776549912"/>
      <Cardku11 nama="Rendy" hp="085987671223"/>
      <Cardku12 nama="Putra" hp="085744332416"/>
      <Cardku13 nama="Rizky" hp="0857891209812"/>
      <Cardku14 nama="Agus" hp="085777121357"/>
      <Cardku15 nama="Bernadya" hp="085778126782"/>
      <Cardku16 nama="Jefri Nichol" hp="085766789101"/>
      <Cardku17 nama="Paris Pernandes" hp="085534567915"/>
      <Cardku18 nama="Zaki" hp="08578800141"/>
      <Cardku19 nama="Doremonn" hp="085755618915"/>
      </ScrollView>
    </View>
  );
}