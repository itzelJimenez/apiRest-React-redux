export const SHOW_USERS = 'SHOW_USERS'


export function showUsers() {

  const users = [
    {id: 1, name: 'Juan'},
    {id: 2, name: 'José'},
    {id: 3, name: 'Roberto'},
    {id: 4, name: 'Angel'},
    {id: 5, name: 'Luisa'},
  ]

  return {
    type: SHOW_USERS,
    payload: users,
  }
}
