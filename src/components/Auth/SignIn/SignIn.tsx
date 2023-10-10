import React, { FC, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Text,
  TextInput,
  View
} from "react-native";

import { style } from "../styles";

import { FIREBASE_AUTH } from "@/firebaseConfig";
import { useAppSelector } from "@/store/store";
import { TypeRootStackParamList } from "@/types/navigation";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Controller, useForm } from "react-hook-form";
interface ILogin {
  navigation: NativeStackNavigationProp<TypeRootStackParamList>;
}
type formData = {
  email: string;
  password: string;
};

export const SignIn: FC<ILogin> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const user = useAppSelector((state) => state.auth.user);
  const auth = FIREBASE_AUTH;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const handleLogin = handleSubmit((data: formData) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password).then(() =>
      setIsLoading(false)
    );
  });
  return (
    <View style={style.container}>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          validate: {
            matchPattern: (v) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "Email address must be a valid address",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text style={style.label}>Email </Text>
            <TextInput
              style={style.input}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
        name="email"
      />
      {errors.email && (
        <Text style={{ color: "red" }}> {errors.email.message}</Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text style={style.label}>Password</Text>
            <TextInput
              style={style.input}
              placeholder="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
        name="password"
      />
      {errors.password && (
        <Text style={{ color: "red" }}>This is required.</Text>
      )}
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Увійти" onPress={handleLogin} />
      )}
      <Button
        title="Ще не маєте акаунта? Створити"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};
