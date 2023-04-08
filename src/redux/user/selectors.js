export const selectStatus = state=>state.user.status;
export const selectError = state=>state.user.error;
export const selectIsLoggedIn = state=>state.user.isLoggedIn;

export const selectIsRefreshing = state => state.user.isRefreshing;
export const selectUserEmail = state => state.user.user.email;