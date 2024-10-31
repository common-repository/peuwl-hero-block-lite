<?php
/**
 * Plugin Name: Peuwl Hero Block LITE
 * Plugin URI: https://peuwlplugins.com/peuwl-hero-block-for-gutenbrg/
 * Description: A plugin made for creating responsive image, parallax and video hero sections / banners (the free version is limited to the image setting) with the posibility to add what ever content you want inside of it. Developed for the Gutenberg editor only.
 * Author: Peuwl
 * Author URI: https://peuwlplugins.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: peuwl-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
add_filter( 'block_categories', function( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug'  => 'peuwl-blocks',
                'title' => 'Peuwl Gutenberg Blocks',
            )
        )
    );
}, 10, 2 );