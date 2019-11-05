// data fetch and formatting
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

export class CountryList extends React.Component {
  state = {
    country: [],
    isocode: [],
    capital: [],
    regionWorld: [],
  };

  componentDidMount() {
    // For the purpose of this exercise we will pull JSON data from
    // World Bank with country set as the United States.
    const url = 'http://api.worldbank.org/v2/country/us?format=json';
    // Axios is used to acquire information from World Bank API URL

    axios
      .get(url, {
        // Headers set to allow cross origin - note, may not work in all cases.
        // Had to run this in Chrome with web security disabled
        method: 'GET',
        mode: 'cors',
        headers: {
          //  'Access-Control-Allow-Origin': true,
        },
      })
      // Acquire data for country, ISO core, capital and region of the world.
      .then(response => {
        this.setState({country: response.data[1][0].name});
        this.setState({isocode: response.data[1][0].iso2Code});
        this.setState({capital: response.data[1][0].capitalCity});
        this.setState({regionWorld: response.data[1][0].region.value});
      });
  }

  // Now return the result
  render() {
    return (
      <View style={styles.column}>
        <View style={styles.row}>
          <View style={styles.bullet}>

          </View>
          <View style={styles.bulletText}>
            <Text style={styles.boldText}>Country: </Text>
            <Text style={styles.normalText}>{this.state.country}</Text>
            <Text style={styles.boldText}>ISO code: </Text>
            <Text style={styles.normalText}>{this.state.isocode}</Text>
            <Text style={styles.boldText}>Capital: </Text>
            <Text style={styles.normalText}>{this.state.capital}</Text>
            <Text style={styles.boldText}>Region of the world: </Text>
            <Text style={styles.normalText}>{this.state.regionWorld}</Text>

          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 200,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
  },
  normalText: {},
});
