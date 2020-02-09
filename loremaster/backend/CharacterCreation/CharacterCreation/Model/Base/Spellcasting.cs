using System.Collections.Generic;

namespace CharacterCreation
{
	class Spellcasting
	{
		public Class SpellcastingClass { get; set; }
		public Ability SpellcastingAbility { get; set; }
		public int SpellSaveDC { get; set; }
		public int SpellAttackBonus { get; set; }
		public int SpellsKnown { get; set; }
		public List<Spell> Spells { get; set; }
		public SpellSlotTracker SpellSlots { get; set; }
	}
}
