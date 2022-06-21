import { ApolloClient , InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o2zez60a0k01z71vctekl9/master',
  cache: new InMemoryCache()
})