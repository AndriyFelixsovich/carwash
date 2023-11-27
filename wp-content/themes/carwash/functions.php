<?php

define('B_THEME_ROOT', get_template_directory_uri() );
define('B_IMG_DIR', B_THEME_ROOT.'/img');


add_action('wp_enqueue_scripts', 'theme_add_script');
function theme_add_script() {
//    wp_enqueue_script('jquery');
    wp_enqueue_style('owl_carousel', get_template_directory_uri().'/lib/owlcarousel/assets/owl.carousel.css');
    wp_enqueue_style('style-css', get_template_directory_uri().'/css/style.css');

    wp_enqueue_script('easing', get_template_directory_uri().'/lib/easing/easing.min.js');

    wp_enqueue_style('owl_carousel_min', get_template_directory_uri().'/lib/owlcarousel/assets/owl.carousel.min.css');
    wp_enqueue_style('owl_theme_default', get_template_directory_uri().'/lib/owlcarousel/assets/owl.theme.default.min.css');
    wp_enqueue_script('owlcarousel2', get_template_directory_uri().'/lib/owlcarousel/owl.carousel.js');
    wp_enqueue_script('owlcarousel', get_template_directory_uri().'/lib/owlcarousel/owl.carousel.min.js');

    wp_enqueue_script('counterup', get_template_directory_uri().'/lib/counterup/counterup.min.js');
    wp_enqueue_script('waypoints', get_template_directory_uri().'/lib/waypoints/waypoints.min.js');
    wp_enqueue_script('jqBootstrapValidation', get_template_directory_uri().'/mail/jqBootstrapValidation.min.js');
    wp_enqueue_script('contact', get_template_directory_uri().'/mail/contact.js');
    wp_enqueue_style('animate', get_template_directory_uri().'/lib/animate/animate.css');
    wp_enqueue_style('animate_min', get_template_directory_uri().'/lib/animate/animate.min.css');
    wp_enqueue_style('flaticon', get_template_directory_uri().'/lib/flaticon/font/flaticon.css');
    wp_enqueue_script('main', get_template_directory_uri().'/js/main.js');
}

?>