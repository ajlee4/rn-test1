import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Platform } from "react-native";
import { MainScreen } from "../screen/MainScreen";
import { ContactScreen } from "../screen/ContactScreen";
import { NewsScreen } from "../screen/NewsScreen";

const contactNavigator = createStackNavigator(
  {
    Contact: {
      screen: ContactScreen,
      navigationOptions: {
        title: "Контакты"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#303f9f" : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : "#303f9f"
    }
  }
);

const mainNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        title: "Главная"
      }
    },
    News: {
      screen: NewsScreen,
      navigationOptions: {
        title: "Новости"
      }
    }
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#303f9f" : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : "#303f9f"
    }
  }
);
const BottomNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: mainNavigator,
      navigationOptions: {
        title: "Главная"
      }
    },
    Contact: {
      screen: contactNavigator,
      navigationOptions: {
        title: "Контакты"
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingVertical: 10
      },
      labelStyle: {
        fontSize: 22,
        fontFamily: "open-bold"
      }
    }
  }
);
export const AppNavigation = createAppContainer(BottomNavigator);
