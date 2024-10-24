import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPosts: [],
  userPosts: [
    {
      id: 7,
      user_id: 11,
      title: "test test test",
      description:
        "fd sd dsfaa fsdafa gah  hjtyeuj ytjyt j fgdj sfghjsgfh se4r ygdhg",
      create_time: "2024-10-21T06:13:29.000Z",
      update_time: null,
    },
    {
      id: 8,
      user_id: 11,
      title: "fdssaf dsf",
      description: "sdfdsafsadfasdf",
      create_time: "2024-10-21T06:14:54.000Z",
      update_time: null,
    },
    {
      id: 9,
      user_id: 11,
      title: "fsdafsdaa fsda fdsaafdsf",
      description:
        "fsdaf sdghgfdj gyjh rtyyyrt ynbvn dfgn truytryudgfh fgh gfdjhtyrijihf ggfhdgf",
      create_time: "2024-10-21T06:15:47.000Z",
      update_time: null,
    },
    {
      id: 10,
      user_id: 11,
      title: "cffsdf",
      description: "sdafasdf",
      create_time: "2024-10-21T06:22:27.000Z",
      update_time: null,
    },
    {
      id: 11,
      user_id: 11,
      title: "hjghjghj",
      description: "ghjghjghjg",
      create_time: "2024-10-21T06:25:45.000Z",
      update_time: null,
    },
    {
      id: 12,
      user_id: 11,
      title: "fddsafa fdsa fdsaf",
      description: "f asdhsrfghj tyh trhfdh sdfg sfd gre trgsdf",
      create_time: "2024-10-21T06:37:10.000Z",
      update_time: null,
    },
    {
      id: 13,
      user_id: 11,
      title: "dfggfd",
      description: "g dfs g dfdfg",
      create_time: "2024-10-21T07:06:11.000Z",
      update_time: null,
    },
    {
      id: 14,
      user_id: 11,
      title: "fdfs",
      description: "fds dfsa fdsa fsdafsdagfsg ",
      create_time: "2024-10-21T07:06:59.000Z",
      update_time: null,
    },
    {
      id: 15,
      user_id: 11,
      title: "fsdafdsa",
      description: "fsadf dsa fdsafdasf ",
      create_time: "2024-10-21T07:08:49.000Z",
      update_time: null,
    },
    {
      id: 16,
      user_id: 11,
      title: "fsdafdsa",
      description: "fsadf dsa fdsafdasf ",
      create_time: "2024-10-21T07:08:55.000Z",
      update_time: null,
    },
    {
      id: 17,
      user_id: 11,
      title: "fsdafdsa",
      description: "fsadf dsa fdsafdasf ",
      create_time: "2024-10-21T07:10:03.000Z",
      update_time: null,
    },
    {
      id: 18,
      user_id: 11,
      title: "fsda f",
      description: "fdsaf sadf",
      create_time: "2024-10-21T07:10:27.000Z",
      update_time: null,
    },
    {
      id: 20,
      user_id: 11,
      title: "dfsfsdf",
      description: "dsASDR E FSSDF",
      create_time: "2024-10-22T04:02:13.000Z",
      update_time: null,
    },
    {
      id: 21,
      user_id: 11,
      title: "FSA F SDF ",
      description: "F SAD",
      create_time: "2024-10-22T04:02:32.000Z",
      update_time: null,
    },
    {
      id: 22,
      user_id: 11,
      title: "FSD F",
      description: "FSDFDASF SD FASDF DASF",
      create_time: "2024-10-22T04:02:44.000Z",
      update_time: null,
    },
    {
      id: 23,
      user_id: 11,
      title: "The Best Game You've Nevered Played",
      description:
        '**EarthBound**, released for the Super Nintendo Entertainment System (SNES) in 1994 (1995 in North America), is a quirky and beloved RPG that continues to capture the imaginations of gamers to this day. Developed by Ape Inc. and HAL Laboratory, and directed by Shigesato Itoi, EarthBound breaks away from typical fantasy settings of the era. Instead, it places players in a whimsical, contemporary world filled with strange enemies, eccentric humor, and heartwarming moments. The game\'s story follows Ness, a young boy with psychic powers, on his quest to defeat the cosmic villain Giygas. Along the way, Ness forms a party with several other kids, each with unique abilities, and embarks on a journey that mixes the ordinary with the bizarre in unexpected ways.\n\nOne of the standout aspects of EarthBound is its distinct sense of humor and charm. The game’s dialogue is packed with clever, often surreal humor, and it plays with RPG conventions in a tongue-in-cheek way. Characters make references to pop culture, give nonsensical advice, and even break the fourth wall at times. This oddball style permeates every part of the game, from its enemies—like the "New Age Retro Hippie" and "Annoying Old Party Man"—to its locations, such as drugstores that sell baseball bats as weapons. This irreverent tone helped EarthBound develop a cult following, even though it struggled to find mainstream success in the West upon its initial release.\n\nMechanically, EarthBound doesn’t stray too far from traditional RPG structures, but it adds its own unique twists. The turn-based combat system is straightforward, yet the rolling HP meter adds a layer of strategy. When a character takes damage, their HP decreases in real-time, meaning players have a short window to heal before their health fully depletes. This mechanic encourages quick thinking and adds excitement to otherwise routine battles. Additionally, the game’s inventory management, though limited, requires careful planning, which is more engaging than frustrating. The journey spans a wide range of environments, from small suburban towns to alien landscapes, offering variety and keeping the adventure fresh.\n\nWhat really makes EarthBound special is its emotional core. Beneath its whimsical exterior is a story about growing up, friendship, and the power of hope. Ness’s journey is not just about saving the world, but also about personal growth and overcoming internal fears. The game touches on themes of isolation, courage, and connection in ways that resonate deeply with players. Coupled with a memorable soundtrack that blends catchy, playful tunes with eerie, atmospheric tracks, EarthBound offers an experience that is both lighthearted and profoundly moving. It\'s a game that stays with you long after the credits roll, and despite its unconventional nature, it remains a timeless classic in the RPG genre.',
      create_time: "2024-10-23T05:52:04.000Z",
      update_time: null,
    },
    {
      id: 24,
      user_id: 11,
      title: "The Best Game You've Nevered Played",
      description:
        '**EarthBound**, released for the Super Nintendo Entertainment System (SNES) in 1994 (1995 in North America), is a quirky and beloved RPG that continues to capture the imaginations of gamers to this day. Developed by Ape Inc. and HAL Laboratory, and directed by Shigesato Itoi, EarthBound breaks away from typical fantasy settings of the era. Instead, it places players in a whimsical, contemporary world filled with strange enemies, eccentric humor, and heartwarming moments. The game\'s story follows Ness, a young boy with psychic powers, on his quest to defeat the cosmic villain Giygas. Along the way, Ness forms a party with several other kids, each with unique abilities, and embarks on a journey that mixes the ordinary with the bizarre in unexpected ways.\n\nOne of the standout aspects of EarthBound is its distinct sense of humor and charm. The game’s dialogue is packed with clever, often surreal humor, and it plays with RPG conventions in a tongue-in-cheek way. Characters make references to pop culture, give nonsensical advice, and even break the fourth wall at times. This oddball style permeates every part of the game, from its enemies—like the "New Age Retro Hippie" and "Annoying Old Party Man"—to its locations, such as drugstores that sell baseball bats as weapons. This irreverent tone helped EarthBound develop a cult following, even though it struggled to find mainstream success in the West upon its initial release.\n\nMechanically, EarthBound doesn’t stray too far from traditional RPG structures, but it adds its own unique twists. The turn-based combat system is straightforward, yet the rolling HP meter adds a layer of strategy. When a character takes damage, their HP decreases in real-time, meaning players have a short window to heal before their health fully depletes. This mechanic encourages quick thinking and adds excitement to otherwise routine battles. Additionally, the game’s inventory management, though limited, requires careful planning, which is more engaging than frustrating. The journey spans a wide range of environments, from small suburban towns to alien landscapes, offering variety and keeping the adventure fresh.\n\nWhat really makes EarthBound special is its emotional core. Beneath its whimsical exterior is a story about growing up, friendship, and the power of hope. Ness’s journey is not just about saving the world, but also about personal growth and overcoming internal fears. The game touches on themes of isolation, courage, and connection in ways that resonate deeply with players. Coupled with a memorable soundtrack that blends catchy, playful tunes with eerie, atmospheric tracks, EarthBound offers an experience that is both lighthearted and profoundly moving. It\'s a game that stays with you long after the credits roll, and despite its unconventional nature, it remains a timeless classic in the RPG genre.',
      create_time: "2024-10-23T05:52:25.000Z",
      update_time: null,
    },
    {
      id: 25,
      user_id: 11,
      title: "Eathbound: The Best Game You've Never Played",
      description:
        '**EarthBound**, released for the Super Nintendo Entertainment System (SNES) in 1994 (1995 in North America), is a quirky and beloved RPG that continues to capture the imaginations of gamers to this day. Developed by Ape Inc. and HAL Laboratory, and directed by Shigesato Itoi, EarthBound breaks away from typical fantasy settings of the era. Instead, it places players in a whimsical, contemporary world filled with strange enemies, eccentric humor, and heartwarming moments. The game\'s story follows Ness, a young boy with psychic powers, on his quest to defeat the cosmic villain Giygas. Along the way, Ness forms a party with several other kids, each with unique abilities, and embarks on a journey that mixes the ordinary with the bizarre in unexpected ways.\n\nOne of the standout aspects of EarthBound is its distinct sense of humor and charm. The game’s dialogue is packed with clever, often surreal humor, and it plays with RPG conventions in a tongue-in-cheek way. Characters make references to pop culture, give nonsensical advice, and even break the fourth wall at times. This oddball style permeates every part of the game, from its enemies—like the "New Age Retro Hippie" and "Annoying Old Party Man"—to its locations, such as drugstores that sell baseball bats as weapons. This irreverent tone helped EarthBound develop a cult following, even though it struggled to find mainstream success in the West upon its initial release.\n\nMechanically, EarthBound doesn’t stray too far from traditional RPG structures, but it adds its own unique twists. The turn-based combat system is straightforward, yet the rolling HP meter adds a layer of strategy. When a character takes damage, their HP decreases in real-time, meaning players have a short window to heal before their health fully depletes. This mechanic encourages quick thinking and adds excitement to otherwise routine battles. Additionally, the game’s inventory management, though limited, requires careful planning, which is more engaging than frustrating. The journey spans a wide range of environments, from small suburban towns to alien landscapes, offering variety and keeping the adventure fresh.\n\nWhat really makes EarthBound special is its emotional core. Beneath its whimsical exterior is a story about growing up, friendship, and the power of hope. Ness’s journey is not just about saving the world, but also about personal growth and overcoming internal fears. The game touches on themes of isolation, courage, and connection in ways that resonate deeply with players. Coupled with a memorable soundtrack that blends catchy, playful tunes with eerie, atmospheric tracks, EarthBound offers an experience that is both lighthearted and profoundly moving. It\'s a game that stays with you long after the credits roll, and despite its unconventional nature, it remains a timeless classic in the RPG genre.',
      create_time: "2024-10-23T06:06:34.000Z",
      update_time: null,
    },
  ],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      console.log(state);
      if (state.length > 0) {
        state.allPosts = [action.payload, ...state.allPosts];
      }
      state.allPosts = action.payload;
    },
    updateAllPostsWithSinglePost: (state, action) => {
      state.allPosts.push(action.payload);
      state.allPosts.sort((a, b) => a.create_time - b.create_time);
    },
    setUserPosts: (state, action) => {
      console.log(action.payload);
      state.userPosts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts, setUserPosts, updateAllPostsWithSinglePost } =
  postSlice.actions;

export default postSlice.reducer;
