const products = [
  {
    name: "donuts",
    image: "https://cdn.discordapp.com/attachments/829231612012527646/1054988265092026408/donuts.jpg",
    food: true,
    exists: true
  },
  {
    name: "chips",
    image: `https://cdn.discordapp.com/attachments/970059739318849597/1049201473617141872/chips.jpg`,
    food: true,
    exists: true
  },
  {
    name: "minced meat",
    image: "https://cdn.discordapp.com/attachments/970059739318849597/1049201474149822515/minced_meat.jpg",
    food: true,
    exists: true
  },
  {
    name: "whole bread",
    image: `https://cdn.discordapp.com/attachments/970059739318849597/1049201474380505128/whole_bread.jpg`,
    food: true,
    exists: true
  },
  {
    name: "windscreen washer",
    image: `https://cdn.discordapp.com/attachments/970059739318849597/1049201474653143050/windscreen_washer.jpg`,
    food: false,
    exists: true
  },
  {
    name: "instant meal",
    image: `https://cdn.discordapp.com/attachments/970059739318849597/1049533404074483733/image.png`,
    food: true,
    exists: true
  },
  {
    name: "carrots",
    image: "https://cdn.discordapp.com/attachments/829231612012527646/1054988249648595004/carrots.jpg",
    food: true,
    exists: true
  },
  {
    name: "all around cleaner",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988249862512721/all_around_cleaner.jpg`,
    food: false,
    exists: true
  },
  {
    name: "beef jerky",
    image: "https://cdn.discordapp.com/attachments/829231612012527646/1054988250068037702/beef_jerky.jpg",
    food: true,
    exists: true
  },
  {
    name: "blox elixir",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988250260963358/blox_elixir.jpg`,
    food: false,
    exists: true
  },
  {
    name: "bloxbull",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988250458103918/bloxbull.jpg`,
    food: true,
    exists: true
  },
  {
    name: "brake fluid",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988250646851594/brake_fluid.jpg`,
    food: false,
    exists: true
  },
  {
    name: "bread buns",
    image: "https://cdn.discordapp.com/attachments/829231612012527646/1054988250860748872/bread_buns.jpg",
    food: true,
    exists: true
  },
  {
    name: "candy bars",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988251049500703/candy_bars.jpg`,
    food: true,
    exists: true
  },
  {
    name: "canned soda",
    image: "https://cdn.discordapp.com/attachments/829231612012527646/1054988251267608637/canned_soda.jpg",
    food: true,
    exists: true
  },
  {
    name: "cheese",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988251494088775/cheese.jpg`,
    food: true,
    exists: true
  },
  {
    name: "ice cream",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988264525795428/homemade_fishfingies.jpg`,
    food: true,
    exists: true
  },
  {
    name: "chocolate bars",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988264731328583/chocolate_bars.jpg`,
    food: true,
    exists: true
  },
  {
    name: "eggs",
    image: "https://cdn.discordapp.com/attachments/829231612012527646/1054988265310142494/eggs.jpg",
    food: true,
    exists: true
  },
  {
    name: "cucumbers",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988264932651018/cucumber.jpg`,
    food: true,
    exists: true
  },
  {
    name: "homemade fishfingers",
    image: "https://cdn.discordapp.com/attachments/829231612012527646/1054988265511465020/fishfingers.jpg",
    food: true,
    exists: true
  },
  {
    name: "frozen sausages",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988265687617596/frozen_sausages.jpg`,
    food: true,
    exists: true
  },
  {
    name: "frozen veggies",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988266027368468/frozen_veggies.jpg`,
    food: true,
    exists: true
  },
  {
    name: "generic cookies",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988266207719454/generic_cookies.jpg`,
    food: true,
    exists: true
  },
  {
    name: "hamburgers",
    image: "https://cdn.discordapp.com/attachments/829231612012527646/1054988266375483392/hamburgers.jpg",
    food: true,
    exists: true
  },
  {
    name: "tomatoes",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988291847491604/tomato.jpg`,
    food: true,
    exists: true
  },
  {
    name: "hotdogs",
    image: "https://cdn.discordapp.com/attachments/829231612012527646/1054988292124332072/hotdogs.jpg",
    food: true,
    exists: true
  },
  {
    name: "ice cream cones",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988292375978024/ice_cream_cones.jpg`,
    food: true,
    exists: true
  },
  {
    name: "instant noodles",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988292615065690/instant_noodles.jpg`,
    food: false,
    exists: true
  },
  {
    name: "juice",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988292887683173/juice.jpg`,
    food: true,
    exists: true
  },
  {
    name: "lubricant",
    image: "https://cdn.discordapp.com/attachments/829231612012527646/1054988293114171482/lubricant.jpg",
    food: false,
    exists: true
  },
  {
    name: "milk",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988293332291594/milk.jpg`,
    food: true,
    exists: true
  },
  {
    name: "motor oil",
    image: "https://cdn.discordapp.com/attachments/829231612012527646/1054988293604909086/motor_oil.jpg",
    food: false,
    exists: true
  },
  {
    name: "potatoes",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988293902717048/potato.jpg`,
    food: true,
    exists: true
  },
  {
    name: "strawberry snacks",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988294179528806/strawberry_snacks.jpg`,
    food: true,
    exists: true
  },
  {
    name: "water",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988303260196864/water.jpg`,
    food: true,
    exists: true
  },
  {
    name: "washing powder",
    image: `https://cdn.discordapp.com/attachments/829231612012527646/1054988303478312970/washing_powder.jpg`,
    food: false,
    exists: true
  },
]

export {products}