import gql from 'graphql-tag';

// Get all products
export default gql`
{
	products {
		id,
		name,
		description,
		price
	}
}
`