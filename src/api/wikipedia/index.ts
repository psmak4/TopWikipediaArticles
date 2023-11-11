import Article from '~/models/article'

/**
 * Represents a response item with data for a specific project, access type, and date.
 * @interface
 */
interface ResponseItem {
	project: string // The project or website.
	access: string // The access type.
	year: string // The year of the data.
	month: string // The month of the data.
	day: string // The day of the data.
	articles: Article[] // An array of articles and their properties.
}

/**
 * Represents the response for getting top articles by date.
 * @interface
 */
interface GetTopArticlesResponse {
	items: ResponseItem[] // An array of response items.
}

/**
 * Represents the properties for fetching top articles by date.
 * @interface
 */
interface GetTopArticlesByDateProps {
	date: Date // The date for which to fetch top articles.
}

/**
 * Fetches the top articles from Wikipedia for a specified date.
 * @param {GetTopArticlesByDateProps} date - The date for which to fetch the articles.
 * @returns {Promise<GetTopArticlesResponse>} The response containing the top articles.
 * @throws {Error} If an invalid date is given or if there are errors in the request.
 */
const GetTopArticlesByDate = async ({ date }: GetTopArticlesByDateProps): Promise<GetTopArticlesResponse> => {
	if (!date) {
		throw new Error('Invalid date given')
	}

	const year = date.getFullYear()
	const month = ('0' + (date.getMonth() + 1)).slice(-2) // Note: Months are zero-based, so add 1.
	const day = ('0' + date.getDate()).slice(-2)

	const response = await fetch(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${year}/${month}/${day}`)
	if (!response.ok) {
		throw new Error(response.statusText)
	}

	const result = (await response.json()) as GetTopArticlesResponse

	return result

	// TODO: Define error handling for specific status codes (e.g., 404 and 429).
}

/**
 * An object representing the Wikipedia API with a method for fetching top articles by date.
 */
const WikipediaApi = {
	GetTopArticlesByDate,
}

export default WikipediaApi
