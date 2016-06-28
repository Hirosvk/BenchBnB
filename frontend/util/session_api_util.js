const SessionApiUtil = {
  signup(userInfo, successCallback, errorCallback){
    $.ajax({
      url: "/api/user",
      type: "POST",
      dataType: "JSON",
      data: {
        user: userInfo
      },
      success: successCallback,
      error: errorCallback
    });
  },

  login(userInfo, successCallback, errorCallback){
    $.ajax({
      url: "/api/session",
      type: "POST",
      dataType: "JSON",
      data: {
        user: userInfo
      },
      success: successCallback,
      error: errorCallback
    });
  },

  logout(successCallback, errorCallback){
    $.ajax({
      url: "/api/session",
      type: "DELETE",
      success: successCallback,
      error: errorCallback
    });
  }
};

module.exports = SessionApiUtil;
