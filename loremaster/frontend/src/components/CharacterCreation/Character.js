import { strict } from "assert";

class Character {
    constructor(name, race, dndclass, str, dex, con, int, wis, cha, xp){
        this.name = name;
        this.race = race;
        this.dndclass = dndclass;
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
        this.xp = xp;
        this.modDict = [];
        this.generateModDict();
        this.levelList = [];
        this.generateLvlList();
        this.level = this.getLevel(this.xp);
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