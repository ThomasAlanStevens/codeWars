function validPhoneNumber(phoneNumber){
    return phoneNumber.match(/^\(\d{3}\) \d{3}-\d{4}$/) == undefined ? false : true
  }