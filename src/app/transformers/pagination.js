/* ============
 * Pagination Transformer
 * ============
 *
 * The transformer for the pagination.
 */

import Transformer from './transformer';

export default class PaginationTransformer extends Transformer {
  /**
  * Method used to transform the fetched pagination
  *
  * @param pagination The fetched pagination
  *
  * @returns {Object} The transformed pagination
  */
  static fetch(pagination) {
    return {
      currentPage: pagination.current_page,
      lastPage: pagination.last_page,
      limit: pagination.limit,
      totalCount: pagination.total_count,
      counters: pagination.counters,
    };
  }

  /**
  * Method used to transform the pagination which will be send
  *
  * @param pagination The pagination to be send
  *
  * @returns {Object} The transformed pagination
  */
  static send(pagination) {
    return {
      current_page: pagination.currentPage,
      last_page: pagination.lastPage,
      limit: pagination.limit,
      total_count: pagination.totalCount,
    };
  }
}
