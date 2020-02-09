using GraphQL.Types;

namespace CharacterCreation
{
	class PersonalityGraph : ObjectGraphType<Personality>
	{
		public PersonalityGraph()
		{
			Name = "Personality";
			Description = "The personality of the character";

			Field(personality => personality.Traits).Name("personalityTraits");
			Field(personality => personality.Ideals).Name("ideals");
			Field(personality => personality.Bonds).Name("bonds");
			Field(personality => personality.Flaws).Name("flaws");
		}
	}
}
