<?php

/**
 * @file
 * HTML-related hook implementations.
 */

/**
 * Implements hook_preprocess().
 */
function ohana_preprocess(array &$variables) {
  if (!empty($variables['directory'])) {
    $variables['ohana_image_path'] = '/' . $variables['directory'] . '/dist/img';
  }
}
