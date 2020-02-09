using GraphQL.Types;

namespace CharacterCreation
{
	class DescriptionGraph : ObjectGraphType<Description>
	{
		public DescriptionGraph()
		{
			Name = "Description";
			Description = "A description of the character";

			Field(description => description.Backstory).Name("backstory");
			Field<ListGraphType<NoteGraph>>().Name("allies");
		}
	}
}
