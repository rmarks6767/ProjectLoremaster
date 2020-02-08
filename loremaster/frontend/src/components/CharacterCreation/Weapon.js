import {strict} from 'assert';

class Weapon{
    constructor(name, damage, damageType, melee, atkBonus, type, range, finesse, twoHanded, versatile){
        this.name = name;
        this.damage = damage;
        this.damageType = damageType;
        this.melee = melee;
        this.atkBonus = atkBonus;
        this.type = type;
        this.range = range;
        this.finesse = finesse;
        this.twoHanded = twoHanded;
        this.versatile = versatile;
    }
}

export default Weapon;