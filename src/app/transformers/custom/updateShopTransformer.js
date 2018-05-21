/* ============
 * Register personal informations Transformer
 * ============
 *
 * The transformer for the personal information.
 */

import Transformer from './../transformer';

export default class UpdateShopTransformer extends Transformer {
    /**
     * Method used to transform a fetched personalInfo
     *
     * @param shop The fetched shop info
     *
     * @returns {Object} The transformed personalInfo
     */
  static send(shop) {
    return {
      description  : shop['description'] ,
      friday_end   : shop['friday_end'] ? shop['friday_end'] : '',
      friday_start : shop['friday_start'] ? shop['friday_start'] : '',
      sunday_start : shop['sunday_start'] ? shop['sunday_start'] : '',
      sunday_end   : shop['sunday_end'] ? shop['sunday_end'] : '',
      monday_start : shop['monday_start'] ? shop['monday_start'] : '',
      monday_end   : shop['monday_end'] ? shop['monday_end'] : '',
      name         : shop['name'],
      id         : shop['shop_id'],
      saturday_end : shop['saturday_end'] ? shop['saturday_end'] : '',
      saturday_start : shop['saturday_start'] ? shop['saturday_start'] : '',
      short_description : shop['short_description'],
      thursday_end      : shop['thursday_end'] ? shop['thursday_end'] : '',
      thursday_start    : shop['thursday_start'] ? shop['thursday_start'] : '',
      tuesday_end       : shop['tuesday_end'] ? shop['tuesday_end'] : '',
      tuesday_start     : shop['tuesday_start'] ? shop['tuesday_start'] : '',
      wednesday_end     : shop['wednesday_end'] ? shop['wednesday_end'] : '',
      wednesday_start   : shop['wednesday_start'] ? shop['wednesday_start'] : '',
    };
}
}
