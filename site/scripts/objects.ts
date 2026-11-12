import { BreedingPool, Plant } from "./classes.js";

const Reed = new BreedingPool("Reed", "Тростниковый")
const Wheat = new BreedingPool("Wheat", "Пшеничный")
const Dense = new BreedingPool("Dense", "Густой")
const Stone = new BreedingPool("Stone", "Каменный")
const Climbable = new BreedingPool("Climbable", "Вьющийся")

const Root = new BreedingPool("Root", "Корневой")
const Iron = new BreedingPool("Iron", "Железный")
const Crystal = new BreedingPool("Crystal", "Кристаллический")
const Red = new BreedingPool("Red", "Красный")
const Wood = new BreedingPool("Wood", "Деревянный")

const Cow = new BreedingPool("Cow", "Коровий")
const Tree = new BreedingPool("Tree", "Древесный")
const Berry = new BreedingPool("Berry", "Ягодный")
const Yellow = new BreedingPool("Yellow", "Жёлтый")
const TwilightForest = new BreedingPool("Twilight Forest", "Twilight Forest")

const Addictive = new BreedingPool("Addictive", "Вызывающий Зависимость")
const Magic = new BreedingPool("Magic", "Магический")
const Saltpeter = new BreedingPool("Saltpeter", "Селитровый")
const Bean = new BreedingPool("Bean", "Бобовый")

const White = new BreedingPool("White", "Белый")
const Green = new BreedingPool("Green", "Зелёный")
const Lead = new BreedingPool("Lead", "Свинцовый")
const OreBerry = new BreedingPool("Ore Berry", "Рудоягодный")

const Brown = new BreedingPool("Brown", "Коричневый")
const Tendrilly = new BreedingPool("Tendrilly", "Усиковый")
const Chicken = new BreedingPool("Chicken", "Куриный")
const Cotton = new BreedingPool("Cotton", "Хлопковый")

const Danger = new BreedingPool("Danger", "Опасный")
const Gray = new BreedingPool("Gray", "Серый")
const Orange = new BreedingPool("Orange", "Оранжевый")
const Evil = new BreedingPool("Evil", "Зловещий")

const Poison = new BreedingPool("Poison", "ЯДовитый")
const Metal = new BreedingPool("Metal", "Металлический")
const Oil = new BreedingPool("Oil", "Нефтяной")
const Alien = new BreedingPool("Alien", "Инопланетный")
const Tin = new BreedingPool("Tin", "Оловянный")

const Gold = new BreedingPool("Gold", "Золотой")
const Shiny = new BreedingPool("Shiny", "Блестящий")
const Dark = new BreedingPool("Dark", "Тёмный")
const Purple = new BreedingPool("Purple", "Фиолетовый")
const Sticky = new BreedingPool("Sticky", "Липкий")

const Leafy = new BreedingPool("Leafy", "Лиственный")
const Tulip = new BreedingPool("Tulip", "Тюльпановый")
const Stem = new BreedingPool("Stem", "Стеблевой")
const Bush = new BreedingPool("Bush", "Кустиковый")

const Ingredient = new BreedingPool("Ingredient", "Ингредиентный")
const Food = new BreedingPool("Food", "Пищевой")

const Silk = new BreedingPool("Silk", "Шёлковый")
const Coal = new BreedingPool("Coal", "Угольный")
const Blaze = new BreedingPool("Blaze", "Ифритовый")
const Light = new BreedingPool("Light", "Светлый")
const Fire = new BreedingPool("Fire", "Огненный")
const Void = new BreedingPool("Void", "Пустотный")

const Healing = new BreedingPool("Healing", "Целебный")
const Blue = new BreedingPool("Blue", "Синий")
const Fish = new BreedingPool("Fish", "Рыбный")
const Mushroom = new BreedingPool("Mushroom", "Грибной")
const Black = new BreedingPool("Black", "Чёрный")

const Flower = new BreedingPool("Flower", "Цветочный")
const Water = new BreedingPool("Water", "Водный")
const Copper = new BreedingPool("Copper", "Медный")
const Cactus = new BreedingPool("Cactus", "Кактусовый")
const Sulfur = new BreedingPool("Sulfur", "Серный")

const Undead = new BreedingPool("Undead", "Нежити")
const Silver = new BreedingPool("Silver", "Серебрянный")
const Nether = new BreedingPool("Nether", "Адский")

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
const BonsaiOak = new Plant("Oak Bonsai", "Дубовый бонсай", [Brown, Tree, Leafy, Wood, Food]);
const BonsaiBirch = new Plant("Birch Bonsai", "Берёзовый бонсай", [White, Tree, Leafy, Wood]);
const BonsaiSpruce = new Plant("Spruce Bonsai", "Еловый бонсай", [Brown, Tree, Wood]);
const BonsaiDarkOak = new Plant("Dark Oak Bonsai", "Бонсай тёмного дуба", [Brown, Tree, Leafy, Dark, Wood, Food]);
const BonsaiAcacia = new Plant("Acacia Bonsai", "Акациевый бонсай", [Orange, Tree, Leafy, Wood]);
const BonsaiJungle = new Plant("Jungle Bonsai", "Бонсай из тропического дерева", [Brown, Tree, Leafy, Wood]);
const BonsaiRubber = new Plant("Rubber Bonsai", "Резиновый бонсай", [Brown, Tree, Wood, Sticky]);
const BonsaiSlimy = new Plant("Slimy Bonsai", "Слизневый бонсай", []);
const Slimeplant = new Plant("Slimeplant", "Слизневое растение", [Green, Tree, Evil, Leafy, Sticky, Ingredient]);
const Cocoa = new Plant("Cocoa", "Какао", [Brown, Bean, Tree, Leafy, Addictive, Food]);

// Biomes O' Plenty and the Base Plants
const BambooShoot = new Plant("Bamboo Shoot", "Бамбуковый побег", [Green, Stem, Danger, Leafy]);
const Eyebulb = new Plant("Eyebulb", "Глазное яблоко", [Red, Nether, Evil, Tendrilly]);
const FloweringVine = new Plant("Flowering Vine", "Цветущая лиана", [Green, Flower, Tendrilly, Climbable]);
const Glowflower = new Plant("Glowflower", "Светоцвет", [Blue, Nether, Light, Shiny, Ingredient]);
const GlowingCoral = new Plant("Glowing Coral", "Светящийся коралл", [Purple, Water, Light, Shiny, Ingredient]);
const Glowshroom = new Plant("Glowshroom", "Светогриб", [Green, Nether, Mushroom, Light, Ingredient]);
const Ivy = new Plant("Ivy", "Плющ", [Green, Flower, Tendrilly, Danger, Poison, Climbable]);
const Moss = new Plant("Moss", "Мох", [Green, TwilightForest, Climbable, Tendrilly]);

// Mushrooms, Herbs and Spices
const Fertilia = new Plant("Fertilia", "Фертилия", [Brown, Mushroom, Healing]);
const Flax = new Plant("Flax", "Лён", [Blue, Wheat, Addictive, Silk]);
const Hemp = new Plant("Hemp", "Конопля", [Green, Stem, Addictive, Silk]);
const BoPBerry = new Plant("BoP Berry", "Ягода", [Red, Berry, Bush, Food]);
const Turnip = new Plant("Turnip", "Репа", [Purple, Root, Food]);
const WildCarrot = new Plant("Wild Carrot", "Дикая морковь", [White, Root, Food]);

// Natura
const Barley = new Plant("Barley", "Ячмень", [Green, Wheat, Food]);
const Blueberry = new Plant("Blueberry", "Голубика", [Blue, Berry, Bush, Food]);
const Maloberry = new Plant("Maloberry", "Смородина", [Yellow, Berry, Bush, Food]);
const Raspberry = new Plant("Raspberry", "Малина", [Red, Berry, Bush, Food]);
const SaguaroCactus = new Plant("Saguaro Cactus", "Кактус сагуаро", [Green, Cactus, Danger, Food]);
const Blackberry = new Plant("Blackberry", "Ежевика", [Black, Berry, Bush, Food]);
const Blightberry = new Plant("Blightberry", "Губительная ягода", [Green, Nether, Berry, Bush, Danger, Poison, Addictive, Food, Healing, Ingredient]);
const Duskberry = new Plant("Duskberry", "Сумеречная ягода", [Gray, Nether, Berry, Bush, Danger, Poison, Addictive, Food, Ingredient]);
const Skyberry = new Plant("Skyberry", "Небесная ягода", [Blue, Nether, Berry, Bush, Danger, Poison, Addictive, Food, Ingredient]);
const Stingberry = new Plant("Stingberry", "Ядовитая ягода", [Brown, Nether, Berry, Bush, Danger, Poison, Addictive, Food, Ingredient]);
const Cottons = new Plant("Cotton", "Хлопок", [White, Tendrilly, Cotton, Silk]);
const Thornvine = new Plant("Thornvine", "Терновник", [Yellow, Nether, Climbable, Danger, Light, Tendrilly]);
const BlueGlowshroom = new Plant("Blue Glowshroom", "Синий светогриб", [Blue, Nether, Mushroom, Light, Food, Ingredient]);
const GreenGlowshroom = new Plant("Green Glowshroom", "Зелёный светогриб", [Green, Nether, Mushroom, Light, Food, Ingredient]);
const PurpleGlowshroom = new Plant("Purple Glowshroom", "Фиолетовый светогриб", [Purple, Nether, Mushroom, Light, Food, Ingredient]);

// Vegetables, Fruits and Cereals
const Chilly = new Plant("Chilly", "Чили", [Red, Fire, Food]);
const Coffee = new Plant("Coffee", "Кофе", [Brown, Bean, Leafy, Addictive, Food]);
const Cucumber = new Plant("Cucumber", "Огурец", [Green, Tendrilly, Food]);
const Grape = new Plant("Grape", "Виноград", [Purple, Climbable, Leafy, Tendrilly, Food]);
const Hops = new Plant("Hops", "Хмель", [Green, Wheat, Food]);
const Huckleberry = new Plant("Huckleberry", "Черника", [Purple, Bush, Leafy, Berry, Food]);
const Lemon = new Plant("Lemon", "Лимон", [Yellow, Tree, Leafy, Food]);
const Onion = new Plant("Onion", "Лук", [Brown, Root, Food]);
const Strawberry = new Plant("Strawberry", "Клубника", [Red, Berry, Bush, Food]);
const SugarBeet = new Plant("Sugar Beet", "Сахарная свёкла", [White, Root, Addictive, Food, Ingredient]);
const Tea = new Plant("Tea", "Чай", [Green, Leafy, Food]);
const Tomato = new Plant("Tomato", "Томат", [Red, Tendrilly, Leafy, Food]);

// Metals and crystals (IC2 / GT)
const Dayflower = new Plant("Dayflower", "Коммелина", [Blue, Flower, Addictive]);
const Malaxia = new Plant("Malaxia", "Малаксия", [Orange, Bush, Leafy, Metal, Copper]);
const Plumbshade = new Plant("Plumbshade", "Свинцовый паслён", [Purple, Bush, Dense, Leafy, Metal, Lead]);
const Silviscus = new Plant("Silviscus", "Серебрискус", [White, Bush, Leafy, Metal, Silver]);
const Cassitine = new Plant("Cassitine", "Касситин", [Gray, Bush, Leafy, Metal, Shiny, Tin]);
const StickyCane = new Plant("Sticky Cane", "Резиновый тростник", [Green, Reed, Sticky]);
const PurpleTulip = new Plant("Purple Tulip", "Фиолетовый тюльпан", [Purple, Flower, Tulip]);
const Necrobloom = new Plant("Necrobloom", "Мертвоцвет", [Purple, Flower, Poison, Danger]);
const Argentia = new Plant("Argentia", "Аргентия", [White, Metal, Shiny, Tendrilly, Silver]);
const Auronia = new Plant("Auronia", "Аурония", [Yellow, Dense, Metal, Tendrilly, Gold]);
const BobsYerUncleRanks = new Plant("Bobs-Yer-Uncle-Ranks", "Бобы дядюшки Боба", [Green, Berry, Crystal, Shiny, Tendrilly]);
const Canola = new Plant("Canola", "Рапс", [Yellow, Wheat, Food, Oil]);
const Coppon = new Plant("Coppon", "Медный хлопок", [Orange, Bush, Metal, Shiny, Cotton, Copper]);
const Diareed = new Plant("Diareed", "Алмазный тростник", [Blue, Reed, Crystal, Fire, Shiny, Coal]);
const EvilOre = new Plant("Evil Ore", "Адская руда", [White, Nether, Crystal, Evil, Fire]);
const Ferrofern = new Plant("Ferrofern", "Ферроферния", [Gray, Metal, Tendrilly, Iron]);
const Galvania = new Plant("Galvania", "Гальвания", [White, Bush, Metal]);
const Thiosulfine = new Plant("Thiosulfine", "Тиосульфин", [Yellow, Flower, Danger, Sulfur]);
const Glowheat = new Plant("Glowheat", "Светящаяся пшеница", [Yellow, Nether, Wheat, Light, Shiny, Crystal, Ingredient]);
const Indigo = new Plant("Indigo", "Индиго", [Blue, Flower]);
const Lazulia = new Plant("Lazulia", "Лазулия", [Blue, Crystal, Shiny, Healing]);

// Advanced metals and resources (GTNH)
const MilkWart = new Plant("Milk Wart", "Молочный нарост", [White, Food, Cow, Healing]);
const Nickelback = new Plant("Nickelback", "Пятицентовик", [Gray, Metal, Fire]);
const Papyrus = new Plant("Papyrus", "Папирус", [White, Stem]);
const Plumbilia = new Plant("Plumbilia", "Плюмбилия", [Purple, Metal, Lead, Dense, Tendrilly]);
const Pyrolusium = new Plant("Pyrolusium", "Пиролизия", [Red, Metal, Bush]);
const Redstraw = new Plant("Redstraw", "Красная пшеница", [Red, Stone, Wheat, Light, Ingredient]);
const Rubyne = new Plant("Rubyne", "Рубин", [Red, Crystal, Shiny]);
const SaltyRoot = new Plant("Salty Root", "Солевой корень", [Gray, Root, Saltpeter]);
const Sapphirum = new Plant("Sapphirum", "Сапфирум", [Blue, Crystal, Shiny]);
const Tine = new Plant("Tine", "Олона", [Gray, Stem, Metal, Shiny, Wood, Tin]);

// Twilight Forest
const Liveroot = new Plant("Liveroot", "Живой корень", [Brown, TwilightForest, Root, Tendrilly, Wood]);
const Steeleafranks = new Plant("Steeleafranks", "Сталелистник", [Green, TwilightForest, Metal, Tendrilly, Iron]);
const Torchberry = new Plant("Torchberry", "Факелонит", [Yellow, TwilightForest, Berry, Light]);
const KnightmetalBerry = new Plant("Knightmetal Berry", "Рыцарская рудоягода", [Gray, TwilightForest, OreBerry, Danger, Metal]);

// Nether and mobs
const Withereed = new Plant("Withereed", "Угольный тростник", [Black, Reed, Fire, Undead, Coal, Sulfur]);
const Inkbloom = new Plant("Inkbloom", "Чернильник", [Black, Flower, Water]);
const Blazereed = new Plant("Blazereed", "Огненный тростник", [Orange, Nether, Reed, Fire, Evil, Blaze, Ingredient, Sulfur]);
const Corium = new Plant("Corium", "Кориум", [Brown, Mushroom, Cow]);
const Corpseplant = new Plant("Corpseplant", "Трупный цветок", [Brown, Bush, Evil, Poison, Undead, Addictive, Food]);
const Creeperweed = new Plant("Creeperweed", "Сорняк крипера", [Green, Evil, Fire, Tendrilly, Sulfur, Saltpeter, Coal, Ingredient]);
const EggPlant = new Plant("Egg Plant", "Яичное растение", [White, Mushroom, Addictive, Chicken, Food]);
const Enderbloom = new Plant("Enderbloom", "Цветок Края", [Black, Flower, Void, Alien, Magic]);
const Goldfish = new Plant("Goldfish", "Золотая рыбка", [Orange, Nether, Stem, Danger, Water, Addictive, Food, Fish]);
const Meatrose = new Plant("Meatrose", "Мясороза", [Red, Flower, Chicken, Cow, Food, Fish]);
const Spidernip = new Plant("Spidernip", "Паучья мята", [White, Evil, Poison, Addictive, Food, Ingredient, Silk]);
const Tearstalks = new Plant("Tearstalks", "Слезливые стебли", [White, Nether, Stem, Evil, Healing, Ingredient]);
const Zomplant = new Plant("Zomplant", "Зомби цветок", [Brown, Evil, Poison, Undead, Food]);

// Tinker's Construct (Ore Berries)
const AluminiumOreBerry = new Plant("Aluminium Ore Berry", "Алюминиевая рудоягода", [White, OreBerry, Danger, Metal]);
const CopperOreBerry = new Plant("Copper Ore Berry", "Медная рудоягода", [Orange, OreBerry, Danger, Metal, Shiny, Copper]);
const EssenceOreBerry = new Plant("Essence Ore Berry", "Эссенциальная рудоягода", [Green, OreBerry, Danger, Undead, Food]);
const GoldOreBerry = new Plant("Gold Ore Berry", "Золотая рудоягода", [Yellow, OreBerry, Dense, Danger, Metal, Gold]);
const IronOreBerry = new Plant("Iron Ore Berry", "Железная рудоягода", [Gray, OreBerry, Danger, Metal, Iron]);
const TinOreBerry = new Plant("Tin Ore Berry", "Оловянная рудоягода", [White, OreBerry, Danger, Metal, Shiny, Tin]);
const ArditeOreBerry = new Plant("Ardite Ore Berry", "Ардитовая рудоягода", [Orange, OreBerry, Danger, Metal]);
const CobaltOreBerry = new Plant("Cobalt Ore Berry", "Кобальтовая рудоягода", [Blue, Nether, OreBerry, Danger, Metal]);

// Thaumcraft
const ThaumiumOreBerry = new Plant("Thaumium Ore Berry", "Таумическая рудоягода", [Purple, OreBerry, Danger, Magic, Metal, Void]);
const VoidOreBerry = new Plant("Void Ore Berry", "Пустотные рудоягоды", [Black, OreBerry, Danger, Magic, Metal, Void]);
const ThauminiteOreBerry = new Plant("Thauminite Ore Berry", "Тауминитовая рудоягода", [Blue, OreBerry, Danger, Magic, Metal, Void]);
const Cinderpearl = new Plant("Cinderpearl", "Огненный жемчуг", [Orange, Magic, Blaze]);
const ManaBean = new Plant("Mana Bean", "Магический боб", [Brown, Bean, Magic]);
const Shimmerleaf = new Plant("Shimmerleaf", "Серебролист", [Gray, Light, Magic, Poison, Silver]);
const MagicalNightshade = new Plant("Magical Nightshade", "Магический паслён", []);

// Lilies (Stones and Minerals)
const AndesiteLily = new Plant("Andesite Lily", "Андезитовая лилия", [Gray, Stone]);
const DioriteLily = new Plant("Diorite Lily", "Диоритовая лилия", [White, Stone]);
const GraniteLily = new Plant("Granite Lily", "Гранитовая лилия", [Red, Stone]);
const TuffLily = new Plant("Tuff Lily", "Туфовая лилия", [Gray, Dark, Stone]);
const DeepslateLily = new Plant("Deepslate Lily", "Лилия Глубинного сланца", [Black, Dark, Dense, Stone]);
const BasaltLily = new Plant("Basalt Lily", "Базальтовая лилия", [Black, Dark, Stone]);
const BlackGraniteLily = new Plant("Black Granite Lily", "Чёрногранитная лилия", [Black, Dark, Stone]);
const ClayLily = new Plant("Clay Lily", "Глиняная лилия", [Gray, Water, Stone]);
const EndStoneLily = new Plant("End Stone Lily", "Эндерняковая лилия", [Yellow, Alien, Stone]);
const MarbleLily = new Plant("Marble Lily", "Мраморная лилия", [White, Stone]);
const NetherStoneLily = new Plant("Nether Stone Lily", "Лилия Адского камня", [Red, Nether, Stone]);
const RedGraniteLily = new Plant("Red Granite Lily", "Красногранитная лилия", [Red, Stone]);
const SandLily = new Plant("Sand Lily", "Песочная лилия", [Yellow, Stone]);
const SoulSandLily = new Plant("Soul Sand Lily", "Лилия песка душ", [Brown, Nether, Danger, Stone, Oil]);
const StoneLily = new Plant("Stone Lily", "Каменная лилия", [Gray, Stone]);

// Vanilla
const Melon = new Plant("Melon", "Арбуз", [Green, Stem, Food, Healing, Ingredient]);
const Pumpkin = new Plant("Pumpkin", "Тыква", [Orange, Stem, Food]);
const RedMushroom = new Plant("Red Mushroom", "Мухомор", [Red, Mushroom, Food]);
const BrownMushroom = new Plant("Brown Mushroom", "Коричневый гриб", [Brown, Mushroom, Food]);
const Wheats = new Plant("Wheat", "Пшеница", [Yellow, Wheat, Food]);
const Carrot = new Plant("Carrot", "Морковь", [Orange, Root, Food, Ingredient]);
const Potato = new Plant("Potato", "Картофель", [Yellow, Root, Food]);
const Dandelion = new Plant("Dandelion", "Одуванчик", [Yellow, Flower]);
const Poppy = new Plant("Poppy", "Мак", [Red, Flower]);
const BlueOrchid = new Plant("Blue Orchid", "Синяя орхидея", [Blue, Flower]);
const AzureBluet = new Plant("Azure Bluet", "Голубой василёк", [White, Flower]);
const RedTulip = new Plant("Red Tulip", "Красный тюльпан", [Red, Flower, Tulip]);
const OrangeTulip = new Plant("Orange Tulip", "Оранжевый тюльпан", [Orange, Flower, Tulip]);
const PinkTulip = new Plant("Pink Tulip", "Розовый тюльпан", [Red, Flower, Tulip]);
const WhiteTulip = new Plant("White Tulip", "Белый тюльпан", [White, Flower, Tulip]);
const Allium = new Plant("Allium", "Лук-батун", [Purple, Root, Flower]);
const OxeyeDaisy = new Plant("Oxeye Daisy", "Ромашка", [White, Flower]);
const Cactuss = new Plant("Cactus", "Кактус", [Green, Cactus, Danger]);
const SugarCane = new Plant("Sugar Cane", "Сахарный тростник", [Green, Reed, Food]);
const Netherwart = new Plant("Nether Wart", "Адский нарост", [Red, Nether, Ingredient]);
const Vine = new Plant("Vine", "Лиана", [Green, Climbable, Tendrilly]);
const Waterlily = new Plant("Waterlily", "Кувшинка", [Green, Water]);

// Witchery
const Belladonna = new Plant("Belladonna", "Белладонна", [Purple, Flower, Poison, Ingredient]);
const EmberMoss = new Plant("Ember Moss", "Янтарный мох", [Red, Climbable, Danger, Fire, Tendrilly, Ingredient]);
const Garlic = new Plant("Garlic", "Чеснок", [White, Root, Food, Ingredient]);
const GlintWeed = new Plant("Glint Weed", "Сверкающий сорняк", [Orange, Flower, Magic]);
const Mandrake = new Plant("Mandrake", "Мандрагора", [Brown, Flower, Danger, Evil, Magic, Ingredient]);
const Snowbell = new Plant("Snowbell", "Подснежник", [White, Flower, Poison, Ingredient]);
const SpanishMoss = new Plant("Spanish Moss", "Лишайник", [Green, Climbable, Magic]);
const WaterArtichoke = new Plant("Water Artichoke", "Водный артишок", [Blue, Flower, Water, Food, Ingredient]);
const Wolfsbane = new Plant("Wolfsbane", "Волчий аконит", [Purple, Flower, Poison, Ingredient]);

// Advanced plants without tags (for mutations only)
const Bauxia = new Plant("Bauxia", "Бауксия", []);
const Garnydinia = new Plant("Garnydinia", "Гарнидиния", []);
const GodOfThunder = new Plant("God Of Thunder", "Бог грома", []);
const Iridine = new Plant("Iridine", "Иридин", []);
const Micadia = new Plant("Micadia", "Микадия", []);
const OilBerry = new Plant("Oil Berry", "Нефтяная ягода", []);
const Olivia = new Plant("Olivia", "Оливия", []);
const Osmianth = new Plant("Osmianth", "Осмиант", []);
const Platina = new Plant("Platina", "Платиния", []);
const Reactoria = new Plant("Reactoria", "Реактория", []);
const Scheelinium = new Plant("Scheelinium", "Шилиний", []);
const SpaceFlower = new Plant("Space Flower", "Космический цветок", []);
const Stargatium = new Plant("Stargatium", "Старгейтий", []);
const StarWart = new Plant("Star Wart", "Звёздный нарост", []);
const Titania = new Plant("Titania", "Титания", []);
const Transformium = new Plant("Transformium", "Трансформий", []);
const Trollplant = new Plant("Trollplant", "Тролльник", []);

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
    Redstraw, Rubyne, SaltyRoot, Sapphirum, Tine,
    Liveroot, Steeleafranks, Torchberry, KnightmetalBerry,
    Withereed, Inkbloom, Blazereed, Corium, Corpseplant,
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