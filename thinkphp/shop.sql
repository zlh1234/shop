-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-10-11 04:33:02
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop`
--

-- --------------------------------------------------------

--
-- 表的结构 `classify`
--

CREATE TABLE `classify` (
  `classify_id` bigint(20) NOT NULL,
  `classify_name` varchar(50) DEFAULT NULL,
  `classify_count` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `classify_product_connection`
--

CREATE TABLE `classify_product_connection` (
  `classify_product_connection_id` bigint(20) NOT NULL,
  `classify_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `comments`
--

CREATE TABLE `comments` (
  `comments_id` bigint(20) NOT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `comment_content` bigint(255) DEFAULT NULL,
  `comment_date` char(30) DEFAULT NULL,
  `comment_parent` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `product_id` bigint(20) NOT NULL,
  `product_name` char(60) DEFAULT NULL,
  `product_img` varchar(400) DEFAULT NULL,
  `product_price` float DEFAULT NULL,
  `product_success` int(11) DEFAULT NULL,
  `product_classify` varchar(255) DEFAULT NULL,
  `product_stock` int(11) DEFAULT NULL,
  `product_freight` int(11) DEFAULT NULL,
  `product_details` varchar(800) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `shop`
--

CREATE TABLE `shop` (
  `shop_id` bigint(20) NOT NULL,
  `shop_name` varchar(50) DEFAULT NULL,
  `shop_address` varchar(50) DEFAULT NULL,
  `shop _avatar` varchar(400) DEFAULT NULL,
  `shop_ description` char(4) DEFAULT NULL,
  `shop_ service` char(4) DEFAULT NULL,
  `shop_logistics` char(4) DEFAULT NULL,
  `shop_ credit` int(4) DEFAULT NULL,
  `shop_ deposit` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `shopmeta`
--

CREATE TABLE `shopmeta` (
  `shopmeta_id` bigint(20) NOT NULL,
  `shop_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `shop_classify_connection`
--

CREATE TABLE `shop_classify_connection` (
  `shop_classify_connection_id` bigint(20) NOT NULL,
  `shop_id` bigint(20) DEFAULT NULL,
  `classify_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `user_id` bigint(20) NOT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_nickname` varchar(50) DEFAULT NULL,
  `user_mail` varchar(50) DEFAULT NULL,
  `user_avatar` varchar(400) DEFAULT NULL,
  `user_registered` varchar(30) DEFAULT NULL,
  `user_type` int(2) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_password`, `user_nickname`, `user_mail`, `user_avatar`, `user_registered`, `user_type`) VALUES
(1000, 'zlh123', 'de182a0b5961da1783e6e1a6dae0b0f6', '随风飘摇', '1032201985@qq.com', 'avatar.jpg', '1533449436', 0),
(1002, 'hahaha', '51141b11a333a43774bac652757b9c23', '哈哈哈', '1032201985@qq.com', NULL, '1533899016', 0),
(1003, 'huhuhu', '51141b11a333a43774bac652757b9c23', '啊啊', '1032201985@qq.com', NULL, '1533899144', 0),
(1004, 'aaaaaa', '22f52868f43ea2f42130e16dda517dbd', '111', '123@q.gf', NULL, '1533899754', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classify`
--
ALTER TABLE `classify`
  ADD PRIMARY KEY (`classify_id`);

--
-- Indexes for table `classify_product_connection`
--
ALTER TABLE `classify_product_connection`
  ADD PRIMARY KEY (`classify_product_connection_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comments_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`shop_id`);

--
-- Indexes for table `shopmeta`
--
ALTER TABLE `shopmeta`
  ADD PRIMARY KEY (`shopmeta_id`);

--
-- Indexes for table `shop_classify_connection`
--
ALTER TABLE `shop_classify_connection`
  ADD PRIMARY KEY (`shop_classify_connection_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `classify`
--
ALTER TABLE `classify`
  MODIFY `classify_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000;
--
-- 使用表AUTO_INCREMENT `classify_product_connection`
--
ALTER TABLE `classify_product_connection`
  MODIFY `classify_product_connection_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000;
--
-- 使用表AUTO_INCREMENT `comments`
--
ALTER TABLE `comments`
  MODIFY `comments_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000;
--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `product_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000;
--
-- 使用表AUTO_INCREMENT `shop`
--
ALTER TABLE `shop`
  MODIFY `shop_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000;
--
-- 使用表AUTO_INCREMENT `shopmeta`
--
ALTER TABLE `shopmeta`
  MODIFY `shopmeta_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000;
--
-- 使用表AUTO_INCREMENT `shop_classify_connection`
--
ALTER TABLE `shop_classify_connection`
  MODIFY `shop_classify_connection_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000;
--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1005;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
