// SchoolList.tsx
import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchSchools } from "../utils/api";

interface School {
	school_name: string;
	dbn: string;
}

const SchoolList: React.FC = () => {
	const navigation = useNavigation();
	const [schools, setSchools] = useState<School[]>([]);

	const fetchSchoolData = async () => {
		try {
			const fetchedSchools = await fetchSchools();
			setSchools(fetchedSchools);
		} catch (error) {
			console.error("Error fetching schools:", error);
		}
	};

	useEffect(() => {
		fetchSchoolData();
	}, []);

	const handlePressSchool = (item: School) => {
		navigation.navigate("SchoolDetails", { item });
	};

	return (
		<View style={styles.container}>
			{schools.length ? (
				<FlatList
					data={schools}
					keyExtractor={(item) => item.dbn}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.itemContainer}
							onPress={() => handlePressSchool(item)}
						>
							<View>
								<Text>{item.school_name}</Text>
							</View>
						</TouchableOpacity>
					)}
				/>
			) : (
				<Text>Loading</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	itemContainer: {
		marginBottom: 12,
		padding: 12,
		backgroundColor: "#f0f0f0",
		borderRadius: 8,
	},
});

export default SchoolList;
