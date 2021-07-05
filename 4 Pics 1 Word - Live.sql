-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2017 at 07:04 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appjudigot_4pics1word`
--
CREATE DATABASE IF NOT EXISTS `appjudigot_4pics1word` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `appjudigot_4pics1word`;

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `picture` varchar(32) NOT NULL,
  `word` varchar(50) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`id`, `picture`, `word`) VALUES
(1, 'theft.jpg', 'theft'),
(2, 'waist.jpg', 'waist'),
(3, 'water.jpg', 'water'),
(4, 'whale.jpg', 'whale'),
(5, 'wheat.jpg', 'wheat'),
(6, 'wheel.jpg', 'wheel'),
(7, 'street.jpg', 'street'),
(8, 'pudding.jpg', 'pudding'),
(9, 'extinct.jpg', 'extinct'),
(10, 'fishing.jpg', 'fishing'),
(11, 'library.jpg', 'library'),
(12, 'historty.jpg', 'history'),
(13, 'license.jpg', 'license'),
(14, 'summer.jpg', 'summer'),
(15, 'publish.jpg', 'publish'),
(16, 'servant.jpg', 'servant'),
(17, 'silence.jpg', 'silence'),
(18, 'sunrise.jpg', 'sunrise'),
(19, 'turban.jpg', 'turban'),
(20, 'storage.jpg', 'storage'),
(21, 'window.jpg', 'window'),
(22, 'woolly.jpg', 'woolly'),
(23, 'achieve.jpg', 'achieve'),
(24, 'umbrella.jpg', 'umbrella');

-- --------------------------------------------------------

--
-- Table structure for table `scores`
--

CREATE TABLE `scores` (
  `scoreId` int(11) NOT NULL,
  `playerName` varchar(32) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `scores`
--

INSERT INTO `scores` (`scoreId`, `playerName`, `score`) VALUES
(4, 'Chris', 0),
(5, 'Angbun', 100),
(6, 'Klein', 0),
(7, 'Dommel', 100);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scores`
--
ALTER TABLE `scores`
  ADD PRIMARY KEY (`scoreId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `scores`
--
ALTER TABLE `scores`
  MODIFY `scoreId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
