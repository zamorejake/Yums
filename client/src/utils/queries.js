import { gql } from '@apollo/client';

export const QUERY_ENTREE = gql`
  query entrees {
  entrees {
    allergy
    description
    image
    in_stock
    name
    price
    _id
  }
}
`;

export const QUERY_BEVERAGE = gql`
  query Beverages {
  beverages {
    description
    has_alcohol
    image
    in_stock
    name
    price
    _id
  }
}
`;
