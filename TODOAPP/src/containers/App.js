import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import AddTaskScreen from './AddTaskScreen';
import ScheduleScreen from './ScheduleScreen'

import { createStackNavigator } from 'react-navigation'
import { gray, white, calendarHighlight } from '../styles'

const Navigation = createStackNavigator({
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Schedule',
      headerRight:
        <TouchableOpacity
          onPress={() => navigation.navigate('AddTask')}>
          <Image style={{ height: 30, width: 30, marginEnd: 10 }}
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADPSURBVGhD7dZBCsIwEIXhgFtFvIDgAVx5GO8jXsWFQ8pE6UaT6KJdCq48iQfQCqmoFEppq1N5H8wqocwPpVQBAABIRES9OE5G+RiTDsJRtzDvp5Hxt3y08Uk46haESIMQaRAiDUKkQYg0CGnL4y+W+TCrOprt/D3EnYvulc16s5uEVeohssPXhb4/bhVWqQchjU1jIcd+9n6fqk7E/vKx0LXoXtlkz1mGVX4Dn19pECINQqRBiDQIkQYh0vxNCG3tWLOn5xi3CEcAAADQDqXu1SdrzcOGeTsAAAAASUVORK5CYII=' }} />
        </TouchableOpacity>,
      headerTitleStyle: {
        color: gray,
        fontSize: 22,
      },
      headerStyle: {
        backgroundColor: white,
        elevation: 0,
        borderBottomWidth: 0,
      }
    })
  },
  AddTask: {
    screen: AddTaskScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add New Task',
      headerRight:
        <TouchableOpacity
          onPress={() => navigation.navigate('Schedule')}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginEnd: 10, color: calendarHighlight }}> Done </Text>
        </TouchableOpacity>,
      headerLeft:
        <TouchableOpacity
          onPress={() => navigation.navigate('Schedule')}>
          <Image
            style={{ height: 20, width: 20, marginStart: 5, }}
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEKSURBVGhD7dMxagJBFMbxVbHyBhZpLTyFEMhF0tva7QkCaSwk2CQ2WUd2tDPu8wS5QBrrXECw0cksvkJlTev35PvBwLLzivmzswlRtTRN6/poUwihNsvlxeWyc15+Pr10dMuOY0QxnnkJJ+tDt224EhHiV3nTEXzl/1AVEa/Yxvuvto5h+y8iW6wedAwbI1AwAgUjUDACBSNQMAIFI1DcRUQpHvjVfMT7ctmKB9+fRrhcfk1FlLIsa5QHPw8pDvGqPeuIHc4XvRizvZOY1SNjEDEGFWNQMQYVY1AxBhVjUDEG1bUYl6+fdMSO6hiZ6LYtlzHOy0C37JnOpet8MYyrPxp9N/U10e0lyR+GznmkkPcJ3wAAAABJRU5ErkJggg==' }} />
        </TouchableOpacity>,
      headerTitleStyle: {
        color: gray,
        fontSize: 22,
      },
      headerStyle: {
        backgroundColor: white,
        elevation: 0,
        borderBottomWidth: 0,
      }
    })
  }
})

class App extends Component {
  state = {}

  render() {
    console.log('hihi')
    return (
      <Navigation />
    );
  }
}

export default App;