using GraphQL.Types;

namespace CharacterCreation
{
	class InfoGraph : ObjectGraphType<Info>
	{
		public InfoGraph()
		{
			Name = "Main Info";
			Description = "The main info of the character.";

			Field(info => info.CharacterName).Name("characterName");
			Field<RaceEnum>().Name("race");
			Field<ClassEnum>().Name("class");
			Field(info => info.Level).Name("level");
			Field(info => info.Experience).Name("experience");
			Field<BackgroundEnum>().Name("background");
			Field<AlignmentEnum>().Name("alignment");
			Field(info => info.PlayerName).Name("playerName");
		}
	}
}
