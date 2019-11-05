import React, {Fragment} from 'react';
import {Image, StyleSheet, ScrollView, Button, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {CountryList} from './CountryList';
import {bindActionCreators} from 'redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {addRecord} from './actions/actions';

class TheNextScreen extends React.Component {
  render() {
    return (
      <Fragment>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.container}>
              <Image source={require('./assets/seagull.png')} />
              <Text>A seagull</Text>
              <Image source={require('./assets/WashAKWay.png')} />
              <Text>The sign of a freeway</Text>
              <Button
                title="Go back!"
                onPress={() => this.props.navigation.navigate('HomeScreen')}
              />
            </View>
            <View style={styles.container}>
              <CountryList />
            </View>
            <View style={styles.container}>
              {this.props.test.example.map((exampleRecord, index) => (
                <Button
                  key={exampleRecord}
                  title={`${exampleRecord}`}
                  onPress={() => this.props.addRecord(index)}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    fontFamily: 'San Francisco',
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const mapStateToProps = state => {
  const {test} = state;
  return {test};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({addRecord}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TheNextScreen);
