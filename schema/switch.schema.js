import { SwitchTC } from '../models/switch.model'

const SwitchQuery = {
    gameById: SwitchTC.getResolver('findById'),
    gamesByIds: SwitchTC.getResolver('findByIds'),
    gameOne: SwitchTC.getResolver('findOne'),
    gameMany: SwitchTC.getResolver('findMany'),
    gameCount: SwitchTC.getResolver('count'),
    gameConnection: SwitchTC.getResolver('connection'),
    gamePagination: SwitchTC.getResolver('pagination'),
}

const SwitchMutation = {
    gameCreateOne: SwitchTC.getResolver('createOne'),
    gameCreateMany: SwitchTC.getResolver('createMany'),
    gameUpdateById: SwitchTC.getResolver('updateById'),
    gameUpdateOne: SwitchTC.getResolver('updateOne'),
    gameUpdateMany: SwitchTC.getResolver('updateMany'),
    gameRemoveById: SwitchTC.getResolver('removeById'),
    gameRemoveOne: SwitchTC.getResolver('removeOne'),
    gameRemoveMany: SwitchTC.getResolver('removeMany')
}

export { SwitchQuery, SwitchMutation }