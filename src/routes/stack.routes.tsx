import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../../styles/colors";
import { Welcome } from "../pages/Welcome/Welcome";
import { UserIndentification } from "../pages/UserIdentification/UserIdentification";
import { Confirmation } from "../pages/Confirmation/Confirmation";
import { PlantSelect } from "../pages/PlantSelect/PlantSelect";

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: { backgroundColor: colors.white },
    }}
  >
    <StackRoutes.Screen name="Welcome" component={Welcome} />
    <StackRoutes.Screen name="PlantSelect" component={PlantSelect} />
    <StackRoutes.Screen
      name="UserIdentification"
      component={UserIndentification}
    />
    <StackRoutes.Screen name="Confirmation" component={Confirmation} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
