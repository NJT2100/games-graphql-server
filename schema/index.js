import { SchemaComposer } from 'graphql-compose'

const schemaComposer = new SchemaComposer()

import { SwitchQuery, SwitchMutation } from './switch.schema'

schemaComposer.Query.addFields({
    ...SwitchQuery
})

schemaComposer.Mutation.addFields({
    ...SwitchMutation
})

export default schemaComposer.buildSchema()