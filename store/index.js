const sleep = m => new Promise(r => setTimeout(r, m))
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

  selectedCategories: [],
})
export const mutations = {
  SET_CATEGORIES (state, category) {
    state.selectedCategories.push(category);
  },
}

export const actions = {
  async getCategoriesList ({ commit }) {
    try {
      await sleep(1000)
      await commit('SET_CATEGORIES', categories)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
}
