import { gql } from '@apollo/client';

const GET_COUNTRIES = gql`

query countries{
    countries{
    code
    name
    continent{
        name
    }
    capital
    currency
    languages{
        name
    }
  }
}
`;

export default GET_COUNTRIES;