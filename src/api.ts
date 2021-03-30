export default {
  menus: [
    // first group of radio-buttons
    [
      { id: '101', value: 'Vegetarian' },
      { id: '102', value: 'Nut allergy' },
      { id: '103', value: 'Halal' },
    ],
    // second group of radio-buttons
    [
      { id: '201', value: 'Cashew chicken' },
      { id: '202', value: 'Sweet and sour pork' },
      { id: '203', value: 'Stir fried Tofu' },
      { id: '204', value: 'Vegetable fried rice' },
      { id: '205', value: 'Pad Thai' },
      { id: '206', value: 'Massaman beef' },
    ],
    // third group of radio-buttons
    [
      { id: '301', value: 'Peanut sauce' },
      { id: '302', value: 'Oyster sauce' },
      { id: '303', value: 'Vegetable spring rolls' },
      { id: '304', value: 'Steamed rice' },
    ],

    /* Added 4th and 5th group to showcase scalability
     * Real world context is not considered for sample data
     * (e.g Vegetarian is not compatible with unli pork and so on)
     *
     * This can be removed or changed. Refresh page after.
     */
    // 4th group of radio-buttons
    [
      { id: '401', value: 'Pinakbet' },
      { id: '402', value: 'Pork adobo' },
      { id: '403', value: 'Chicken silog' },
      { id: '404', value: 'Pork sinigang' },
      { id: '405', value: 'Pancit canton' },
      { id: '406', value: 'Unli pork' },
    ],

    // 5th group of radio-buttons
    [
      { id: '501', value: 'Romantic baboy' },
      { id: '502', value: 'Unli wings' },
      { id: '503', value: 'Fat Dois' },
    ],
  ],
  rules: {
    // 'Vegetarian' is NOT compatible with 'Cashew chicken', 'Sweet and sour pork', 'Massaman beef', 'Oyster sauce'
    101: [201, 202, 206, 302],
    // 'Nut allergy' is NOT compatible with 'Cashew chicken', 'Peanut sauce',
    102: [201, 301],
    // 'Halal' is NOT compatible with 'Sweet and sour pork',
    103: [202, 402, 404, 501, 406],
    // 'Vegetable fried rice' is NOT compatible with 'Steamed rice' (you don't need more rice... carb overload),
    204: [304],
    // 'Pad thai' is NOT compatible with 'Steamed rice' (Pad thai comes with noodles),
    205: [304],
    // Added sample rules
    303: [406, 502],
    403: [502],
  },
};

/**
 * Ideally in the real world apps/APIs, there should be consistency when it comes to data types
 *
 * For example here:
 * Initially in menus array, "id" is of type string
 * but in the rules object, these "id"s are of type number
 *
 * If this part of the test, I just want to point that out also
 */
