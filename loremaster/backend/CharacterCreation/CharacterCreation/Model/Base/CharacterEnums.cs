using GraphQL.Types;

namespace CharacterCreation
{
	public enum Race
	{
		Dragonborn,
		Dwarf, 
		Elf, 
		Gnome, 
		HalfElf, 
		HalfOrc,
		Halfling,
		Human,
		Tiefling
	}
	public class RaceEnum : EnumerationGraphType<Race> { }

	public enum Class
	{
		Barbarian,
		Bard,
		Cleric,
		Druid,
		Fighter,
		Monk,
		Paladin,
		Ranger,
		Rogue,
		Sorcerer,
		Warlock,
		Wizard
	}
	public class ClassEnum : EnumerationGraphType<Class> { }

	public enum Background
	{
		Acolyte
	}
	public class BackgroundEnum : EnumerationGraphType<Background> { }

	public enum Alignment
	{
		LawfulGood,
		NeutralGood,
		ChaoticGood,
		LawfulNeutral,
		TrueNeutral,
		ChaoticNeutral,
		LawfulEvil,
		NeutralEvil,
		ChaoticEvil
	}
	public class AlignmentEnum : EnumerationGraphType<Alignment> { }

	public enum ProficiencyType
	{
		Language,
		SavingThrow,
		Skill,
		Weapon,
		Armor,
		Tool,
		GamingKit
	}
	public class ProficiencyEnum : EnumerationGraphType<ProficiencyType> { }

	public enum DamageType
	{
		Acid,
		Bludgeoning,
		Cold,
		Fire,
		Force,
		Lightning,
		Necrotic,
		Piercing,
		Poison,
		Psychic,
		Radiant,
		Slashing,
		Thunder
	}
	public class DamageTypeEnum : EnumerationGraphType<DamageType> { }

	public enum WeaponProperty
	{
		Ammunition,
		Finesse,
		Heavy,
		Light,
		Loading,
		Range,
		Reach,
		Special,
		Thrown,
		TwoHanded,
		Versatile
	}
	public class WeaponPropertyEnum : EnumerationGraphType<WeaponProperty> { }

	public enum SchoolOfMagic
	{
		Abjuration,
		Conjuration,
		Divination,
		Enchantment,
		Evocation,
		Illusion,
		Necromancy,
		Transmutation
	}
	public class SchoolOfMagicEnum : EnumerationGraphType<SchoolOfMagic> { }

	public enum CastingTime
	{
		Action,
		BonusAction,
		Reaction
	}
	public class CastingTimeEnum : EnumerationGraphType<CastingTime> { }

	public enum AreaOfEffect
	{
		Cone,
		Cube,
		Cylinder,
		Line,
		Sphere
	}
	public class AreaOfEffectEnum : EnumerationGraphType<AreaOfEffect> { }
}
