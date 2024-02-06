const allowedUserFieldsForUpdate = {
  photo: true,
  firstName: true,
  lastName: true,
  address: {
    country: true,
    city: true
  },
  professionalSummary: true,
  nativeLanguage: true,
  appLanguage: true,
  FAQ: true
}

module.exports = {
  allowedUserFieldsForUpdate
}
