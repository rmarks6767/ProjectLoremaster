using System.Collections.Generic;

namespace CharacterCreation
{
	class Weapon
	{
		public string Name { get; set; }
		public int AttackBonus { get; set; }
		public Dice Damage { get; set; }
		public DamageType DamageType { get; set; }
		public List<WeaponProperty> Properties { get; set; }
	}
}
