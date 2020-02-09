using GraphQL.Types;

namespace CharacterCreation
{
	class AbilityGraph : ObjectGraphType<Ability>
	{
		public AbilityGraph()
		{
			Name = "Ability";
			Description = "An ability of the character";

			Field(ability => ability.Score).Name("score");
			Field(ability => ability.Modifier).Name("modifier");
			Field(ability => ability.SavingThrow).Name("savingThrow");
		}
	}
}
