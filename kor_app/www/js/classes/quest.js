class Quest {
    constructor(title, description, loot, gold, time, start, do_quest, validate) {
        this.title = title;
        this.description = description;
        this.loot = loot;
        this.gold = gold;
        this.time = time;
        this.start = start;
        this.do_quest = do_quest;
        this.validate = validate;
    }
}