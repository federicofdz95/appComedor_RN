import * as React from "react";
import { BottomNavigation, Appbar, Text } from "react-native-paper";
import Home from './src/Home'
import Horarios from "./src/Horarios";
import Menu from "./src/Menu";

const InicioRoute = () => <Home/>;

const HorariosRoute = () => <Horarios/>;

const MenuRoute = () => <Menu/>;


const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    { key: "horarios", title: "Horarios", focusedIcon: "clock-outline" },
    { key: "menu", title: "Menu", focusedIcon: "silverware" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: InicioRoute,
    horarios: HorariosRoute,
    menu: MenuRoute,
  });

  return (
    <>
      <Appbar.Header>        
        <Appbar.Content title="App Comedor" />        
      </Appbar.Header>

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};

export default BottomNav;
