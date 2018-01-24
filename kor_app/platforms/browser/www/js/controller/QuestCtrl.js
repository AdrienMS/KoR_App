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
        in_html += ' onclick="display_sending_characters(' + count.toString() + ')">' + quests_list[assign_quests].title + '</li>';
        count += 1;
    }
    document.getElementById("quests").innerHTML = in_html;
}

function display_sending_characters(number) {
    if(characters_enabled == 0) {
        alert("Vous ne pouvez pas envoyer de personnage");
        return;
    }
    if (characters_enabled >= 1) {
        $("#button_1").addClass("show");
    }
    if (characters_enabled >= 2) {
        $("#button_2").addClass("show");
    }
    if (characters_enabled >= 3) {
        $("#button_3").addClass("show");
    }
    if (characters_enabled == 4) {
        $("#button_4").addClass("show");
    }
    document.getElementById("id_quest").innerHTML = number;
    document.getElementById("title_quest").innerHTML = quests_list[game_datas["kinematic"].assign_quests[number]].title;
    $("#sending-characters").addClass("show");
}

function close_sending_characters() {
    $("#sending-characters").removeClass("show");
    $("#button_1").removeClass("show");
    $("#button_2").removeClass("show");
    $("#button_3").removeClass("show");
    $("#button_4").removeClass("show");
}

function start_quest(number) {
    close_sending_characters();
    characters_enabled -= number;
    id_quest = Number(document.getElementById("id_quest").innerHTML);
    $("#time_quest_" + id_quest.toString()).addClass("show");
    quests_list[game_datas["kinematic"].assign_quests[id_quest]].start = d.getTime();
    setTimeout(end_quest, quests_list[game_datas["kinematic"].assign_quests[id_quest]].time, [number, id_quest]);
}

function end_quest(args) {
    characters_enabled += args[0];
    valid_quest(args[1]);
}

function valid_quest(id_quest) {
    $("#quest_" + id_quest.toString()).addClass("validate");
    quests_list[game_datas["kinematic"].assign_quests[id_quest]].validate = true;
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