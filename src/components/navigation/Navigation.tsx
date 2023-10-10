import { loginUser, setLoading } from "@/store/slices/authSlice";
import React, { FC, useState } from "react";

import { FIREBASE_AUTH } from "@/firebaseConfig";
import { useAppSelector } from "@/store/store";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { AuthorizationStack } from "./AuthorizationStack";
import { MainStack } from "./MainStack";

interface INavigation {}
export const Navigation: FC<INavigation> = ({}) => {
  const dispatch = useDispatch();
  const { user, isLoading } = useAppSelector((state) => state.auth)

  React.useEffect(() => {
    FIREBASE_AUTH.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {user ? <MainStack /> : <AuthorizationStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
