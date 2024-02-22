import axios from "axios";

const API_URL = "https://data.cityofnewyork.us/resource/s3k6-pzi2.json";

export const fetchSchools = async () => {
	try {
		const response = await axios.get(API_URL);
		return response.data;
	} catch (error) {
		console.error("Error fetching schools:", error);
		return [];
	}
};
