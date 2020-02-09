using GraphQL.Types;

namespace CharacterCreation
{
	class CombatStatsGraph : ObjectGraphType<CombatStats>
	{
		public CombatStatsGraph()
		{
			Name = "CombatStats";
			Description = "Stats for a player that are used in combat";

			Field<ListGraphType<WeaponGraph>>().Name("weapons");
			Field(combat => combat.ArmorClass).Name("armorClass");
			Field(combat => combat.Initiative).Name("initiative");
			Field(combat => combat.Speed).Name("speed");
			Field(combat => combat.MaxHealth).Name("maxHealth");
			Field(combat => combat.CurrentHealth).Name("currentHealth");
			Field(combat => combat.TemporaryHealth).Name("temporaryHealth");
			Field<DiceGraph>().Name("hitDice");
			Field(combat => combat.DeathSaveSuccess).Name("deathSaveSuccess");
			Field(combat => combat.DeathSaveFail).Name("deathSaveFail");
		}
	}
}
