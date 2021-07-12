<?php

/**
 * @file
 * Form template functions.
 */

/**
 * Implements template_preprocess_input().
 */
function ohana_preprocess_input(array $variables) {
  $variables['required'] = isset($variables['element']['#required']) ? $variables['element']['#required'] : NULL;
  $variables['type'] = isset($variables['element']['#attributes']['type']) ? $variables['element']['#attributes']['type'] : NULL;
  $variables['dropbutton'] = isset($variables['element']['#dropbutton']) ? $variables['element']['#dropbutton'] : NULL;
}

/**
 * Implements template_preprocess_fieldset().
 */
function ohana_preprocess_fieldset(array $variables) {
  $variables['type'] = isset($variables['element']['#type']) ? $variables['element']['#type'] : NULL;
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function gesso_theme_suggestions_form_alter(array &$suggestions, array $variables) {
  $form_id = $variables['element']['#form_id'];
  $suggestions[] = 'form__' . $form_id;

  // A list of form IDs in which to use form--inline.html.twig instead of form.html.twig.
  $inline_forms = [
    // 'example-form-id',
  ];
  if (isset($variables['element']['#id'])) {
    if (in_array($variables['element']['#id'], $inline_forms)) {
      $suggestions[] = 'form__inline';
    }
  }
}
