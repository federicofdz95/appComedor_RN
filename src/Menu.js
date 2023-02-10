import React, { useEffect, useState } from "react";
import { Box, Flex, ListItem } from "@react-native-material/core";
import { Card, DataTable, FAB, List } from "react-native-paper";
import axios from "axios";
import { StyleSheet } from "react-native";
import { Axios } from "axios";
import { ScrollView } from "react-native-web";
import Icon from "@mdi/react";
import { mdiPasta, mdiNoodles, mdiIceCream } from "@mdi/js";

const Menu = () => {

  const [menu, setMenu] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);
  const urlApi = "http://apifdz.somee.com/api/menu/";
  const [ip, setIP] = useState("");

    
    useEffect(() => {
      axios({
        url: urlApi,
      })
        .then((response) => {
          setMenu(response.data);
          setIsLoading(true);
        })
        .catch((error) => {
          console.log(error);
        });

        getData();

    }, [setMenu]);

  
    const getData = async () => {
      const res = await axios.get("https://geolocation-db.com/json/");
      console.log(res.data);
      setIP(res.data.IPv4);
    };
    

  return (
    <ScrollView>
      <Flex center>
        <Box w={300}>
          <h4>{ip}</h4>


          {isLoading ? (
            <>
              {menu.map((x) => (
                <Card
                  style={{
                    marginBottom: "1rem",
                    //width: "30rem",
                  }}
                  key={x.id}
                >
                  <Card.Content>
                    <ListItem title={x.diaMenu.toUpperCase()} />

                    <ListItem
                      title={x.entradaMenu}
                      leading={<Icon path={mdiNoodles} size={1} />}
                    />

                    <ListItem
                      title={x.principalMenu}
                      leading={<Icon path={mdiPasta} size={1} />}
                    />

                    <ListItem
                      title={x.postreMenu}
                      leading={<Icon path={mdiIceCream} size={1} />}
                    />
                  </Card.Content>
                </Card>
              ))}
            </>
          ) : (
            <Flex center top={100}>
              <FAB
                icon={(props) => <Icon name="plus" {...props} />}
                loading={true}
              />
            </Flex>
          )}
        </Box>
      </Flex>
    </ScrollView>
  );
};

export default Menu;


  const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    tableHeader: {
      backgroundColor: "#DCDCDC",
    },
    tableCell: {
      textAlign: "center"
    }
  });