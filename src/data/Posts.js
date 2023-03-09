const fakePosts = [
  {
    id: 1,
    username: "McFly",
    user_image: "https://picsum.photos/id/27/200/300",
    location: "Naples",
    date: "3h",
    image: "https://picsum.photos/id/12/800/600",
    liked: {
      users: [
        {
          id: "1",
          username: "mario",
          user_image: "",
        },
        {
          id: "2",
          username: "Luigi",
          user_image: "",
        },
      ],
    },

    comments: [
      {
        id: "1",
        username: "mario",
        user_image: "",
        comment: "grande ciro",
      },
      {
        id: "2",
        username: "luigi",
        user_image: "",
        comment: "bella per te capuano",
      },
      {
        id: "3",
        username: "pluto",
        user_image: "",
        comment: "fo cess",
      },
    ],
  },
  {
    id: 2,
    username: "Ciro",
    user_image: "https://picsum.photos/id/237/200/300",
    location: "Naples",
    date: "12h",
    image: "https://picsum.photos/id/107/800/600",
    liked: {
      users: [
        {
          id: "1",
          username: "assetto corsa",
          user_image: "",
        },
        {
          id: "2",
          username: "Luigi",
          user_image: "",
        },
        {
          id: "3",
          username: "Pippo",
          user_image: "",
        },
      ],
    },

    comments: [
      {
        id: "1",
        username: "mario",
        user_image: "",
        comment: "",
      },
      {
        id: "2",
        username: "luigi",
        user_image: "",
        comment: "",
      },
      {
        id: "3",
        username: "pluto",
        user_image: "",
        comment: "",
      },
    ],
  },
];

export default fakePosts;






