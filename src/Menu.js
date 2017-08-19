import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Menu extends Component {
  onPress = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPress}
          title="สุ่มมาเล้ย!"
          />
        <Button
          onPress={this.onPress}
          title="ดู Youtube"
          />
        <Button
          onPress={this.onPress}
          title="ดูโฆษณาแบรนด์ต่างๆ"
          />
        <Button
          onPress={this.onPress}
          title="ตอบแบบสอบถาม"
          />
        <Button
          onPress={this.onPress}
          title="สถิติ"
          />
        <Button
          onPress={this.onPress}
          title="ติดต่อผู้จัดทำ"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

