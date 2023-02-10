import React, { useEffect, useState } from "react";
import { Box, Flex } from "@react-native-material/core";
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
    }, [setMenu]);

  console.log(menu)
    

  return (
    <ScrollView>
      <Flex center>
        <Box w={300}>
          {isLoading ? (
            <>
            {
              menu.map((x) => (
              <Card
                style={{
                  marginBottom: "1rem",
                  //width: "30rem",
                }}
                key={x.id}
              >
                <Card.Content>
                  <p>
                    <Icon path={mdiNoodles} size={1} />
                    {x.entradaMenu}
                  </p>
                  <p>
                    <Icon path={mdiPasta} size={1} />
                    {x.principalMenu}
                  </p>
                  <p>
                    <Icon path={mdiIceCream} size={1} />
                    {x.postreMenu}
                  </p>
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