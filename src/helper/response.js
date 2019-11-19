module.exports = {

  response: (res, status, resultModel) => {
    const result = {}
    if (status === 200) {
      result.status = status
      result.data = resultModel
    } if (status === 500) {
      result.status = status
      result.message = resultModel
    }
    return res.status(result.status).json(result)
  }

}
