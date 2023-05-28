import axios from "axios";

const DEFAULT_URL = "https://server.onebyzeroedu.com/";
export const getRecentBooks = async (
	dept = "Computer Science & Engineering",
	limit = 3
) => {
	try {
		const data = await axios.get(
			DEFAULT_URL + `api/resources/recent/books?limit=${limit}`
		);
		return data?.data;
	} catch (error) {
		return [];
	}
};

export const getRecentQuestions = async (
	dept = "Computer Science & Engineering",
	limit = 3
) => {
	try {
		const data = await axios.get(
			DEFAULT_URL + `api/resources/recent/questions?limit=${limit}`
		);

		return data?.data;
	} catch (error) {
		return [];
	}
};
export const getRecentSlides = async (limit = 3) => {
	try {
		const data = await axios.get(
			DEFAULT_URL + `api/resources/recent/slides?limit=${limit}`
		);

		return data?.data;
	} catch (error) {
		return [];
	}
};
export const getRecentHandNotes = async (limit = 3) => {
	try {
		const data = await axios.get(
			DEFAULT_URL + `api/resources/recent/handNotes?limit=${limit}`
		);

		return data?.data;
	} catch (error) {
		return [];
	}
};

export const getTopContributors = async (
	dept = "Computer Science & Engineering"
) => {
	try {
		const data = await axios.get(
			DEFAULT_URL + `api/resources/top-contributors/${dept}`
		);

		return data?.data?.contributors;
	} catch (error) {
		return [];
	}
};

export const getAllRecentResources = async (
	dept = "Computer Science & Engineering"
) => {
	try {
		const data = await axios.get(
			DEFAULT_URL + `api/resources/all-recent-resources/${dept}`
		);
		return data?.data;
	} catch (error) {
		return [];
	}
};
