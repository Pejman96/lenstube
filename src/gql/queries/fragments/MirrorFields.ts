import { gql } from '@apollo/client'

import { CollectFields } from './CollectFields'
import { MetadataFields } from './MetadataFields'
import { ProfileFields } from './ProfileFields'

export const MirrorFields = gql`
  fragment MirrorFields on Mirror {
    id
    profile {
      name
      handle
    }
    reaction(request: $reactionRequest)
    collectModule {
      ...CollectFields
    }
    stats {
      totalUpvotes
      totalAmountOfMirrors
      totalAmountOfCollects
      totalAmountOfComments
    }
    metadata {
      ...MetadataFields
    }
    mirrorOf {
      ... on Post {
        id
        profile {
          ...ProfileFields
        }
        metadata {
          ...MetadataFields
        }
        reaction(request: $reactionRequest)
        stats {
          totalUpvotes
          totalAmountOfMirrors
          totalAmountOfCollects
          totalAmountOfComments
        }
      }
      ... on Comment {
        id
        profile {
          ...ProfileFields
        }
        reaction(request: $reactionRequest)
        stats {
          totalUpvotes
          totalAmountOfMirrors
          totalAmountOfCollects
          totalAmountOfComments
        }
      }
    }
    createdAt
    appId
  }
  ${ProfileFields}
  ${CollectFields}
  ${MetadataFields}
`
