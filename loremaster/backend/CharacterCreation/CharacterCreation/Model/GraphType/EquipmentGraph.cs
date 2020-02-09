using GraphQL.Types;

namespace CharacterCreation
{
	class EquipmentGraph : ObjectGraphType<Equipment>
	{
		public EquipmentGraph()
		{
			Name = "Equipment";
			Description = "Equipment that a character can have";

			Field<ListGraphType<NoteGraph>>().Name("items");
			Field<CurrencyGraph>().Name("currency");
			Field<ListGraphType<NoteGraph>>().Name("Treasure");
		}
	}
}
