function html_choices(before_choices) {
    var list_html = '<p>' + 'text' + '</p><ul id="choices">';

    for (i = 0; i < before_choices.choices.length; i++) {
        list_html += "<li onclick='do_choice(" + choices_list[before_choices.choices[i]].kinematic_id + ")'>" + choices_list[before_choices.choices[i]].text + "</li>";
    }
    in_html += '</div>';
    return list_html;
}