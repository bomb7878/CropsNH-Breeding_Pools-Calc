import { BreedingPool, Plant } from "./classes.js";

const Reed = new BreedingPool("Reed")
const Wheat = new BreedingPool("Wheat")
const Dense = new BreedingPool("Dense")
const Stone = new BreedingPool("Stone")
const Climbable = new BreedingPool("Climbable")

const Root = new BreedingPool("Root")
const Iron = new BreedingPool("Iron")
const Crystal = new BreedingPool("Crystal")
const Red = new BreedingPool("Red")
const Wood = new BreedingPool("Wood")

const Cow = new BreedingPool("Cow")
const Tree = new BreedingPool("Tree")
const Berry = new BreedingPool("Berry")
const Yellow = new BreedingPool("Yellow")
const TwilightForest = new BreedingPool("Twilight Forest")

const Addictive = new BreedingPool("Addictive")
const Magic = new BreedingPool("Magic")
const Saltpeter = new BreedingPool("Saltpeter")
const Bean = new BreedingPool("Bean")

const White = new BreedingPool("White")
const Green = new BreedingPool("Green")
const Lead = new BreedingPool("Lead")
const OreBerry = new BreedingPool("Ore Berry")

const Brown = new BreedingPool("Brown")
const Tendrilly = new BreedingPool("Tendrilly")
const Chicken = new BreedingPool("Chicken")
const Cotton = new BreedingPool("Cotton")

const Danger = new BreedingPool("Danger")
const Gray = new BreedingPool("Gray")
const Orange = new BreedingPool("Orange")
const Evil = new BreedingPool("Evil")

const Poison = new BreedingPool("Poison")
const Metal = new BreedingPool("Metal")
const Oil = new BreedingPool("Oil")
const Alien = new BreedingPool("Alien")
const Tin = new BreedingPool("Tin")

const Gold = new BreedingPool("Gold")
const Shiny = new BreedingPool("Shiny")
const Dark = new BreedingPool("Dark")
const Purple = new BreedingPool("Purple")
const Sticky = new BreedingPool("Sticky")

const Leafy = new BreedingPool("Leafy")
const Tulip = new BreedingPool("Tulip")
const Stem = new BreedingPool("Stem")
const Bush = new BreedingPool("Bush")

const Ingredient = new BreedingPool("Ingredient")
const Food = new BreedingPool("Food")

const Silk = new BreedingPool("Silk")
const Coal = new BreedingPool("Coal")
const Blaze = new BreedingPool("Blaze")
const Light = new BreedingPool("Light")
const Fire = new BreedingPool("Fire")
const Void = new BreedingPool("Void")

const Healing = new BreedingPool("Healing")
const Blue = new BreedingPool("Blue")
const Fish = new BreedingPool("Fish")
const Mushroom = new BreedingPool("Mushroom")
const Black = new BreedingPool("Black")

const Flower = new BreedingPool("Flower")
const Water = new BreedingPool("Water")
const Copper = new BreedingPool("Copper")
const Cactus = new BreedingPool("Cactus")
const Sulfur = new BreedingPool("Sulfur")

const Undead = new BreedingPool("Undead")
const Silver = new BreedingPool("Silver")
const Nether = new BreedingPool("Nether")

export const allPools = [
    Reed, Wheat, Dense, Stone, Climbable, Root, Iron, Crystal, Red, Wood,
    Cow, Tree, Berry, Yellow, TwilightForest, Addictive, Magic, Saltpeter, Bean,
    White, Green, Lead, OreBerry, Brown, Tendrilly, Chicken, Cotton,
    Danger, Gray, Orange, Evil, Poison, Metal, Oil, Alien, Tin,
    Gold, Shiny, Dark, Purple, Sticky, Leafy, Tulip, Stem, Bush,
    Ingredient, Food, Silk, Coal, Blaze, Light, Fire, Void,
    Healing, Blue, Fish, Mushroom, Black, Flower, Water, Copper, Cactus, Sulfur,
    Undead, Silver, Nether
];

// Base trees and bonsai
const BonsaiOak = new Plant("Oak Bonsai", [Brown, Tree, Leafy, Wood, Food]);
const BonsaiBirch = new Plant("Birch Bonsai", [White, Tree, Leafy, Wood]);
const BonsaiSpruce = new Plant("Spruce Bonsai", [Brown, Tree, Wood]);
const BonsaiDarkOak = new Plant("Dark Oak Bonsai", [Brown, Tree, Leafy, Dark, Wood, Food]);
const BonsaiAcacia = new Plant("Acacia Bonsai", [Orange, Tree, Leafy, Wood]);
const BonsaiJungle = new Plant("Jungle Bonsai", [Brown, Tree, Leafy, Wood]);
const BonsaiRubber = new Plant("Rubber Bonsai", [Brown, Tree, Wood, Sticky]);
const BonsaiSlimy = new Plant("Slimy Bonsai", []);
const Slimeplant = new Plant("Slimeplant", [Green, Tree, Evil, Leafy, Sticky, Ingredient]);
const Cocoa = new Plant("Cocoa", [Brown, Bean, Tree, Leafy, Addictive, Food]);

// Biomes O' Plenty and the Base Plants
const BambooShoot = new Plant("Bamboo Shoot", [Green, Stem, Danger, Leafy]);
const Eyebulb = new Plant("Eyebulb", [Red, Nether, Evil, Tendrilly]);
const FloweringVine = new Plant("Flowering Vine", [Green, Flower, Tendrilly, Climbable]);
const Glowflower = new Plant("Glowflower", [Blue, Nether, Light, Shiny, Ingredient]);
const GlowingCoral = new Plant("Glowing Coral", [Purple, Water, Light, Shiny, Ingredient]);
const Glowshroom = new Plant("Glowshroom", [Green, Nether, Mushroom, Light, Ingredient]);
const Ivy = new Plant("Ivy", [Green, Flower, Tendrilly, Danger, Poison, Climbable]);
const Moss = new Plant("Moss", [Green, TwilightForest, Climbable, Tendrilly]);

// Mushrooms, Herbs and Spices
const Fertilia = new Plant("Fertilia", [Brown, Mushroom, Healing]);
const Flax = new Plant("Flax", [Blue, Wheat, Addictive, Silk]);
const Hemp = new Plant("Hemp", [Green, Stem, Addictive, Silk]);
const BoPBerry = new Plant("BoP Berry", [Red, Berry, Bush, Food]);
const Turnip = new Plant("Turnip", [Purple, Root, Food]);
const WildCarrot = new Plant("Wild Carrot", [White, Root, Food]);

// Natura
const Barley = new Plant("Barley", [Green, Wheat, Food]);
const Blueberry = new Plant("Blueberry", [Blue, Berry, Bush, Food]);
const Maloberry = new Plant("Maloberry", [Yellow, Berry, Bush, Food]);
const Raspberry = new Plant("Raspberry", [Red, Berry, Bush, Food]);
const SaguaroCactus = new Plant("Saguaro Cactus", [Green, Cactus, Danger, Food]);
const Blackberry = new Plant("Blackberry", [Black, Berry, Bush, Food]);
const Blightberry = new Plant("Blightberry", [Green, Nether, Berry, Bush, Danger, Poison, Addictive, Food, Healing, Ingredient]);
const Duskberry = new Plant("Duskberry", [Gray, Nether, Berry, Bush, Danger, Poison, Addictive, Food, Ingredient]);
const Skyberry = new Plant("Skyberry", [Blue, Nether, Berry, Bush, Danger, Poison, Addictive, Food, Ingredient]);
const Stingberry = new Plant("Stingberry", [Brown, Nether, Berry, Bush, Danger, Poison, Addictive, Food, Ingredient]);
const Cottons = new Plant("Cotton", [White, Tendrilly, Cotton, Silk]);
const Thornvine = new Plant("Thornvine", [Yellow, Nether, Climbable, Danger, Light, Tendrilly]);
const BlueGlowshroom = new Plant("Blue Glowshroom", [Blue, Nether, Mushroom, Light, Food, Ingredient]);
const GreenGlowshroom = new Plant("Green Glowshroom", [Green, Nether, Mushroom, Light, Food, Ingredient]);
const PurpleGlowshroom = new Plant("Purple Glowshroom", [Purple, Nether, Mushroom, Light, Food, Ingredient]);

// Vegetables, Fruits and Cereals
const Chilly = new Plant("Chilly", [Red, Fire, Food]);
const Coffee = new Plant("Coffee", [Brown, Bean, Leafy, Addictive, Food]);
const Cucumber = new Plant("Cucumber", [Green, Tendrilly, Food]);
const Grape = new Plant("Grape", [Purple, Climbable, Leafy, Tendrilly, Food]);
const Hops = new Plant("Hops", [Green, Wheat, Food]);
const Huckleberry = new Plant("Huckleberry", [Purple, Bush, Leafy, Berry, Food]);
const Lemon = new Plant("Lemon", [Yellow, Tree, Leafy, Food]);
const Onion = new Plant("Onion", [Brown, Root, Food]);
const Strawberry = new Plant("Strawberry", [Red, Berry, Bush, Food]);
const SugarBeet = new Plant("Sugar Beet", [White, Root, Addictive, Food, Ingredient]);
const Tea = new Plant("Tea", [Green, Leafy, Food]);
const Tomato = new Plant("Tomato", [Red, Tendrilly, Leafy, Food]);

// Metals and crystals (IC2 / GT)
const Dayflower = new Plant("Dayflower", [Blue, Flower, Addictive]);
const Malaxia = new Plant("Malaxia", [Orange, Bush, Leafy, Metal, Copper]);
const Plumbshade = new Plant("Plumbshade", [Purple, Bush, Dense, Leafy, Metal, Lead]);
const Silviscus = new Plant("Silviscus", [White, Bush, Leafy, Metal, Silver]);
const Cassitine = new Plant("Cassitine", [Gray, Bush, Leafy, Metal, Shiny, Tin]);
const StickyCane = new Plant("Sticky Cane", [Green, Reed, Sticky]);
const PurpleTulip = new Plant("Purple Tulip", [Purple, Flower, Tulip]);
const Necrobloom = new Plant("Necrobloom", [Purple, Flower, Poison, Danger]);
const Argentia = new Plant("Argentia", [White, Metal, Shiny, Tendrilly, Silver]);
const Auronia = new Plant("Auronia", [Yellow, Dense, Metal, Tendrilly, Gold]);
const BobsYerUncleRanks = new Plant("Bob's Yer Uncle Ranks", [Green, Berry, Crystal, Shiny, Tendrilly]);
const Canola = new Plant("Canola", [Yellow, Wheat, Food, Oil]);
const Coppon = new Plant("Coppon", [Orange, Bush, Metal, Shiny, Cotton, Copper]);
const Diareed = new Plant("Diareed", [Blue, Reed, Crystal, Fire, Shiny, Coal]);
const EvilOre = new Plant("Evil Ore", [White, Nether, Crystal, Evil, Fire]);
const Ferrofern = new Plant("Ferrofern", [Gray, Metal, Tendrilly, Iron]);
const Galvania = new Plant("Galvania", [White, Bush, Metal]);
const Thiosulfine = new Plant("Thiosulfine", [Yellow, Flower, Danger, Sulfur]);
const Glowheat = new Plant("Glowheat", [Yellow, Nether, Wheat, Light, Shiny, Crystal, Ingredient]);
const Indigo = new Plant("Indigo", [Blue, Flower]);
const Lazulia = new Plant("Lazulia", [Blue, Crystal, Shiny, Healing]);

// Advanced metals and resources (GTNH)
const MilkWart = new Plant("Milk Wart", [White, Food, Cow, Healing]);
const Nickelback = new Plant("Nickelback", [Gray, Metal, Fire]);
const Papyrus = new Plant("Papyrus", [White, Stem]);
const Plumbilia = new Plant("Plumbilia", [Purple, Metal, Lead, Dense, Tendrilly]);
const Pyrolusium = new Plant("Pyrolusium", [Red, Metal, Bush]);
const RedStraw = new Plant("Red Straw", [Red, Stone, Wheat, Light, Ingredient]);
const Rubyne = new Plant("Rubyne", [Red, Crystal, Shiny]);
const SaltyRoot = new Plant("Salty Root", [Gray, Root, Saltpeter]);
const Sapphirum = new Plant("Sapphirum", [Blue, Crystal, Shiny]);
const Tine = new Plant("Tine", [Gray, Stem, Metal, Shiny, Wood, Tin]);

// Twilight Forest
const Liveroot = new Plant("Liveroot", [Brown, TwilightForest, Root, Tendrilly, Wood]);
const Steeleafranks = new Plant("Steeleafranks", [Green, TwilightForest, Metal, Tendrilly, Iron]);
const Torchberry = new Plant("Torchberry", [Yellow, TwilightForest, Berry, Light]);
const KnightmetalBerry = new Plant("Knightmetal Berry", [Gray, TwilightForest, OreBerry, Danger, Metal]);

// Nether and mobs
const Withereed = new Plant("Withereed", [Black, Reed, Fire, Undead, Coal, Sulfur]);
const InkBloom = new Plant("Ink Bloom", [Black, Flower, Water]);
const Blazereed = new Plant("Blazereed", [Orange, Nether, Reed, Fire, Evil, Blaze, Ingredient, Sulfur]);
const Corium = new Plant("Corium", [Brown, Mushroom, Cow]);
const Corpseplant = new Plant("Corpseplant", [Brown, Bush, Evil, Poison, Undead, Addictive, Food]);
const Creeperweed = new Plant("Creeperweed", [Green, Evil, Fire, Tendrilly, Sulfur, Saltpeter, Coal, Ingredient]);
const EggPlant = new Plant("Egg Plant", [White, Mushroom, Addictive, Chicken, Food]);
const Enderbloom = new Plant("Enderbloom", [Black, Flower, Void, Alien, Magic]);
const Goldfish = new Plant("Goldfish", [Orange, Nether, Stem, Danger, Water, Addictive, Food, Fish]);
const Meatrose = new Plant("Meatrose", [Red, Flower, Chicken, Cow, Food, Fish]);
const Spidernip = new Plant("Spidernip", [White, Evil, Poison, Addictive, Food, Ingredient, Silk]);
const Tearstalks = new Plant("Tearstalks", [White, Nether, Stem, Evil, Healing, Ingredient]);
const Zomplant = new Plant("Zomplant", [Brown, Evil, Poison, Undead, Food]);

// Tinker's Construct (Ore Berries)
const AluminiumOreBerry = new Plant("Aluminium Ore Berry", [White, OreBerry, Danger, Metal]);
const CopperOreBerry = new Plant("Copper Ore Berry", [Orange, OreBerry, Danger, Metal, Shiny, Copper]);
const EssenceOreBerry = new Plant("Essence Ore Berry", [Green, OreBerry, Danger, Undead, Food]);
const GoldOreBerry = new Plant("Gold Ore Berry", [Yellow, OreBerry, Dense, Danger, Metal, Gold]);
const IronOreBerry = new Plant("Iron Ore Berry", [Gray, OreBerry, Danger, Metal, Iron]);
const TinOreBerry = new Plant("Tin Ore Berry", [White, OreBerry, Danger, Metal, Shiny, Tin]);
const ArditeOreBerry = new Plant("Ardite Ore Berry", [Orange, OreBerry, Danger, Metal]);
const CobaltOreBerry = new Plant("Cobalt Ore Berry", [Blue, Nether, OreBerry, Danger, Metal]);

// Thaumcraft
const ThaumiumOreBerry = new Plant("Thaumium Ore Berry", [Purple, OreBerry, Danger, Magic, Metal, Void]);
const VoidOreBerry = new Plant("Void Ore Berry", [Black, OreBerry, Danger, Magic, Metal, Void]);
const ThauminiteOreBerry = new Plant("Thauminite Ore Berry", [Blue, OreBerry, Danger, Magic, Metal, Void]);
const Cinderpearl = new Plant("Cinderpearl", [Orange, Magic, Blaze]);
const ManaBean = new Plant("Mana Bean", [Brown, Bean, Magic]);
const Shimmerleaf = new Plant("Shimmerleaf", [Gray, Light, Magic, Poison, Silver]);
const MagicalNightshade = new Plant("Magical Nightshade", []);

// Lilies (Stones and Minerals)
const AndesiteLily = new Plant("Andesite Lily", [Gray, Stone]);
const DioriteLily = new Plant("Diorite Lily", [White, Stone]);
const GraniteLily = new Plant("Granite Lily", [Red, Stone]);
const TuffLily = new Plant("Tuff Lily", [Gray, Dark, Stone]);
const DeepslateLily = new Plant("Deepslate Lily", [Black, Dark, Dense, Stone]);
const BasaltLily = new Plant("Basalt Lily", [Black, Dark, Stone]);
const BlackGraniteLily = new Plant("Black Granite Lily", [Black, Dark, Stone]);
const ClayLily = new Plant("Clay Lily", [Gray, Water, Stone]);
const EndStoneLily = new Plant("End Stone Lily", [Yellow, Alien, Stone]);
const MarbleLily = new Plant("Marble Lily", [White, Stone]);
const NetherStoneLily = new Plant("Nether Stone Lily", [Red, Nether, Stone]);
const RedGraniteLily = new Plant("Red Granite Lily", [Red, Stone]);
const SandLily = new Plant("Sand Lily", [Yellow, Stone]);
const SoulSandLily = new Plant("Soul Sand Lily", [Brown, Nether, Danger, Stone, Oil]);
const StoneLily = new Plant("Stone Lily", [Gray, Stone]);

// Vanilla
const Melon = new Plant("Melon", [Green, Stem, Food, Healing, Ingredient]);
const Pumpkin = new Plant("Pumpkin", [Orange, Stem, Food]);
const RedMushroom = new Plant("Red Mushroom", [Red, Mushroom, Food]);
const BrownMushroom = new Plant("Brown Mushroom", [Brown, Mushroom, Food]);
const Wheats = new Plant("Wheat", [Yellow, Wheat, Food]);
const Carrot = new Plant("Carrot", [Orange, Root, Food, Ingredient]);
const Potato = new Plant("Potato", [Yellow, Root, Food]);
const Dandelion = new Plant("Dandelion", [Yellow, Flower]);
const Poppy = new Plant("Poppy", [Red, Flower]);
const BlueOrchid = new Plant("Blue Orchid", [Blue, Flower]);
const AzureBluet = new Plant("Azure Bluet", [White, Flower]);
const RedTulip = new Plant("Red Tulip", [Red, Flower, Tulip]);
const OrangeTulip = new Plant("Orange Tulip", [Orange, Flower, Tulip]);
const PinkTulip = new Plant("Pink Tulip", [Red, Flower, Tulip]);
const WhiteTulip = new Plant("White Tulip", [White, Flower, Tulip]);
const Allium = new Plant("Allium", [Purple, Root, Flower]);
const OxeyeDaisy = new Plant("Oxeye Daisy", [White, Flower]);
const Cactuss = new Plant("Cactus", [Green, Cactus, Danger]);
const SugarCane = new Plant("Sugar Cane", [Green, Reed, Food]);
const Netherwart = new Plant("Nether Wart", [Red, Nether, Ingredient]);
const Vine = new Plant("Vine", [Green, Climbable, Tendrilly]);
const Waterlily = new Plant("Waterlily", [Green, Water]);

// Witchery
const Belladonna = new Plant("Belladonna", [Purple, Flower, Poison, Ingredient]);
const EmberMoss = new Plant("Ember Moss", [Red, Climbable, Danger, Fire, Tendrilly, Ingredient]);
const Garlic = new Plant("Garlic", [White, Root, Food, Ingredient]);
const GlintWeed = new Plant("Glint Weed", [Orange, Flower, Magic]);
const Mandrake = new Plant("Mandrake", [Brown, Flower, Danger, Evil, Magic, Ingredient]);
const Snowbell = new Plant("Snowbell", [White, Flower, Poison, Ingredient]);
const SpanishMoss = new Plant("Spanish Moss", [Green, Climbable, Magic]);
const WaterArtichoke = new Plant("Water Artichoke", [Blue, Flower, Water, Food, Ingredient]);
const Wolfsbane = new Plant("Wolfsbane", [Purple, Flower, Poison, Ingredient]);

// Advanced plants without tags (for mutations only)
const Bauxia = new Plant("Bauxia", []);
const Garnydinia = new Plant("Garnydinia", []);
const GodOfThunder = new Plant("God Of Thunder", []);
const Iridine = new Plant("Iridine", []);
const Micadia = new Plant("Micadia", []);
const OilBerry = new Plant("Oil Berry", []);
const Olivia = new Plant("Olivia", []);
const Osmianth = new Plant("Osmianth", []);
const Platina = new Plant("Platina", []);
const Reactoria = new Plant("Reactoria", []);
const Scheelinium = new Plant("Scheelinium", []);
const SpaceFlower = new Plant("Space Flower", []);
const Stargatium = new Plant("Stargatium", []);
const StarWart = new Plant("Star Wart", []);
const Titania = new Plant("Titania", []);
const Transformium = new Plant("Transformium", []);
const Trollplant = new Plant("Trollplant", []);

export const allPlants = [
    BonsaiOak, BonsaiBirch, BonsaiSpruce, BonsaiDarkOak, BonsaiAcacia, 
    BonsaiJungle, BonsaiRubber, BonsaiSlimy, Slimeplant, Cocoa,
    BambooShoot, Eyebulb, FloweringVine, Glowflower, GlowingCoral,
    Glowshroom, Ivy, Moss,
    Fertilia, Flax, Hemp, BoPBerry, Turnip, WildCarrot,
    Barley, Blueberry, Maloberry, Raspberry, SaguaroCactus, Blackberry,
    Blightberry, Duskberry, Skyberry, Stingberry, Cottons, Thornvine,
    BlueGlowshroom, GreenGlowshroom, PurpleGlowshroom,
    Chilly, Coffee, Cucumber, Grape, Hops, Huckleberry, Lemon,
    Onion, Strawberry, SugarBeet, Tea, Tomato,
    Dayflower, Malaxia, Plumbshade, Silviscus, Cassitine, StickyCane,
    PurpleTulip, Necrobloom, Argentia, Auronia, BobsYerUncleRanks,
    Canola, Coppon, Diareed, EvilOre, Ferrofern, Galvania,
    Thiosulfine, Glowheat, Indigo, Lazulia,
    MilkWart, Nickelback, Papyrus, Plumbilia, Pyrolusium,
    RedStraw, Rubyne, SaltyRoot, Sapphirum, Tine,
    Liveroot, Steeleafranks, Torchberry, KnightmetalBerry,
    Withereed, InkBloom, Blazereed, Corium, Corpseplant,
    Creeperweed, EggPlant, Enderbloom, Goldfish, Meatrose,
    Spidernip, Tearstalks, Zomplant,
    AluminiumOreBerry, CopperOreBerry, EssenceOreBerry, GoldOreBerry,
    IronOreBerry, TinOreBerry, ArditeOreBerry, CobaltOreBerry,
    ThaumiumOreBerry, VoidOreBerry, ThauminiteOreBerry, Cinderpearl,
    ManaBean, Shimmerleaf, MagicalNightshade,
    AndesiteLily, DioriteLily, GraniteLily, TuffLily, DeepslateLily,
    BasaltLily, BlackGraniteLily, ClayLily, EndStoneLily, MarbleLily,
    NetherStoneLily, RedGraniteLily, SandLily, SoulSandLily, StoneLily,
    Melon, Pumpkin, RedMushroom, BrownMushroom, Wheats,
    Carrot, Potato, Dandelion, Poppy, BlueOrchid, AzureBluet,
    RedTulip, OrangeTulip, PinkTulip, WhiteTulip, Allium,
    OxeyeDaisy, Cactuss, SugarCane, Netherwart, Vine, Waterlily,
    Belladonna, EmberMoss, Garlic, GlintWeed, Mandrake,
    Snowbell, SpanishMoss, WaterArtichoke, Wolfsbane,
    Bauxia, Garnydinia, GodOfThunder, Iridine, Micadia, OilBerry,
    Olivia, Osmianth, Platina, Reactoria, Scheelinium, SpaceFlower,
    Stargatium, StarWart, Titania, Transformium, Trollplant
];