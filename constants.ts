import { NewsPost } from './types';

export const ASSETS = {
  logoHeader: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Global-Header_MCCB-Logo_300x51.svg',
  logoMain: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Homepage_Gameplay-Trailer_MC-OV-logo_300x300.png',
  sword: 'https://zh.minecraft.wiki/images/thumb/Diamond_Sword_JE3_BE3.png/150px-Diamond_Sword_JE3_BE3.png?7b46e',
  bg: 'https://youke2.picui.cn/s1/2025/12/24/694bcd4e34d31.png',
};

export const MOCK_NEWS: NewsPost[] = [
  {
    id: 1,
    title: "The Nether Update is Live!",
    excerpt: "Explore the new biomes, meet the Piglins, and survive the heat in our biggest update yet.",
    date: "Dec 24, 2025",
    image: "https://picsum.photos/id/1015/800/600",
    category: "Update"
  },
  {
    id: 2,
    title: "Winter Build Contest",
    excerpt: "Show off your building skills! Theme: Frozen Fortress. Winner gets the Diamond Rank.",
    date: "Dec 20, 2025",
    image: "https://picsum.photos/id/1016/800/600",
    category: "Event"
  },
  {
    id: 3,
    title: "Community Spotlight: MegaCity",
    excerpt: "Check out this incredible city built by user Steve_Miner123 over the course of 3 years.",
    date: "Dec 18, 2025",
    image: "https://picsum.photos/id/1018/800/600",
    category: "Community"
  }
];

export const SERVER_IP = "play.blockrealm.net";