using GraphQL.Types;

namespace CharacterCreation
{
	class SpellSlotTrackerGraph : ObjectGraphType<SpellSlotTracker>
	{
		public SpellSlotTrackerGraph()
		{
			Name = "SpellSlotTracker";
			Description = "The spell slots of the character";

			Field(spellSlot => spellSlot.Cantrips).Name("currentCantrips");
			Field(spellSlot => spellSlot.Level1).Name("currentLevel1Spells");
			Field(spellSlot => spellSlot.Level2).Name("currentLevel2Spells");
			Field(spellSlot => spellSlot.Level3).Name("currentLevel3Spells");
			Field(spellSlot => spellSlot.Level4).Name("currentLevel4Spells");
			Field(spellSlot => spellSlot.Level5).Name("currentLevel5Spells");
			Field(spellSlot => spellSlot.Level6).Name("currentLevel6Spells");
			Field(spellSlot => spellSlot.Level7).Name("currentLevel7Spells");
			Field(spellSlot => spellSlot.Level8).Name("currentLevel8Spells");
			Field(spellSlot => spellSlot.Level9).Name("currentLevel9Spells");
			Field(spellSlot => spellSlot.MaxCantrips).Name("maxCantrips");
			Field(spellSlot => spellSlot.MaxLevel1).Name("maxLevel1Spells");
			Field(spellSlot => spellSlot.MaxLevel2).Name("maxLevel2Spells");
			Field(spellSlot => spellSlot.MaxLevel3).Name("maxLevel3Spells");
			Field(spellSlot => spellSlot.MaxLevel4).Name("maxLevel4Spells");
			Field(spellSlot => spellSlot.MaxLevel5).Name("maxLevel5Spells");
			Field(spellSlot => spellSlot.MaxLevel6).Name("maxLevel6Spells");
			Field(spellSlot => spellSlot.MaxLevel7).Name("maxLevel7Spells");
			Field(spellSlot => spellSlot.MaxLevel8).Name("maxLevel8Spells");
			Field(spellSlot => spellSlot.MaxLevel9).Name("maxLevel9Spells");
		}
	}
}
