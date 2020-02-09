using GraphQL.Types;

namespace CharacterCreation
{
	class CharacterGraph : ObjectGraphType<Character>
	{
		public CharacterGraph()
		{
			Name = "Character";
			Description = "A player character";

			Field<InfoGraph>().Name("info");
			Field<StatBlockGraph>().Name("statBlock");
			Field<SkillGraph>().Name("skill");
			Field<StatGraph>().Name("stat");
			Field<CombatStatsGraph>().Name("combatStats");
			Field<EquipmentGraph>().Name("equipment");
			Field<TraitGraph>().Name("traits");
			Field<PersonalityGraph>().Name("personality");
			Field<AppearanceGraph>().Name("appearance");
			Field<DescriptionGraph>().Name("description");
			Field<SpellcastingGraph>().Name("spellcasting");
		}
	}
}
