import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { FC } from "react";
import {
  Button,
  Text,
  TextInput,
  View
} from "react-native";

import { FIREBASE_AUTH } from "@/firebaseConfig";
import { TypeRootStackParamList } from "@/types/navigation";
import { emailValid } from "@/utils/emailValid";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Controller, useForm } from "react-hook-form";
import { style } from "../styles";
interface ISignUp {
  navigation: NativeStackNavigationProp<TypeRootStackParamList>;
}
type typedFormData = {
  email: string;
  password: string;
  userName?: string;
};
export const SignUp: FC<ISignUp> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<typedFormData>();
  const auth = FIREBASE_AUTH;
  const onLogin = handleSubmit((data: typedFormData) => {
    try {
      createUserWithEmailAndPassword(auth, data.email, data.password);
      navigation.navigate("SignIn");
    } catch (error) {
      alert(error);
    }
  });

  return (
    <View>
      <Controller
        control={control}
        rules={{
          validate: {
            matchPattern: emailValid,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text style={style.label}>Email</Text>
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
          minLength: 8,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text style={style.label}>Password</Text>
            <TextInput
              style={style.input}
              placeholder="Password "
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
        name="password"
      />
      <Button title="Cтворити акаунт" onPress={onLogin} />
      <Button
        title="У вас вже є акаунт? Увійти"
        onPress={() => navigation.navigate("SignIn")}
      />
    </View>
  );
};
