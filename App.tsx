// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SchoolListScreen from "./screens/SchoolList";
import SchoolDetailsScreen from "./screens/SchoolDetails";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="SchoolList" component={SchoolListScreen} />
				<Stack.Screen
					name="SchoolDetails"
					component={SchoolDetailsScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
