const User = require('~/app/models/user')
const {
  superAdmin: { firstName, lastName, email, password }
} = require('~/app/configs/config')
const {
  roles: { SUPERADMIN }
} = require('~/app/consts/auth')
const logger = require('~/app/logger/logger')

const SeedSuperAdmin = {
  createSuperAdmin: async () => {
    try {
      const superAdmin = {
        role: SUPERADMIN,
        firstName,
        lastName,
        email,
        password: password,
        active: true,
        isEmailConfirmed: true
      }

      return await User.create(superAdmin)
    } catch (err) {
      logger.error(err)
    }
  }
}

module.exports = SeedSuperAdmin
