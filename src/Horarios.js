import React, { useEffect, useState } from 'react'
import { Card, Text, List, Avatar } from "react-native-paper";
import Clock from "../Clock";
import Icon from "@mdi/react";
import { mdiClockTimeFourOutline } from "@mdi/js";
import { BackdropSubheader, Box, Divider, Flex, ListItem, Stack, Wrap } from '@react-native-material/core';

const hoy = new Date(); 

const Horarios = () => {

  
  const now = hoy.toLocaleString();
    
  const [hora, setHora] = useState(hoy.getHours());
  const [minutos, setMinutos] = useState(hoy.getMinutes());
  const [segundos, setSegundos] = useState(hoy.getSeconds());

  //const [time, setTime] = useState(hora+':'+minutos+':'+segundos);
  
  const [turno1, setTurno1] = useState({
    color: "#f44336",
    bool: false
  });
  const [turno2, setTurno2] = useState({
    color: "#f44336",
    bool: false
  });
  const [turno3, setTurno3] = useState({
    color: "#f44336",
    bool: false
  });  


   useEffect(() => {
     fTiempo();
   }, [segundos]);

   const fActualmente = () => {
    return(    
      <Text variant="titleSmall" style={{ color: "green", fontWeight: "bold" }}>
        ACTUALMENTE
      </Text>    
    )
   };

  const fTiempo = () => {

    setInterval(() => {
      setSegundos(new Date().getSeconds());
      setMinutos(new Date().getMinutes());
      setHora(new Date().getHours());
    }, 1000)
    
    //console.log(minutos);
    
    if (hora==12 && (minutos >= 0 && minutos < 45)) {
      setTurno1({ color: "#4caf50", bool: true });
    } else {
      setTurno1({ color: "#f44336", bool: false });
    }

    if (hora == 13 && minutos >= 0 && minutos < 45) {
      setTurno2({ color: "#4caf50", bool: true });
    } else {
      setTurno2({ color: "#f44336", bool: false });
    }

    if (hora == 14 && minutos >= 0 && minutos < 45) {
      setTurno3({ color: "#4caf50", bool: true });
    } else {
      setTurno3({ color: "#f44336", bool: false });
    }

  };
    


  return (
    <Flex center>
      <Box w={300}>
        {/*
        <ListItem
          title={hora + ":" + minutos + ":" + segundos + " hs"}
          leading={<Icon path={mdiClockTimeFourOutline} size={10} />}
          trailing={(props) => <Icon name="chevron-right" {...props} />}          
        />
        */}
        <Clock />

        <Divider style={{ marginTop: 20 }} leadingInset={16} />

        <Card
          style={{
            marginBottom: "1rem",
            //width: "30rem",
          }}
        >
          <Card.Content>
            <Text variant="titleLarge">
              1° turno{" "}
              <Avatar.Icon
                size={15}
                color="white"
                style={{ backgroundColor: turno1.color }}
              />
              {"  "}
              {turno1.bool && (
                <>
                 {fActualmente()}
                </>
              )}
            </Text>
            <Text variant="bodyMedium">12:00 hs a 12:45 hs</Text>
          </Card.Content>
        </Card>

        <Card
          style={{
            marginBottom: "1rem",
            //width: "30rem",
          }}
        >
          <Card.Content>
            <Text variant="titleLarge">
              2° turno{" "}
              <Avatar.Icon
                size={15}
                color="white"
                style={{ backgroundColor: turno2.color }}
              />
              {"  "}
              {turno2.bool && (
                <>
                 {fActualmente()}
                </>
              )}
            </Text>
            <Text variant="bodyMedium">13:00 hs a 13:45 hs</Text>
          </Card.Content>
        </Card>

        <Card
          style={{
            marginBottom: "1rem",
            //width: "30rem",
          }}
        >
          <Card.Content>
            <Text variant="titleLarge">
              3° turno{" "}
              <Avatar.Icon
                size={15}
                color="white"
                style={{ backgroundColor: turno3.color }}
              />
              {"  "}
              {turno3.bool && (
                <>
                  {fActualmente()}
                </>
              )}
            </Text>
            <Text variant="bodyMedium">14:00 hs a 14:45 hs</Text>
          </Card.Content>
        </Card>
      </Box>
    </Flex>
  );
}

export default Horarios