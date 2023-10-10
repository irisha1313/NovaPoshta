import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface ICreatePackage {}
export const CreatePackage: FC<ICreatePackage> = ({}) => {
  return (
    <View>
      <Text>CreatePackage</Text>
    </View>
  );
};
const style = StyleSheet.create({ container: {} });
