-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2014-09-15 15:05:48
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `personal_web`
--

-- --------------------------------------------------------

--
-- 表的结构 `loginer`
--

CREATE TABLE IF NOT EXISTS `loginer` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ip` varchar(40) NOT NULL,
  `agent` varchar(100) NOT NULL,
  `count` int(10) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `loginer`
--

INSERT INTO `loginer` (`id`, `ip`, `agent`, `count`, `date`) VALUES
(1, '::1', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:32.0) Gecko/20100101 Firefox/32.0', 48, '2014-09-15 20:35:39');

-- --------------------------------------------------------

--
-- 表的结构 `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `id` mediumint(6) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `message` text NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=42 ;

--
-- 转存表中的数据 `message`
--

INSERT INTO `message` (`id`, `user`, `email`, `message`, `date`) VALUES
(39, '小猪爱溜达', '2844614796@qq.com', '做一个小小的测试吧，欢迎大家到我的官网给我留言，非常感谢，我一定会再接再厉，提高自己的技术，坚持奋斗！', '2014-09-10 17:15:59'),
(40, 'fh', '15698745225@qq.com', '怎么回事啊', '2014-09-10 19:34:59'),
(41, '哦啦啦', '125588456998@qq.com', '受不了了', '2014-09-10 19:38:14');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
