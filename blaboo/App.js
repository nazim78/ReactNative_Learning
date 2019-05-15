import React, { Component } from 'react';
import {
  StyleSheet,
  View,Image,ScrollView,TouchableOpacity,Alert
} from 'react-native';
var Sound = require('react-native-sound');
 
export default class AlignItems extends Component {
   onPressCow = () => {
    
    var whoosh = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        alert(error)
      console.log('failed to load the sound', error);
      } else {
        alert('success') // loaded successfully
      console.log('duration in seconds: ' + whoosh.getDuration() +
      'number of channels: ' + whoosh.getNumberOfChannels());
      }
      // Play the sound with an onEnd callback
whoosh.play((success) => {
  if (success) {
  console.log('successfully finished playing');
  } else {
  console.log('playback failed due to audio decoding errors');
  }
  });
      });
  
  }
  render() {
    return (
     
      <View style={styles.wrapper}>
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}>
            <TouchableOpacity
         style={styles.button}
         onPress={this.onPressCow}
       >
            <Image
          style={{width:100,height:100}}
          source={require('./images/na.png')}
          
        />
        </TouchableOpacity>
        </View>
            <View style={[styles.box, styles.box2]}>
            <Image
          style={{width:100,height:100}}
          source={require('./images/li.png')}
        /> 
            </View>
            <View style={[styles.box, styles.box3]}>
            <Image
          style={{width:100,height:100}}
          source={require('./images/a.png')}
        />   
         </View>
        </View>
        <View style={styles.container2}>
            <View style={[styles.box, styles.box1]}>
            <Image
          style={{width:100,height:100}}
          source={require('./images/m.png')}
          
        />
      </View>
            <View style={[styles.box, styles.box2]}>
            <Image
          style={{width:100,height:100}}
          source={require('./images/b.png')}
          
        /></View>
            <View style={[styles.box, styles.box3]}>
            <Image
          style={{width:100,height:100}}
          source={require('./images/c.png')}
          
        />
            </View>
        </View>
        <View style={styles.container3}>
            <View style={[styles.box, styles.box1]}>
            <Image
          style={{width:100,height:100}}
          source={require('./images/e.png')}
          
        />
            </View>
            <View style={[styles.box, styles.box2]}>
            <Image
          style={{width:100,height:100}}
          source={require('./images/a.png')}
          
        />
        </View>
            <View style={[styles.box, styles.box3]}>
            <Image
          style={{width:100,height:100}}
          source={require('./images/b.png')}
          
        />
            </View>
        </View>
        <View style={styles.container4}>
            <View style={[styles.box, styles.box1]}>
            <Image
          style={{width:100,height:100}}
          source={require('./images/e.png')}
          
        />
            </View>
            <View style={[styles.box, styles.box2]}>
            <Image
          style={{width:100,height:100}}
          source={require('./images/a.png')}
          
        />
            </View>
            <View style={[styles.box, styles.box3]}>
            <Image
          style={{width:100,height:100}}
          source={require('./images/c.png')}
          
        />
            </View>
        </View>
        <View style={styles.container5}>
            <View style={[styles.box, styles.box1]}>
            <Image
          style={{width:100,height:100}}
          source={require('./images/na.png')}
          
        />
            </View>
            <View style={[styles.box, styles.box2]}>
            <Image
          style={{width:100,height:100}}
          source={require('./images/b.png')}
          
        />
            </View>
            <View style={[styles.box, styles.box3]}>
            <Image
          style={{width:100,height:100}}
          source={require('./images/c.png')}
          
        />
            </View>
        </View>
       
      </View>
      
    );
  }
}
 
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
   // flexDirection: 'column',
        // justifyContent: 'space-between',
        backgroundColor:'green',
        alignItems: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end' //replace with flex-end or center

  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end' //replace with flex-end or center
  },
  container3: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-end' //replace with flex-end or center
  },
  container4: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end' //replace with flex-end or center
  },
  container5: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end' //replace with flex-end or center
  },
  box: {
    width: 100,
    height: 100
  },
  box1: {
    backgroundColor: 'black'
  },
  box2: {
    backgroundColor: 'red'
  },
  box3: {
    backgroundColor: 'blue'
  }
});