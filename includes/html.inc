<?php

/**
 * @file
 * HTML template functions.
 */

/**
 * Implements hook_preprocess().
 */
function ohana_preprocess(array &$variables) {
  if (!empty($variables['directory'])) {
    $variables['ohana_image_path'] = '/' . $variables['directory'] . '/dist/img';
  }
}

/**
 * Implements hook_preprocess_html().
 */
function ohana_preprocess_html(array $variables, $hook) {
  // Add x-ua-compatible meta tag.
  $variables['page']['#attached']['html_head'][] = [
    [
      '#tag' => 'meta',
      '#attributes' => [
        'http-equiv' => 'x-ua-compatible',
        'content' => 'ie=edge',
      ],
    ],
    'x_ua_compatible',
  ];
}

/**
 * Implements hook_preprocess_maintenance_page().
 */
function ohana_preprocess_maintenance_page(array $variables, $hook) {
  // While markup for normal pages is split into html.html.twig and
  // page.html.twig, the markup for the maintenance page is all in the single
  // maintenance-page.html.twig template. So, to have what’s done in
  // ohana_preprocess_html() and ohana_preprocess_page() also happen
  // on the maintenance page, it has to be called here.
  ohana_preprocess_html($variables, $hook);
  ohana_preprocess_page($variables, $hook);
}

/**
 * Implements hook_preprocess_page().
 */
function ohana_preprocess_page(array $variables, $hook) {
}
