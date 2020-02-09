using GraphQL.Types;

namespace CharacterCreation
{
	class SpellcastingGraph : ObjectGraphType<Spellcasting>
	{
		public SpellcastingGraph()
		{
			Name = "Spellcasting";
			Description = "The spellcasting of the character;";

			Field<ClassEnum>().Name("spellcastingClass");
			Field<AbilityGraph>().Name("spellcastingAbility");
			Field(spellcasting => spellcasting.SpellSaveDC).Name("spellSaveDC");
			Field(spellcasting => spellcasting.SpellAttackBonus).Name("spellAttackBonue");
			Field(spellcasting => spellcasting.SpellsKnown).Name("spellsKnown");
			Field<ListGraphType<SpellGraph>>().Name("spells");
			Field<SpellSlotTrackerGraph>().Name("spellSlots");
		}
	}
}
