using GraphQL.Types;

namespace CharacterCreation
{
	class TraitGraph : ObjectGraphType<Trait>
	{
		public TraitGraph()
		{
			Name = "Trait";
			Description = "The traits of the character";

			Field<ListGraphType<NoteGraph>>().Name("racialTraits");
			Field<ListGraphType<NoteGraph>>().Name("classTraits");
		}
	}
}
