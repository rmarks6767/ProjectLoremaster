namespace CharacterCreation
{
	class Character
	{
		public Info Info { get; set; }
		public StatBlock Ability { get; set; } 
		public Skill Skill { get; set; }
		public Stat Stat { get; set; }
		public CombatStats Combat { get; set; }
		public Equipment Equipment { get; set; }
		public Trait Trait { get; set; }
		public Personality Personality { get; set; }
		public Appearance Appearance { get; set; }
		public Description Description { get; set; }
		public Spellcasting Spellcasting { get; set; }		
	}
}
