// SchoolDetails.tsx
import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

const SchoolDetails: React.FC = () => {
	const route = useRoute();
	const params: any = route.params;
	const { item } = params;

	return (
		<View>
			<Text>{item.school_name}</Text>
		</View>
	);
};

export default SchoolDetails;
