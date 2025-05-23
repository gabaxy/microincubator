<?php
defined('MOODLE_INTERNAL') || die();

/**
 * Add a new instance of the ecoliplugin into the database.
 *
 * @param stdClass $data Data from the form.
 * @param mod_ecoliplugin_mod_form $mform The form instance.
 * @return int The new instance ID.
 */
function ecoliplugin_add_instance($data, $mform) {
    global $DB;
    $record = new stdClass();
    $record->course        = $data->course;
    $record->name          = $data->name;
    $record->intro         = $data->intro;
    $record->introformat   = $data->introformat;
    $record->timecreated   = time();
    $record->timemodified  = time();
    $instanceid = $DB->insert_record('ecoliplugin', $record);
    // Sukuriame Gradebook elementą.
    ecoliplugin_grade_item_update($instanceid, null);
    return $instanceid;
}

/**
 * Update an existing instance of the ecoliplugin.
 *
 * @param stdClass $data Data from the form.
 * @param mod_ecoliplugin_mod_form $mform The form instance.
 * @return bool True if successful.
 */
function ecoliplugin_update_instance($data, $mform) {
    global $DB;
    $record = new stdClass();
    $record->id            = $data->instance;
    $record->name          = $data->name;
    $record->intro         = $data->intro;
    $record->introformat   = $data->introformat;
    $record->timemodified  = time();
    $updated = $DB->update_record('ecoliplugin', $record);
    // Atnaujiname Gradebook, jei reikia.
    ecoliplugin_grade_item_update($data->instance, null);
    return $updated;
}

/**
 * Delete an instance of the ecoliplugin.
 *
 * @param int $id The instance ID.
 * @return bool True if successful.
 */
function ecoliplugin_delete_instance($id) {
    global $DB;
    // Ištriname rezultatus savo lentelėje.
    $DB->delete_records('ecoliplugin_results', ['instanceid' => $id]);
    // Ištriname modulio įrašą.
    $deleted = $DB->delete_records('ecoliplugin', ['id' => $id]);
    // Pašaliname Gradebook elementą.
    ecoliplugin_grade_item_delete($id);
    return $deleted;
}

/**
 * Remove grade item.
 *
 * @param int $instanceid
 * @return void
 */
function ecoliplugin_grade_item_delete($instanceid) {
    global $CFG;
    require_once($CFG->libdir . '/gradelib.php');
    grade_update('mod/ecoliplugin', $instanceid, null, null, null, null, ['deleted' => 1]);
}

/**
 * Save a user's score via AJAX.
 *
 * @param int $instanceid
 * @param int $userid
 * @param float $score
 * @return bool
 */
function ecoliplugin_save_score($instanceid, $userid, $score) {
    global $DB;
    $record = new stdClass();
    $record->instanceid  = $instanceid;
    $record->userid      = $userid;
    $record->score       = $score;
    $record->timecreated = time();

    $id = $DB->insert_record('ecoliplugin_results', $record);
    if ($id) {
        ecoliplugin_grade_item_update($instanceid, $score);
        return true;
    }
    return false;
}

/**
 * Update or create the grade item for this instance.
 *
 * @param int $instanceid
 * @param float|null $score
 */
function ecoliplugin_grade_item_update($instanceid, $score = null) {
    global $CFG;
    require_once($CFG->libdir . '/gradelib.php');
    $params = ['itemname' => get_string('modulename', 'ecoliplugin')];
    grade_update('mod/ecoliplugin', $instanceid, null, 0, 100, $score, $params);
}

/**
 * Display all attempts for this instance.
 *
 * @param stdClass $plugin
 * @param stdClass $cm
 * @param stdClass $course
 */
function ecoliplugin_show_attempts($plugin, $cm, $course) {
    global $DB, $OUTPUT;
    $attempts = $DB->get_records('ecoliplugin_results', ['instanceid' => $plugin->id], 'timecreated ASC');
    if (!$attempts) {
        echo $OUTPUT->notification(get_string('noinstances', 'ecoliplugin'));
        return;
    }
    $table = new html_table();
    $table->head = [
        get_string('attempt', 'ecoliplugin'),
        get_string('score', 'ecoliplugin'),
        get_string('date', 'ecoliplugin')
    ];
    foreach ($attempts as $attempt) {
        $table->data[] = [
            $attempt->id,
            $attempt->score,
            userdate($attempt->timecreated)
        ];
    }
    echo html_writer::table($table);
}

