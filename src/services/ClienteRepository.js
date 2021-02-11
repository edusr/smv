import Realm from 'realm'

import ClienteSchema from '../schemas/ClienteSchema'

export default function getClientes() {
    return Realm.open({
        schema: {ClienteSchema},
    })
}