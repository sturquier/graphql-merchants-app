import gql from 'graphql-tag'

// Get all merchants
export default gql`
{
	merchants {
		id,
		firstName,
		lastName,
		address
	}
}
`