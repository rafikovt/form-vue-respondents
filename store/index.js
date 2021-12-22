
const optionsList = [
  {
    id: 1,
    value: 'Возраст респондента'
  },
  {
    id: 2,
    value: 'Тип карты лояльности',
    options: [
      {
        id: 1,
        value: 'Gold',
      },
      {
        id: 2,
        value: 'Silver',
      },
      {
        id: 3,
        value: 'Bronze',
      },
    ]
  },
  {
    id: 3,
    value: 'Статус карты лояльности',
    options: [
      {
        id: 1,
        value: 'Активна',
      },
      {
        id: 2,
        value: 'Не активирована',
      },
      {
        id: 3,
        value: 'Заблокировано',
      },
    ]
  },
]

export const state = () => ({
  optionsList: [
    {
      id: 1,
      value: 'Возраст респондента'
    },
    {
      id: 2,
      value: 'Тип карты лояльности',
      options: [
        {
          id: 1,
          value: 'Gold',
        },
        {
          id: 2,
          value: 'Silver',
        },
        {
          id: 3,
          value: 'Bronze',
        },
      ]
    },
    {
      id: 3,
      value: 'Статус карты лояльности',
      options: [
        {
          id: 1,
          value: 'Активна',
        },
        {
          id: 2,
          value: 'Не активирована',
        },
        {
          id: 3,
          value: 'Заблокировано',
        },
      ]
    },
  ],

  questionsData: [],
})
export const mutations = {
  SET_QUESTIONS_DATA(state, payload) {
    state.questionsData = payload;
  }
}

export const actions = {
  setQuestionsData (context, data) {
    try {
      context.commit('SET_QUESTIONS_DATA', data)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
}
