<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'yoga');

/** MySQL database username */
define('DB_USER', 'yoga');

/** MySQL database password */
define('DB_PASSWORD', 'lC5Jnpku#T5plYDzu');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '1GD?MW0+*r!q)tY3l=0{|E_3+1BGHr]b2-uQN%Xhh^}NH={R7<-Jd;F9(8bm3lx;');
define('SECURE_AUTH_KEY',  '%G,sz%%MJtZatpv?O&55`:j4/6uQPl<^)S^W3:~9exmONvZ.d7YwL]].6N8sOzxF');
define('LOGGED_IN_KEY',    'Y.[$USl6;wxe*CQe_{{DlO|*l>6=Hg=DmJa[gdtUWR`(rtEzry[l3s(*8.: BMVq');
define('NONCE_KEY',        'V<.L[i=hdVo11d-~>|]wfupK*d}FywGJ8n2T,/*~bY`OwP MnqdSkY_C|%av 6qZ');
define('AUTH_SALT',        '4^#<K4UvfvDktJlkVK@ByAUtUdCn92IupR46/xM:$r,}z},t$&)F&4Eny4bd]<Ij');
define('SECURE_AUTH_SALT', '411JOfg6xCgMO&CSf?yIScN+aiT^>:J9g/f2=>L)vK5t2c8HTey -`th`=yR6RrH');
define('LOGGED_IN_SALT',   'C1DifZA7F>h)Wd<y*_)>yhX@es]&e+.)IZ){dPP8^i=jjWV5/-g2qo10`:JQR@G<');
define('NONCE_SALT',       'p1vKA4{oLY_2Myz2r;Y/<qcM-kg?`|d**+sCjF<n{y5B~@z$Y1%Q0mHa~.?iNIIe');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'yc_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define('FS_METHOD', 'direct');