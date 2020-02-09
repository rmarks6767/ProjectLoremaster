using GraphQL.Types;

namespace CharacterCreation
{
	class StatBlockGraph : ObjectGraphType<StatBlock>
	{
		public StatBlockGraph()
		{
			Name = "Stat Block";
			Description = "The stats of the character";

			Field<AbilityGraph>().Name("strength");
			Field<AbilityGraph>().Name("dexterity");
			Field<AbilityGraph>().Name("constitution");
			Field<AbilityGraph>().Name("intelligence");
			Field<AbilityGraph>().Name("wisdom");
			Field<AbilityGraph>().Name("charisma");
		}
	}
}
