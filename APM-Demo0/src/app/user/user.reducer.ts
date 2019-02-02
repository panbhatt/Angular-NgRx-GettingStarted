export function reducer(state, action) {
  console.log(JSON.stringify(state));
  console.log(JSON.stringify(action));
  switch (action.type) {
    case "MARK_USER_NAME":
      return {
        ...state,
        username: action.payload.username,
        markUserName: action.payload.markUserName
      };
  }
}
