import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import Home from './src/Home'
import Horarios from "./src/Horarios";
import Menu from "./src/Menu";
import { AppBar, IconButton } from "@react-native-material/core";

const InicioRoute = () => <Home/>;

const HorariosRoute = () => <Horarios/>;

const MenuRoute = () => <Menu/>;


const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    
    { key: "horarios", title: "Horarios", focusedIcon: "clock-outline" },
    { key: "menu", title: "Menu", focusedIcon: "silverware" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    //home: InicioRoute,
    horarios: HorariosRoute,
    menu: MenuRoute,
  });

  return (
    <>
      <AppBar
        title="AppComedor"
        leading={(props) => (
          <IconButton icon={(props) => <IconButton name="merge" />} />
        )}
      />

      <div style={{ marginTop: 10 }}></div>

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};




export default BottomNav;
