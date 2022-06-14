import React, { Fragment } from "react"
import { ScrollView, View, Text, TouchableOpacity, FlatList } from "react-native"
import styles from "./style" 
import QuotationsItems from './QuotationItems/'

export default function QuotationsList(props) {
  const daysQuery = props.filterDay;// vamos criar uma const que vai chamar nosso  propsfilterDay
  return(
    <Fragment>
    <View style={styles.filters}>
      <TouchableOpacity
        style={styles.buttonQuery}
        onPress={() => daysQuery(7)}
      >  
        <Text style={styles.textButtonQuery}>7D</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonQuery}
        onPress={() => daysQuery(15)}
      >  
        <Text style={styles.textButtonQuery}>15D</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonQuery}
        onPress={() => daysQuery(30)}
      >  
        <Text style={styles.textButtonQuery}>1M</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonQuery}
        onPress={() => daysQuery(90)}
      >  
        <Text style={styles.textButtonQuery}>3M</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonQuery}
        onPress={() => daysQuery(180)}
      >  
        <Text style={styles.textButtonQuery}>6M</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonQuery}
        onPress={() => daysQuery(360)}
      >  
        <Text style={styles.textButtonQuery}>1Y</Text>
      </TouchableOpacity>
    </View>

        <ScrollView style={styles.listQuotationBitcoins}>{/*adicionar um estilo */}
            <FlatList
              data={props.listTransactions}
              renderItem={({ item }) => {
                return <QuotationsItems valor={item.valor} data={item.data} />;
              }}
            />
        </ScrollView>
        
    </Fragment>
   
  )
}