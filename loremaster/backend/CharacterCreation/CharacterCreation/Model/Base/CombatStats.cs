using System.Collections.Generic;

namespace CharacterCreation
{
	class CombatStats
	{
		public List<Weapon> Weapons { get; set; }
		public int ArmorClass { get; set; }
		public int Initiative { get; set; }
		public int Speed { get; set; }
		public int MaxHealth { get; set; }
		public int CurrentHealth { get; set; }
		public int TemporaryHealth { get; set; }
		public Dice HitDice { get; set; }
		public int DeathSaveSuccess { get; set; }
		public int DeathSaveFail { get; set; }
	}
}
