import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Card } from "react-native-paper";
import React from "react";

export default function CharactersCard(props) {
  return (
    // <Card
    //   key={props.data.id}
    //   style={styles.card}
    //   onPress={() => props.navigation.navigate("Details", props.data)}
    // >
    //   <Card.Cover source={{ uri: props.data.image }} />
    //   <Card.Actions>
    //     <Text>{props.data.name}</Text>
    //   </Card.Actions>
    // </Card>
    <Pressable onPress={() => props.navigation.navigate("Details", props.data)}>
      <View style={styles.itemWrapperStyle}>
        <Image
          style={{ width: 50, height: 50, marginRight: 30 }}
          source={{ uri: props?.data?.image }}
        />
        <View style={styles.contentWrapperStyle}>
          <Text style={styles.itemNameStyles}>{props?.data?.name}</Text>
          <Text style={{ color: "#f5f5f5" }}>
            {props?.data?.location?.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    minWidth: 100,
    minHeight: 20,
  },
  // #485c6a #3e4f5b #f5f5f5
  itemWrapperStyle: {
    backgroundColor: "#373e48",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    // borderWidth: 1,
    // borderColor: "#ddd",
    marginBottom: 10,
    borderRadius: 8,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  itemNameStyles: {
    color: "#f5f5f5",
    fontWeight: "bold",
    fontSize: 20,
  },
});
