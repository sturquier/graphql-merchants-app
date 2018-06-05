import gql from 'graphql-tag';

// Get a single merchant
export default gql`
query GetMerchant($id: ID!) {
	merchant(id: $id) {
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