import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import React from "react";

export default function DetailsComponent(props) {
  const data = props?.route?.params;
  return (
    <View style={styles.container}>
      <View style={styles.detailsWrapper}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: data?.image }}
        />
        <Text style={styles.charName}>{data?.name}</Text>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor:
                  data?.status === "Alive"
                    ? "#32cd32"
                    : data?.status === "Dead"
                    ? "#DC143C"
                    : "#fcf75e",
                width: 10,
                height: 10,
                borderRadius: 5,
                marginRight: 10,
              }}
            ></View>
            <Text
              style={{ color: "#f5f5f5", fontSize: 18, fontWeight: "bold" }}
            >
              {data?.status + " - " + data?.species}
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <Text
            style={{
              color: "#9e9e9e",
              fontWeight: "bold",
              fontSize: 16,
              marginBottom: 5,
            }}
          >
            Last Known Location
          </Text>
          <Text style={{ color: "#f5f5f5", fontSize: 18, fontWeight: "bold" }}>
            {data?.location?.name}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#24282f",
    height: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  detailsWrapper: {
    padding: 30,
    backgroundColor: "#373e48",
    alignItems: "center",
  },
  charName: {
    color: "#f5f5f5",
    fontSize: 24,
    fontWeight: "bold",
    margin: 5,
  },
});
