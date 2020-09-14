import React from 'react';
import { View, StyleSheet } from 'react-native';

const Home = (props) => {
    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
          // do something
          props.addCol()
        });
    
        return unsubscribe;
      }, [props.navigation]);
    
    return ( 
        <View style={styles.HomeCont}>

        </View>
     );
}

const styles = StyleSheet.create({
    HomeCont: {
        width: '100%',
        height: '100%',
        backgroundColor: 'pink'
    }
})
 
export default Home;