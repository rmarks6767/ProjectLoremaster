using GraphQL.Types;

namespace CharacterCreation
{
	class StatGraph : ObjectGraphType<Stat>
	{
		public StatGraph()
		{
			Name = "Stat";
			Description = "A stat of the character";

			Field(stat => stat.ProficiencyBonus).Name("proficiencyBonus");
			Field<DiceGraph>().Name("inspiration");
			Field(stat => stat.PassivePerception).Name("passivePerception");
		}
	}
}
