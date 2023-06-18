-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2023 at 06:37 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perceptron_js`
--

-- --------------------------------------------------------

--
-- Table structure for table `perceptron`
--

CREATE TABLE `perceptron` (
  `id` int(11) NOT NULL,
  `iteration` int(11) NOT NULL,
  `x1` float NOT NULL,
  `x2` float NOT NULL,
  `v` float NOT NULL,
  `outerY` int(11) NOT NULL,
  `Y` int(11) NOT NULL,
  `error` int(11) NOT NULL,
  `new_w1` float NOT NULL,
  `new_w2` float NOT NULL,
  `delta_w1` float NOT NULL,
  `delta_w2` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `perceptron`
--
-- --------------------------------------------------------

--
-- Table structure for table `sample`
--

CREATE TABLE `sample` (
  `id` int(11) NOT NULL,
  `harta` float NOT NULL,
  `utang` float NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sample`
--

INSERT INTO `sample` (`id`, `harta`, `utang`, `status`) VALUES
(1, 1.2, 0.3, 'Tidak Bangkrut'),
(4, 0.8, 0.6, 'Tidak Bangkrut'),
(5, 1.1, 1, 'Tidak Bangkrut'),
(6, 0.4, 1, 'Bangkrut'),
(7, 0.5, 1.5, 'Bangkrut');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `perceptron`
--
ALTER TABLE `perceptron`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sample`
--
ALTER TABLE `sample`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `perceptron`
--
ALTER TABLE `perceptron`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `sample`
--
ALTER TABLE `sample`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
