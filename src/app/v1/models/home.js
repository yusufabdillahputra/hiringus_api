module.exports = {
  get: (string) => {
    try {
      return string
    } catch (error) {
      return error
    }
  }
}
