import gql from 'graphql-tag'

// Add a single product to a single merchant
export default gql`
mutation AddProductToMerchant($name: String, $description: String, $price: Float, $merchantId: ID!) {
	addMerchant(name: $name, description: $description, price: $price, merchantId: $merchantId) {
		id,
		firstName,
		lastName,
		address,
		products {
			id,
			name,
			description,
			price
		}
	}
}
`