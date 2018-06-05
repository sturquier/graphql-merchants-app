import gql from 'graphql-tag'

// Delete a single merchant
export default gql`
mutation DeleteMerchant($id: ID!) {
	deleteMerchant(id: $id) {
		id,
		firstName,
		lastName,
		address
	}
}
`