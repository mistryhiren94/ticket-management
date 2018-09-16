import {
  ON_CREATE_TICKET_MODALTOGGLE,
  ADD_CREATE_TICKET_LIST,
  ASSIGN_TICKET_TOGGLE,
  ASSIGN_LIST
} from 'constants/tickets'
const intitialState = {
  isCreateTicketModalOpen: false,
  ticketsList: [],
  record: null,
  agents: [
    {
      id: 1,
      name: 'Bhavin',
      email: 'bhavin@gmail.com',
      phone: '9090909090',
      issues: []
    },
    {
      id: 2,
      name: 'Hardik',
      email: 'hardik@gmail.com',
      phone: '9876543210',
      issues: []
    },
    {
      id: 3,
      name: 'Chetan',
      email: 'chetan@gmail.com',
      phone: '8989898989',
      issues: []
    },
    {
      id: 4,
      name: 'Bhavesh',
      email: 'bhavesh@gmail.com',
      phone: '8767676767',
      issues: []
    },
    {
      id: 5,
      name: 'Hiren',
      email: 'hiren@gmail.com',
      phone: '9624221178',
      issues: []
    }
  ]
}

export default (state = intitialState, action) => {
  switch (action.type) {
    case ON_CREATE_TICKET_MODALTOGGLE:
      return { ...state, isCreateTicketModalOpen: action.isVisible }
    case ADD_CREATE_TICKET_LIST:
      return { ...state, ticketsList: [...state.ticketsList, action.values] }
    case ASSIGN_TICKET_TOGGLE:
      return { ...state, record: action.record }
    case ASSIGN_LIST:
      return { ...state, agents: action.agents, ticketsList: action.tickets }
    default:
      return state
  }
}
