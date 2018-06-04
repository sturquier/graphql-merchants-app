import gql from 'graphql-tag';

// Add a single merchant
export default gql`
mutation AddMerchant($firstName: String, $lastName: String, $address: String) {
	addMerchant(firstName: $firstName, lastName: $lastName, address: $address) {
		id,
		firstName,
		lastName,
		address
	}
}
`