/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';


import { BottomTabParamList, HistoryParamList, HomeParamList, SendReportParamList, UserParamList} from '../../types';
import Home from '../../screens/Home/Home';
import SendReport from '../../screens/SendReport/SendReport';
import History from '../../screens/History';
import User from '../../screens/User';
import AddDisciplineReport from '../../screens/Home/AddDisciplineReport';
import DetailReport from '../../screens/SendReport/DetailReport';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="History"
        component={HistoryNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="timer" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="SendReport"
        component={SendReportNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="add-circle" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="User"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: 'Danh sách lớp chấm điểm thi đua' }}
      />
      <HomeStack.Screen
        name="AddDisciplineReport"
        component={AddDisciplineReport}
        options={{ headerTitle: 'Chấm vi phạm lớp 10A1' }}
      />
    </HomeStack.Navigator>
  );
}

const HistoryStack = createStackNavigator<HistoryParamList>();

function HistoryNavigator() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen
        name="History"
        component={History}
        options={{ headerTitle: 'Lịch sử' }}
      />
    </HistoryStack.Navigator>
  );
}

const SendReportStack = createStackNavigator<SendReportParamList>();

function SendReportNavigator() {
  return (
    <SendReportStack.Navigator>
      <SendReportStack.Screen
        name="SendReport"
        component={SendReport}
        options={{ headerTitle: 'Send Report' }}
      />
      <SendReportStack.Screen
        name="DetailReport"
        component={DetailReport}
        options={{ headerTitle: 'Chi tiết vi phạm lớp 10A1' }}
      />
    </SendReportStack.Navigator>
  );
}

const UserStack = createStackNavigator<UserParamList>();

function UserNavigator() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="User"
        component={User}
        options={{ headerTitle: 'User' }}
      />
    </UserStack.Navigator>
  );
}

