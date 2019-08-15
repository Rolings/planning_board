-- --------------------------------------------------------
-- Хост:                         localhost
-- Версия сервера:               10.1.31-MariaDB - mariadb.org binary distribution
-- Операционная система:         Win32
-- HeidiSQL Версия:              9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Дамп структуры для таблица laravel_sandbox.menu
DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
                                    `id` int(11) NOT NULL,
                                    `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
                                    `parent_id` int(11) DEFAULT NULL,
                                    `icon` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
                                    `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
                                    `href` varchar(125) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
                                    `order` int(2) NOT NULL DEFAULT '0',
                                    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel_sandbox.menu: ~4 rows (приблизительно)
DELETE FROM `menu`;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` (`id`, `title`, `parent_id`, `icon`, `description`, `href`, `order`) VALUES
(0, 'Dashboard', NULL, 'fa fa-list', '0', '/admin/dashboard ', 0),
(1, 'Setting', NULL, 'fa fa-cog', '0', '/admin/setting', 0),
(2, 'User', NULL, 'fa fa-user', '0', '/admin/user', 0),
(3, 'Permision', 1, 'fa fa-universal-access', '0', '/admin/permision', 0),
(4, 'System', 1, 'fa fa-cog', '0', '/admin/system', 0),
(5, 'Mail', 1, 'fa fa-envelope-open', '0', '/admin/mail', 0),
(6, 'Page', NULL, 'fa fa-newspaper', '0', '/admin/page', 0),
(7, 'SMTP', 5, 'fa fa-paper-plane', '0', '/admin/smtp', 0),
(8, 'IMAP', 5, 'fa fa-paper-plane', '0', '/admin/imap', 0),
(9, 'Menu', 1, 'fa fa-align-justify', '0', '/admin/menu', 0);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;

-- Дамп структуры для таблица laravel_sandbox.migrations
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
                                          `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
                                          `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                                          `batch` int(11) NOT NULL,
                                          PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel_sandbox.migrations: ~0 rows (приблизительно)
DELETE FROM `migrations`;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(7, '2019_08_13_085445_create_menu_table', 1),
(8, '2019_08_13_085445_create_password_resets_table', 1),
(9, '2019_08_13_085445_create_users_table', 1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Дамп структуры для таблица laravel_sandbox.password_resets
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
                                               `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                                               `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                                               `created_at` datetime DEFAULT NULL,
                                               KEY `password_resets_email_index` (`email`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel_sandbox.password_resets: ~0 rows (приблизительно)
DELETE FROM `password_resets`;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Дамп структуры для таблица laravel_sandbox.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
                                     `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
                                     `name` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
                                     `email` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
                                     `email_verified_at` datetime DEFAULT NULL,
                                     `password` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
                                     `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                                     `created_at` timestamp NULL DEFAULT NULL,
                                     `updated_at` timestamp NULL DEFAULT NULL,
                                     PRIMARY KEY (`id`),
                                     UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel_sandbox.users: ~0 rows (приблизительно)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@admin.com', NULL, '$2y$10$1YcCisH8fjK0m1T9MRIF4u/nanA7DUzC7dEEOCh2EERZNRqxJgEuq', NULL, NULL, NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
