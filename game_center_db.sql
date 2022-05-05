-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 05, 2022 at 09:39 PM
-- Server version: 8.0.27
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `game_center_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cds`
--

CREATE TABLE `cds` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `youtube` varchar(255) NOT NULL,
  `genre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `release_date` varchar(255) NOT NULL,
  `info` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cds`
--

INSERT INTO `cds` (`id`, `name`, `type`, `price`, `image`, `youtube`, `genre`, `release_date`, `info`) VALUES
(1, 'BatMan Arkham Origins', 'PS3', '60$', 'batman', 'https://www.youtube.com/embed/9pnK8akbd2M', 'Action', '11/27/2018', 'Experience two of the most critically acclaimed titles of the last generation - Batman: Arkham Asylum and Batman: Arkham City, with fully remastered and updated visuals. Complete your experience with the explosive finale to the Arkham series in Batman: Arkham Knight. Become the Batman and utilize a wide range of gadgets and abilities to face off against Gotham\'s most dangerous villains, finally facing the ultimate threat against the city that Batman is sworn to protect.'),
(2, 'Call of Cudy Black ops', 'PS3', '60$', 'blackops', 'https://www.youtube.com/embed/OPTOVQFRggI', 'Action, Shooter, Shooter', '8/29/2017', 'The Zombies Chronicles content expansion delivers 8 remastered classic Zombies maps from Call of Duty®: World at War, Call of Duty®: Black Ops and Call of Duty®: Black Ops II. Complete maps from the original saga are fully remastered and HD playable, within Call of Duty®: Black Ops III.'),
(4, 'Sniper', 'PS3', '60$', 'sniper', 'https://www.youtube.com/embed/7pSSnSrjQTI', 'Shooter', '4/28/2020', 'The Sniper Ghost Warrior series has gained recognition among players for its uncompromising approach to being a sniper. Sniper Ghost Warrior Contracts & SGW3 Unlimited Edition is an equally uncompromising offer for those who want to take what’s best from the last two parts of the series!'),
(5, 'Riptide', 'PS3', '60$', 'riptide', 'https://www.youtube.com/embed/mEmXLn7mSM8', 'Action, Horror, Action', '5/30/2016', 'The Dead Island Experience Smash heads, crack skulls, and slice ‘em up with visceral astounding melee combat and true story-based 4 player co-op in a sprawling open world just waiting for exploration'),
(6, 'Watch Dogs', 'PS3', '60$', 'watchdogs', 'https://www.youtube.com/embed/PFko4Kut39s', 'Adventure, Action, Adventure', '11/15/2016', 'Play as Marcus Holloway, a brilliant young hacker living in the birthplace of the tech revolution, the San Francisco Bay Area.  Team up with Dedsec, a notorious group of hackers, and expose the hidden dangers of ctOS 2.0, which, in the hands of corrupt corporations, is being wrongfully used to monitor and manipulate citizens on a massive scale.'),
(7, 'Red Dead Redumtion', 'PS3', '60$', 'rrr', 'https://www.youtube.com/embed/-o7rES_3ymA', 'Action, Adventure, Unique', '10/26/2018', 'America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.'),
(8, 'Ghost', 'PS4', '60$', 'ghost', 'https://www.youtube.com/embed/mniWW2haNnY', ' Role Playing Games', '8/20/2021', 'Discover the expanded Ghost of Tsushima experience in this Director’s Cut, featuring all additional content released to date.  - Uncover the hidden wonders of Tsushima in this open-world action adventure. - Forge a new path and wage an unconventional war for the freedom of Tsushima. - Challenge opponents with your katana, master the bow to eliminate distant threats and develop stealth tactics to ambush enemies. - Explore a new story on Iki Island.'),
(9, 'Hitman', 'PS4', '60$', 'hitman', 'https://www.youtube.com/embed/LVqxMCZ3u6k', 'Action, Action', '11/9/2018', 'Travel the globe and track your targets across exotic sandbox locations in HITMAN™ 2. From sun-drenched streets to dark and dangerous rainforests, nowhere is safe from the world\'s most creative assassin, Agent 47.   Prepare to experience the ultimate spy thriller story your mission is to eliminate the elusive Shadow Client and unravel his militia, but when 47 learns his target\'s true identity and the truth about his past, it changes everything.'),
(10, 'Last Of Us', 'PS4', '60$', 'lastofus', 'https://www.youtube.com/embed/AaOWRvmtEFQ', 'Action, Adventure', '6/19/2020', 'Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors. When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure.'),
(11, 'Call Of Cudy Modern Warfare', 'PS4', '60$', 'modernwarfare', 'https://www.youtube.com/embed/mtjkqrvUg_4', 'Shooter', '10/8/2016', ' One of the most critically-acclaimed games in history, Call of Duty®: Modern Warfare is back, remastered in true high-definition. Call of Duty® 4: Modern Warfare® set a new standard upon its original release for intense, cinematic action, while receiving universal praise as one of the most influential video games of all-time.'),
(12, 'Mortal Combat', 'PS4', '60$', 'mortalcombat', 'https://www.youtube.com/embed/mWytXS73aFI', 'Fighting, Fighting', '4/14/2015', ' Who’s Next? Experience the Next Generation of the 1 Fighting Franchise.   Mortal Kombat X combines unparalleled, cinematic presentation with all new gameplay. For the first time, players can choose from multiple variations of each character impacting both strategy and fighting style.'),
(13, 'Resident Evil', 'PS4', '60$', 'residentevil', 'https://www.youtube.com/embed/u3wS-Q2KBpk', 'Action, Horror', '1/25/2019', ' A deadly virus engulfs the residents of Raccoon City in September of 1998, plunging the city into chaos as flesh eating zombies roam the streets for survivors.'),
(14, 'Clank', 'PS5', '60$', 'clank', 'https://www.youtube.com/embed/55PRv_e00wc', 'Action, Adventure, Shooter', '4/12/2016', 'Ratchet & Clank blasts onto PlayStation®4 for the first time, with a new game based on elements from the original Ratchet & Clank (PS2™). Ratchet & Clank (PS4™) takes a deeper look at the characters’ origin stories and modernizes the original gameplay. Featuring several new planets, all-new bosses, new Clank gameplay, new flight sequences, and much more – with completely new visuals constructed to use the power of the PS4.'),
(15, 'Cold War', 'PS5', '60$', 'coldwar', 'https://www.youtube.com/embed/mniWW2haNnY', 'Shooter', '11/13/2020', 'Black Ops Cold War, the direct sequel to Call of Duty®: Black Ops, will drop fans into the depths of the Cold War’s volatile geopolitical battle of the early 1980s. Nothing is ever as it seems in a gripping single-player Campaign, where players will come face-to-face with historical figures and hard truths, as they battle around the globe through iconic locales like East Berlin, Vietnam, Turkey, Soviet KGB headquarters and more.'),
(16, 'Demon', 'PS5', '60$', 'demon', 'https://www.youtube.com/embed/JiqGi3GMTko', 'Shooter,Action', '6/29/2021', 'EXPERIENCE THE END OF THE SLAYER’S SAGA Experience the epic conclusion to the DOOM Slayer’s saga. From the moment you were activated by Samuel Hayden at the UAC facility on Mars to the destruction of the Icon of Sin, all your battles have led to this. Prepare to siege Immora, the last bastion of the dark realm, challenge the Dark Lord in combat, and seal the demons within Hell for good.'),
(17, 'God of Fall', 'PS5', '60$', 'godofall', 'https://www.youtube.com/embed/P9p_t408_vA', 'Action', '2/13/2021', ' You Are The Last Hope For Humanity The gods’ torturous rule over humanity has lasted for millennia. Bent on cruelty and suffering, they demand to be served with blind worship through an oath of fealty pledged from every man, woman and child. To those who don\'t submit to the gods’ will; a slow and merciless death awaits.'),
(18, 'Pathless', 'PS5', '60$', 'pathless', 'https://www.youtube.com/embed/4m73BSovpEc', 'Action, Adventure', '11/12/2020', 'Become the Hunter, a master of archery who travels to a mystical island to dispel a curse of darkness that grips the world. Forge a connection with your eagle companion and soar through the air. Perform fluid acrobatics and execute awesome trick shots with a unique archery system that allows effortless shooting while moving at high speeds.'),
(19, 'Assasin Creed', 'PS5', '60$', 'creed', 'https://www.youtube.com/embed/6TXx0guC5zE', ' Action, Adventure', '10/27/2017', 'Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power. Unveil dark secrets and forgotten myths as you go back to the one founding moment: The Origins of the Assassin’s Brotherhood.'),
(20, 'Crash', 'xbox', '45$', 'crash', 'https://www.youtube.com/embed/QDHhIy5yrDA', 'Action, Adventure, Action', '6/30/2017', 'Your favourite marsupial, Crash Bandicoot™, is back! He\'s enhanced, entranced & ready-to-dance with the N. Sane Trilogy game collection. Now you can experience Crash Bandicoot™ like never before. Spin, jump, wump and repeat as you take on the epic challenges and adventures through the three games that started it all, Crash Bandicoot™, Crash'),
(21, 'Dark Souls', 'xbox', '45$', 'darksouls', 'https://www.youtube.com/embed/jDMj2m50QrM', 'Action, Adventure, Role Playing Games', '4/12/2016', 'As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments. Players will be immersed into a world of epic atmosphere and darkness through faster gameplay and amplified combat intensity. Fans and newcomers alike will get lost in the game hallmark rewarding gameplay and immersive graphics. Now only embers remain… Prepare yourself once more and Embrace The Darkness!'),
(22, 'Gear of War', 'xbox', '45$', 'gearofwar', 'https://www.youtube.com/embed/wy8LRlS1SCc', 'Action, Adventure, Role Playing Games', '10/10/2017', ' Go behind enemy lines to forge your army, conquer Fortresses and dominate Mordor from within. Experience how the award winning Nemesis System creates unique personal stories with every enemy and follower, and confront the full power of the Dark Lord Sauron and his Ringwraiths in this epic new story of Middle-earth.'),
(23, 'Infinite', 'xbox', '45$', 'infinite', 'https://www.youtube.com/embed/pzlCxADSx0U', 'Shooter', '11/4/2016', 'Multiplayer combines a fluid momentum based movement system, player focused map design, deep customization, and a brand new combat rig system to create an intense gameplay experience where every second counts. Combat Rigs (Rigs) are the ultimate combat systems. Each Rig is a cutting-edge, tactical combat suit worn by the player and is built for totally different styles of play'),
(24, 'Marvel legos', 'xbox', '45$', 'legos', 'https://www.youtube.com/embed/67RWEWEQPAg', 'Action, Adventure', '11/15/2013', 'LEGO® Marvel™ Super Heroes features an original story crossing the entire Marvel Universe. Players take control of Iron Man, Spider-Man, the Hulk, Captain America, Wolverine and many more Marvel characters as they unite to stop Loki and a host of other Marvel villains from assembling a super-weapon capable of destroying the world.'),
(25, 'Sonic', 'xbox', '45$', 'sonic', 'https://www.youtube.com/embed/bewEB49Kt9g', 'Adventure', '1/24/2018', 'Defeat enemies with blazing speed as Modern Sonic, catapult past perilous platforms as Classic Sonic, and create your very own Custom Hero Character equipped with a variety of powerful gadgets. Experience fast-paced action with these three unique gameplay styles, explore iconic stages, plus, fight across unique added content with Shadow as a playable character!');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`username`, `comment`) VALUES
('jad@lau', 'nice'),
('mhmd@lau.edu', 'awsome'),
('hahahha', 'hahahaahah'),
('nahla', 'hellooo'),
('jad008', 'i am jad'),
('[object Object]', 'i am jad im logged in'),
('jadhammoud07', 'heheheehhe'),
('jadhammoud07', ''),
('jadhammoud07', 'done'),
('admin', 'i am admin'),
('omar12', 'i am omar'),
('admin', 'hello'),
('admin', 'after editting i am admin');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `address`, `email`, `phone_number`, `username`, `password`) VALUES
(15, 'jad', 'hammoud', 'beirut', 'jad.hammoud01@lau.edu', 76939605, 'jadhammoud07', '196942d56a775a8728990774c0c1eed330ef9a95ecbfde95b83b53f1c80ae676'),
(23, 'hahahaah', 'haahahah', 'hahahaahah', 'hahaahah', 777777, 'hahaah', 'f5e532fd4460aefc9088f51c3bf149cf3ee7a31f90fbec55840b503a200778cb'),
(25, 'jhammoud007@gmail.com', 'jhammoud007@gmail.com', 'jhammoud007@gmail.com', 'jhammoud007@gmail.com', 444444, 'jad008', '94f855e068e112f940460fdce21adae8fb8adfd0773ce5f30828b72c2abe65b2'),
(26, 'admin', 'admin', 'admin', 'admin', 1111, 'admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'),
(46, 'omar', 'omar', 'tegegeg', 'omar@lau', 525252525, 'omar1234', 'd469c4801e4a7ad43c1dfcc0dcb58dfab28f2b1de5100e2b9710edde86c3aaf0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cds`
--
ALTER TABLE `cds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cds`
--
ALTER TABLE `cds`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
