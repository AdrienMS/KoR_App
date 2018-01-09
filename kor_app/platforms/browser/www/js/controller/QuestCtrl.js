function QuestCtrl($scope) {
    game_datas["kinematic"] = kinematics_list[game.kinematic_id];
    kinematic = kinematics_list[game.kinematic_id];
    dialogues_list = read_json(kinematic.json);
    document.getElementById("game").innerHTML = create_html_to_display_kinematic(dialogues_list);
    document.getElementById("quests").innerHTML = "";
    //document.getElementById("choices").innerHTML = html_choices(kinematic.choices);
}

function change_kinematic(choice) {
    game_datas["kinematic"] = choice;
    kinematic = choice;
    dialogues_list = read_json(kinematic.json);
    document.getElementById("game").innerHTML = create_html_to_display_kinematic(dialogues_list);
    document.getElementById("quests").innerHTML = "";
    //document.getElementById("choices").innerHTML = html_choices(kinematic.choices);
    //current_state.main_quest = link;
}

function create_html_to_display_kinematic(dialogues_list) {
    var in_html = '<div id="dialogue">';
    var count = 0;
    while (count < dialogues_list.dialogues.length) {
        in_html += '<p id="dialogue_' + count.toString() + '" onclick="change_text(' +
            count.toString() + ', ' + dialogues_list.dialogues.length + ')"';
        if (count > 0) {
            in_html += 'class="hidden"';
        }
        in_html += '>' + dialogues_list.dialogues[count].text + '</p>';
        count += 1;
    }
    in_html += '</div>';
    return in_html;
}

function change_text(number, max) {
    $("#dialogue_" + number.toString()).addClass("hidden");
    if (number != max - 1) {
        $("#dialogue_" + (number + 1).toString()).removeClass("hidden");
    } else {
        display_quests();
    }
}

function display_quests() {
    in_html = "";
    var count = 0;
    var assign_quests = null;
    while (count < game_datas["kinematic"].assign_quests.length) {
        assign_quests = game_datas["kinematic"].assign_quests[count];
        in_html += '<li id="quest_' + count.toString() + '"';
        if (quests_list[assign_quests].validate) {
            in_html += ' class="validate"';
        }
        in_html += ' onclick=(valid_quest(' + count.toString() + '))>' + quests_list[assign_quests].title + '</li>';
        count += 1;
    }
    document.getElementById("quests").innerHTML = in_html;
}

function valid_quest(number) {
    $("#quest_" + number.toString()).addClass("validate");
    quests_list[game_datas["kinematic"].assign_quests[number]].validate = true;
    value = check_if_all_valid_quests();
    if (value) {
        display_choices();
    }
}

function check_if_all_valid_quests() {
    var count = 0;
    while (count < game_datas["kinematic"].assign_quests.length) {
        assign_quests = game_datas["kinematic"].assign_quests[count];
        if (!quests_list[assign_quests].validate)
            return false;
        count += 1;
    }
    return true;
}

function display_choices() {
    document.getElementById("game").innerHTML = html_choices(before_choice_list[game_datas["kinematic"].before_choice]);
}