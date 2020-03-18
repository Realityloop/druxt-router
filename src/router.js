import axios from 'axios'
import Url from 'url-parse'

class DruxtRouter {
  /**
   * Constructor.
   *
   * @param string baseURL
   * @param object options
   */
  constructor (baseURL, options = {}) {
    // Check for URL.
    if (!baseURL) {
      throw new Error('The \'baseURL\' parameter is required.')
    }

    // Setup Axios.
    this.axios = axios.create({ baseURL })

    // Setup options.
    this.setOptions(options)
  }

  setOptions (options = {}) {
    // Setup entity preprocess callback.
    if (typeof options.preprocessEntity === 'function') {
      this.preprocessEntity = options.preprocessEntity
    }
  }

  /**
   * Returns Drupal entity and route for given path.
   *
   * @param string path
   */
  async get (path) {
    const route = await this.getRoute(path)

    const redirect = this.getRedirect(path, route)

    // Get entity from API.
    // @TODO - Add validation/error handling.
    const entity = await this.getResourceByRoute(route)

    return { entity, redirect, route }
  }

  /**
   * @param object route
   */
  getRedirect (path, route) {
    // Redirect to route provided redirect.
    if (Array.isArray(route.redirect) && typeof route.redirect[0].to !== 'undefined') {
      return route.redirect[0].to
    }

    // Redirect to root if route is home path but path isn't root.
    if (route.isHomePath) {
      if (path !== '/') {
        return '/'
      }

      return false
    }

    // Redirect if path does not match resolved clean url path.
    if (typeof route.resolved === 'string') {
      const url = new Url(route.resolved)

      if (path !== url.pathname) {
        return url.pathname
      }
    }

    return false
  }

  /**
   * Get a JSON:API resource by type and ID.
   *
   * @param string type
   * @param string id
   */
  async getResource ({ id, type }) {
    const { entityType, bundle } = this.convertResourceToEntityBundle(type)

    const url = `/api/${entityType}/${bundle}/${id}`
    const response = await this.axios.get(url)

    const resource = { id, type, data: response.data }

    // Process entity before it's stored.
    if (this.preprocessEntity) {
      resource._raw = resource.data
      resource.data = await this.preprocessEntity(response)
    }

    return resource
  }

  /**
   * Get a JSON:API resource by Drupal route.
   *
   * @param object route
   */
  getResourceByRoute (route) {
    return this.getResource({ id: route.entity.uuid, type: route.jsonapi.resourceName })
  }

  /**
   * Get routing data from Decoupled Router.
   *
   * @param string path
   */
  async getRoute (path) {
    // @TODO - Add validation/error handling.
    const url = `/router/translate-path?path=${path}`
    const response = await this.axios.get(url)

    return response.data
  }

  /**
   * Convert a JSON:API resource type to a Drupal Entity/Bundle.
   *
   * @todo Add support for JSON:API Extras.
   *
   * @param string type
   */
  convertResourceToEntityBundle (type) {
    const parts = type.split('--')

    return {
      entityType: parts[0],
      bundle: parts[1]
    }
  }
}

export { DruxtRouter }