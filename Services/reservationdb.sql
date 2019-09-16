-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2019 at 05:06 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reservationdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `gov_employee`
--

CREATE TABLE `gov_employee` (
  `ID` int(11) NOT NULL,
  `NIC` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gov_employee`
--

INSERT INTO `gov_employee` (`ID`, `NIC`) VALUES
(1, '970524856V'),
(2, '862458425V');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `ID` int(11) NOT NULL,
  `location_desc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`ID`, `location_desc`) VALUES
(1, 'colombo'),
(2, 'matara'),
(3, 'kandy'),
(4, 'gampaha');

-- --------------------------------------------------------

--
-- Table structure for table `systemuser`
--

CREATE TABLE `systemuser` (
  `ID` int(11) NOT NULL,
  `USERNAME` varchar(255) NOT NULL,
  `PASSWORD` varchar(255) NOT NULL,
  `EMAIL` varchar(255) NOT NULL,
  `ADDRESS` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `systemuser`
--

INSERT INTO `systemuser` (`ID`, `USERNAME`, `PASSWORD`, `EMAIL`, `ADDRESS`) VALUES
(1, 'inusha', '123', 'inusham45@gmail.com', '352/1,godagama,padukka'),
(2, 'maduranga', '123', 'maduranga@gmail.com', '582/56,homagama,padukka'),
(3, 'inusham', '1234', 'inusham45@gmail.com', 'inusha46@gmail.com'),
(4, 'inusham', '123', 'inusham45@gmail.com', '235/25,padukka,homagama'),
(5, '', '', '', ''),
(6, '', '', '', ''),
(7, '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `train_information`
--

CREATE TABLE `train_information` (
  `ID` int(11) NOT NULL,
  `START_LOCATION` varchar(255) NOT NULL,
  `END_LOCATION` varchar(255) NOT NULL,
  `START_TIME` varchar(255) NOT NULL,
  `PRICE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `train_information`
--

INSERT INTO `train_information` (`ID`, `START_LOCATION`, `END_LOCATION`, `START_TIME`, `PRICE`) VALUES
(1, 'Colombo', 'Kandy', '11.30 PM', 450),
(2, 'Colombo', 'Matara', '08.30 AM', 550),
(3, 'Kandy', 'Matara', '9.30 AM', 200);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gov_employee`
--
ALTER TABLE `gov_employee`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `systemuser`
--
ALTER TABLE `systemuser`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `train_information`
--
ALTER TABLE `train_information`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `systemuser`
--
ALTER TABLE `systemuser`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `train_information`
--
ALTER TABLE `train_information`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
