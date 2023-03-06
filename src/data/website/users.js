const users = [
  {
    id: 1,
    name: "Samuel",
    last_name: "Bandeira de Oliveira",
    orders: [
      [
        {
          total_price: 110,
          items: [
            {
              quantity: 1,
              bookId: 1
            },
            {
              quantity: 2,
              bookId: 2
            }
          ]
        }
      ],
      [
        {
          total_price: 80,
          items: [
            {
              quantity: 2,
              bookId: 5
            }
          ]
        }
      ]
    ]
  }
];

export const getUser = () => {
  return users[0];
};
