import { strict } from "assert";

class Character {
    constructor(name, race, dndclass, str, dex, con, int, wis, cha, xp, maxHP, speed, weapons){
        this.name = name;
        this.race = race;
        this.dndclass = dndclass;
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
        this.modDict = [];
        this.generateModDict();
        this.strMod = this.getMod(this.str);
        this.dexMod = this.getMod(this.dex);
        this.conMod = this.getMod(this.con);
        this.intMod = this.getMod(this.int);
        this.wisMod = this.getMod(this.wis);
        this.chaMod = this.getMod(this.cha);
        this.xp = xp;
        this.maxHP = maxHP;
        this.hp = maxHP;
        this.speed = speed;
        this.armorClass = 10 + this.dexMod;
        this.levelList = [];
        this.generateLvlList();
        this.level = this.getLevel(this.xp);
        this.skills = [];
        this.populateSkills();
        this.weapons = weapons;
        console.log(weapons);
    }

    generateModDict(){
        this.modDict.push({
            key: 1,
            value: -5
        });
        let modCount = -4;
        for(let i = 2; i < 30; i+=2){
            this.modDict.push({
                key: i,
                value: modCount
            });
            this.modDict.push({
                key: i+1,
                value: modCount
            });
            modCount++;
        }
    }

    generateLvlList(){
        this.levelList.push(0);
        this.levelList.push(300);
        this.levelList.push(900);
        this.levelList.push(2700);
        this.levelList.push(6500);
        this.levelList.push(14000);
        this.levelList.push(23000);
        this.levelList.push(34000);
        this.levelList.push(48000);
        this.levelList.push(64000);
        this.levelList.push(85000);
        this.levelList.push(100000);
        this.levelList.push(120000);
        this.levelList.push(140000);
        this.levelList.push(165000);
        this.levelList.push(195000);
        this.levelList.push(225000);
        this.levelList.push(265000);
        this.levelList.push(305000);
        this.levelList.push(365000);
    }

    populateSkills(){
        this.skills.push({
            key: "Acrobatics",
            value: this.dexMod
        });
        this.skills.push({
            key: "Animal Handling",
            value: this.wisMod
        });
        this.skills.push({
            key: "Arcana",
            value: this.intMod
        });
        this.skills.push({
            key: "Athletics",
            value: this.strMod
        });
        this.skills.push({
            key: "Deception",
            value: this.chaMod
        });
        this.skills.push({
            key: "History",
            value: this.intMod
        });
        this.skills.push({
            key: "Insight",
            value: this.wisMod
        });
        this.skills.push({
            key: "Intimidation",
            value: this.chaMod
        });
        this.skills.push({
            key: "Investigation",
            value: this.intMod
        });
        this.skills.push({
            key: "Medicine",
            value: this.wisMod
        });
        this.skills.push({
            key: "Nature",
            value: this.intMod
        });
        this.skills.push({
            key: "Perception",
            value: this.wisMod
        });
        this.skills.push({
            key: "Performance",
            value: this.chaMod
        });
        this.skills.push({
            key: "Persuasion",
            value: this.chaMod
        });
        this.skills.push({
            key: "Religion",
            value: this.intMod
        });
        this.skills.push({
            key: "Sleight of Hand",
            value: this.dexMod
        });
        this.skills.push({
            key: "Stealth",
            value: this.dexMod
        });
        this.skills.push({
            key: "Survival",
            value: this.wisMod
        });
    }

    getLevel(xp){
        for(let i = 0; i < this.levelList.length; i++){
            if(this.levelList[i+1] > xp)return i;
        }
    }

    getNextLevel(xp){
        for(let i = 0; i < this.levelList.length; i++){
            if(this.levelList[i+1] > xp)return i + 1;
        }
    }

    getLevelXP(level){
        return this.levelList[level];
    }

    getNormalizedLevel(xp){
        let level = this.getLevel(xp);
        let MIN = this.getLevelXP(level);
        let MAX = this.getLevelXP(level + 1);
        const normalise = value => (value - MIN) * 100 / (MAX - MIN);
        return normalise(xp);
    }

    getMod(ability){
        return this.modDict[ability].value;
    }

    addXp(xp){
        this.xp += xp;
    }
}

export default Character;