<?php
defined('MOODLE_INTERNAL') || die;

$capabilities = [
    'mod/ecoliplugin:view' => [
        'captype'      => 'read',
        'contextlevel' => CONTEXT_MODULE,
        'archetypes'   => [
            'student' => CAP_ALLOW,
            'teacher' => CAP_ALLOW,
        ],
    ],
];
