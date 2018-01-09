var json_path = "json/kinematics/";

var dialogue_files_path_list = [
    json_path + "introduction.json",
    json_path + "test1.json",
    json_path + "test2.json",
    json_path + "test3.json"
];

var stuffs_lists = [
    new Stuff("stuff1", "", "", "", false),
    new Stuff("stuff2", "", "", "", false),
    new Stuff("stuff3", "", "", "", false),
    new Stuff("stuff4", "", "", "", false),
    new Stuff("stuff5", "", "", "", false),
    new Stuff("stuff6", "", "", "", false),
    new Stuff("stuff7", "", "", "", false),
]

var quests_list = [
    new Quest("Quest 1", "quest 1", [], 500, 0, null, false),
    new Quest("Quest 2", "quest 2", [], 500, 0, null, false),
    new Quest("Quest 3", "quest 3", [], 500, 0, null, false),
    new Quest("Quest 4", "quest 4", [], 500, 0, null, false),
    new Quest("Quest 5", "quest 5", [], 500, 0, null, false),
    new Quest("Quest 6", "quest 6", [], 500, 0, null, false),
    new Quest("Quest 7", "quest 7", [], 500, 0, null, false),
    new Quest("Quest 8", "quest 8", [], 500, 0, null, false),
    new Quest("Quest 9", "quest 9", [], 500, 0, null, false),
    new Quest("Quest 10", "quest 10", [], 500, 0, null, false),
    new Quest("Quest 11", "quest 11", [], 500, 0, null, false),
    new Quest("Quest 12", "quest 12", [], 500, 0, null, false),
    new Quest("Quest 13", "quest 13", [], 500, 0, null, false),
    new Quest("Quest 14", "quest 14", [], 500, 0, null, false),
    new Quest("Quest 15", "quest 15", [], 500, 0, null, false),
    new Quest("Quest 16", "quest 16", [], 500, 0, null, false),
    new Quest("Quest 17", "quest 17", [], 500, 0, null, false),
    new Quest("Quest 18", "quest 18", [], 500, 0, null, false),
    new Quest("Quest 19", "quest 19", [], 500, 0, null, false),
    new Quest("Quest 20", "quest 20", [], 500, 0, null, false),
];

var places_list = [
    new Place("City 1", [8, 7]),
    new Place("City 2", [8, 7]),
    new Place("City 3", [8, 7]),
    new Place("City 4", [8, 7]),
    new Place("City 5", [8, 7]),
    new Place("City 6", [8, 7]),
    new Place("City 7", [8, 7]),
]

var choices_list = [
    new Choice(1, "choice 1"),
    new Choice(2, "choice 2"),
    new Choice(3, "choice 3"),
    new Choice(4, "choice 4"),
    new Choice(3, "choice 5"),
    new Choice(2, "choice 6"),
    new Choice(1, "choice 7"),
    new Choice(3, "choice 8"),
    new Choice(3, "choice 9"),
    new Choice(0, "choice 10"),
    new Choice(0, "choice 11"),
    new Choice(4, "choice 12"),
    new Choice(2, "choice 13"),
    new Choice(4, "choice 14"),
    new Choice(1, "choice 15"),
    new Choice(1, "choice 16"),
    new Choice(2, "choice 17"),
]

var characters_list = [
    new Character("character1", "", "left"),
    new Character("character2", "", "right"),
    new Character("character3", "", "left"),
    new Character("character4", "", "right"),
    new Character("character5", "", "left"),
    new Character("character6", "", "right"),
    new Character("character7", "", "left"),
]

var kinematics_list = [
    new kinematic(dialogue_files_path_list[0], [0, 1], [0, 1, 2], 0, 1, false),
    new kinematic(dialogue_files_path_list[1], [0, 1], [3, 4, 5], 0, 1, false),
    new kinematic(dialogue_files_path_list[2], [0, 1], [6, 7, 8], 0, 2, false),
    new kinematic(dialogue_files_path_list[3], [0, 1], [9, 10, 11], 0, 3, false),
    new kinematic(dialogue_files_path_list[2], [0, 1], [12, 13, 14], 0, 4, false),
]

var before_choice_list = [
    new BeforeChoice(dialogue_files_path_list[0], [0, 1], [0, 1, 2]),
    new BeforeChoice(dialogue_files_path_list[1], [3, 4], [3, 4]),
    new BeforeChoice(dialogue_files_path_list[2], [5, 6], [5]),
    new BeforeChoice(dialogue_files_path_list[3], [1, 2], [6, 7, 8]),
    new BeforeChoice(dialogue_files_path_list[2], [1, 2], [9, 10]),
    new BeforeChoice(dialogue_files_path_list[0], [1, 2], [11]),
]

//modifier par rapport à la sauvegarde de l'utilisateur
var inventory = new Inventory(null, 500);
var game = new Game(inventory, 0);
var game_datas = [];