import { createServer } from 'http'
import { createYoga, createSchema } from 'graphql-yoga'
import { typeDefs } from './schema/typeDefs.generated'
import { resolvers } from './schema/resolvers.generated'
 
function main() {
    const yoga = createYoga({ schema: createSchema({ typeDefs, resolvers }) })  
    const server = createServer(yoga)
  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}
 
main()