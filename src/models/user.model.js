module.exports = (mongoose) => {
  const userSchema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    username: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String },
    phone: {
      countryCode: { type: Number },
      number: { type: Number }
    },
    oauthAccounts: [
      {
        provider: {
          type: String,
          enum: [
            process.env.GOOGLE_STRATEGY_NAME,
            process.env.MICROSOFT_STRATEGY_NAME,
            process.env.GITHUB_STRATEGY_NAME
          ],
          required: true
        },
        oauthId: { type: String, required: true },
        linkedAt: { type: Date, default: Date.now }
      }
    ],
    isEmailVerified: { type: Boolean, default: false },
    isPhoneVerified: { type: Boolean, default: false },
    signupDate: { type: Date, default: Date.now },
    notifications: {
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: false },
      push: { type: Boolean, default: true }
    }
  })

  userSchema.methods.comparePassword = async function (password) {
    const bcrypt = require("bcrypt")
    const isMatch = await bcrypt.compare(password, this.password)
    return isMatch
  }
  userSchema.methods.sanitize = function () {
    return {
      id: this._id,
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      signupDate: this.signupDate,
      notifications: this.notifications,
      oauthAccounts: this.oauthAccounts.map((account) => ({
        provider: account.provider,
        linkedAt: account.linkedAt
      })),
      isEmailVerified: this.isEmailVerified,
      isPhoneVerified: this.isPhoneVerified
    }
  }
  return mongoose.model("User", userSchema)
}
