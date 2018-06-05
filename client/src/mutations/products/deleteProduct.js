import gql from 'graphql-tag';

// Delete a single product
export default gql`
mutation DeleteProduct($id: ID!) {
	deleteProduct(id: $id) {
		id,
		name,
		description,
		price
	}
}
`