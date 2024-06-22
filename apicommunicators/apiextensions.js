

export const APIExtensions = {
    Accounts: {
        V1: {
            CreateAccount: '/account/v1/create',
            GetAccounts: '/account/v1/get',
            GetAccount: '/account/v1/get/:id',
            UpdateAccount: '/account/v1/update/:id',
            DeleteAccount: '/account/v1/delete/:id',
        }
    },
    Destinations: {
        V1: {
            CreateDestination: '/destinations/v1/create',
            GetDestination: '/account/destinations/v1/get/:accountId',
            UpdateDestination: '/destinations/v1/update/:id',
            DeleteDestination: '/destinations/v1/delete/:id',
            GetDestinations: '/destinations/v1/get',
        }
    },
    ReceivingData: {
        V1: {
            IncomingData: '/server/incoming_data'
        }
    }
}