/**
 * parse a response 
 * @param response 
 * @returns {Promise.<TResult>}
 */
export function parseResponse(response) {
  let isOk = response.ok;

  return response.text()
    .then(body => {
      try {
        body = JSON.parse(body)
      } catch (error) {
        if (isOk) isOk = false
      }

      if (isOk) return body;

      throw {...body, statusCode: response.status}
    })
}

/**
 * if response - is a simple array like [{}, {}, {}]
 *  - it turn it to this:
 *  {
 *      resources: [{}, {}, {}]
 *      count: 3
 *  }
 * @param response
 * @returns {*}
 */
export function normalizeResponse(response) {
  if (Array.isArray(response)) {
    return {
      resources: response,
      count: response.length
    }
  }
  return response;
}