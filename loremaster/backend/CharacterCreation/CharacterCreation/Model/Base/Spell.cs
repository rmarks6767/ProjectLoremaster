using System.Collections.Generic;

namespace CharacterCreation
{
	class Spell
	{
		public Note description { get; set; }
		public int Level { get; set; }
		public SchoolOfMagic School { get; set; }
		public int Range { get; set; }
		public bool ComponentVerbal { get; set; }
		public bool CompnentSomatic { get; set; }
		public List<string> ComponentMaterial { get; set; }
		public CastingTime CastingTime { get; set; }
		public AreaOfEffect AoE { get; set; }
		public bool IsPrepared { get; set; }
		public bool IsConcentration { get; set; }
		public bool IsRitual { get; set; }
	}
}
