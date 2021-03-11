<?php
/**
* Twentytwenty Child functions and definitions
*
* @link http://codex.wordpress.org/Theme_Development
* @link http://codex.wordpress.org/Child_Themes
*/

// Enqueue scripts and styles
function twentytwenty_child_scripts(){
	wp_enqueue_style( 'twentytwenty-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'twentytwenty-style' ));
}
add_action( 'wp_enqueue_scripts', 'twentytwenty_child_scripts' );

function kinsta_add_google_fonts() {
    wp_register_style( 'googleFonts', 'href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;500;900&display=swap');
    wp_enqueue_style( 'googleFonts');
   }
   add_action( 'wp_enqueue_scripts', 'kinsta_add_google_fonts' );