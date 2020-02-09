using GraphQL.Types;

namespace CharacterCreation
{
	class AppearanceGraph : ObjectGraphType<Appearance>
	{
		public AppearanceGraph()
		{
			Name = "Appearance";
			Description = "The appearance of the character";

			Field(appearance => appearance.Age).Name("age");
			Field(appearance => appearance.Height).Name("height");
			Field(appearance => appearance.Weight).Name("weight");
			Field(appearance => appearance.Eyes).Name("eyes");
			Field(appearance => appearance.Skin).Name("skin");
			Field(appearance => appearance.Hair).Name("hair");
		}
	}
}
