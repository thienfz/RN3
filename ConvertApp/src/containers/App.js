import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import { createStackNavigator } from 'react-navigation'
import MainScreen from './MainScreen'
import WeightScreen from './WeightScreen'
import LengthScreen from './LengthScreen'

const Navigation = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Measurement'
    })
  },
  WeightScreen: {
    screen: WeightScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Weight Convert',
      headerRight:
        <TouchableOpacity >
          <Image
            source={{ data: "iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHlSURBVGhD7dlLS1VhHIXxU1KEIFEUgYgDEYogCIRwVFTkDVFJ+wB+gKCwCI1KQiRC+gRBM8HIiQPBgQMHDsQbhiGIg0BBEISIMitBn5fYsNmswbvBwdpxHviBiIP/wss5x1Mqdzydwpl/Hxa3HnzHbzwMnyhiD3CAw5QnKFThO/EX6RGFG9ONP1AjEr2w7j7C74M6Pm0RtnUhZkTwAZZ1InbEPM7Crg7EjljCOdjVjtgRK7gAu9oQO2IVF2FXK2JHrOES7GrBPtTRWeuohl3N+AV1dNYGamBXnhFfUQu7mrAHdXTWJupg1z38hDo6awv1sOsuYkds4zLsuo3YETu4CrtuIc+Ia7Arz4hdXIddNxE74hsaYNcV/IA6OiuMaIRlz6GOVsIrQdvuQB2tfIHls9mkR1CHK59hPeYx1OHKMs7Dtj6ow5UFWL4GT3oKdbgyB+sxz6AOV2ZRBdv6oQ5XZlAJ2wagDlemYT0mzwPmFKzfE3kBdbgyidOw7RXU4coErMcMQh2ujCO8/Wbba6jDlY+ogG1DUIcro/hvxoT3RU7CtmGow5X3OAHb3kAdrryEdW+hDs8KT//tG4E6Pi18TSF6BzUg+ATrx5VsakzhRiSlf8zGUMgRSTcQ/ntp/Se3XP5KpSPszsttjAGqzAAAAABJRU5ErkJggg==" }}
            style={{ height: 30, width: 30, marginEnd: 10 }} />
        </TouchableOpacity>
    })
  },
  LengthScreen: {
    screen: LengthScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Length Convert',
      headerRight:
        <TouchableOpacity >
          <Image
            source={{ data: "iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHlSURBVGhD7dlLS1VhHIXxU1KEIFEUgYgDEYogCIRwVFTkDVFJ+wB+gKCwCI1KQiRC+gRBM8HIiQPBgQMHDsQbhiGIg0BBEISIMitBn5fYsNmswbvBwdpxHviBiIP/wss5x1Mqdzydwpl/Hxa3HnzHbzwMnyhiD3CAw5QnKFThO/EX6RGFG9ONP1AjEr2w7j7C74M6Pm0RtnUhZkTwAZZ1InbEPM7Crg7EjljCOdjVjtgRK7gAu9oQO2IVF2FXK2JHrOES7GrBPtTRWeuohl3N+AV1dNYGamBXnhFfUQu7mrAHdXTWJupg1z38hDo6awv1sOsuYkds4zLsuo3YETu4CrtuIc+Ia7Arz4hdXIddNxE74hsaYNcV/IA6OiuMaIRlz6GOVsIrQdvuQB2tfIHls9mkR1CHK59hPeYx1OHKMs7Dtj6ow5UFWL4GT3oKdbgyB+sxz6AOV2ZRBdv6oQ5XZlAJ2wagDlemYT0mzwPmFKzfE3kBdbgyidOw7RXU4coErMcMQh2ujCO8/Wbba6jDlY+ogG1DUIcro/hvxoT3RU7CtmGow5X3OAHb3kAdrryEdW+hDs8KT//tG4E6Pi18TSF6BzUg+ATrx5VsakzhRiSlf8zGUMgRSTcQ/ntp/Se3XP5KpSPszsttjAGqzAAAAABJRU5ErkJggg==" }}
            style={{ height: 30, width: 30, marginEnd: 10 }} />
        </TouchableOpacity>
    })
  }
})

const store = createStore(rootReducer)
class ConvertApp extends Component {
  state = {}
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default ConvertApp;