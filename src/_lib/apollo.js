import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cljr2xxcr077z01t7db2q3rmt/master',
    cache: new InMemoryCache()
  })

export const GET_PORTFOLIO = gql`
query portforlio {
    portfolios (first: 1) {
      email,
      role,
      yearsExperience,
      avatar {
        url
      },
      cv {
        url
      },
      experiences {
        id,
        role,
        company,
        companyLogo {
          url
        },
        period
      },
      summary,
      socials {
        id,
        url,
        name,
        logo,
        fill
      },
      projects {
        id,
        name,
        url,
        tags,
        image {
          url
        }
      },
      skills {
        id,
        name,
        score,
        icon,
        fill
      }
    }
  }
`